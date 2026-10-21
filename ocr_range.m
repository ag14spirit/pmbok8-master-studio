#import <Foundation/Foundation.h>
#import <PDFKit/PDFKit.h>
#import <Vision/Vision.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        if (argc < 3) {
            NSLog(@"Usage: ocr_range <start_page> <end_page>");
            return 1;
        }
        int startPage = atoi(argv[1]);
        int endPage = atoi(argv[2]);
        
        NSURL *url = [NSURL fileURLWithPath:@"pmbok8.pdf"];
        PDFDocument *doc = [[PDFDocument alloc] initWithURL:url];
        if (!doc) return 1;
        
        VNRecognizeTextRequest *request = [[VNRecognizeTextRequest alloc] init];
        request.recognitionLevel = VNRequestTextRecognitionLevelFast; // fast for scanning TOC
        request.usesLanguageCorrection = YES;
        
        for (int p = startPage; p <= endPage; p++) {
            @autoreleasepool {
                PDFPage *page = [doc pageAtIndex:(p - 1)];
                NSRect bounds = [page boundsForBox:kPDFDisplayBoxMediaBox];
                NSImage *image = [[NSImage alloc] initWithSize:bounds.size];
                [image lockFocus];
                CGContextRef context = [[NSGraphicsContext currentContext] CGContext];
                [page drawWithBox:kPDFDisplayBoxMediaBox toContext:context];
                [image unlockFocus];
                
                CGImageRef cgImage = [image CGImageForProposedRect:NULL context:NULL hints:NULL];
                if (!cgImage) continue;
                
                VNImageRequestHandler *handler = [[VNImageRequestHandler alloc] initWithCGImage:cgImage options:@{}];
                [handler performRequests:@[request] error:nil];
                
                printf("=== PAGE %d ===\n", p);
                for (VNRecognizedTextObservation *obs in request.results) {
                    VNRecognizedText *top = [[obs topCandidates:1] firstObject];
                    if (top) {
                        printf("%s\n", [top.string UTF8String]);
                    }
                }
            }
        }
    }
    return 0;
}
