#import <Foundation/Foundation.h>
#import <PDFKit/PDFKit.h>
#import <Vision/Vision.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        int startPage = 1;
        int endPage = 401;
        if (argc > 1) startPage = atoi(argv[1]);
        if (argc > 2) endPage = atoi(argv[2]);
        
        NSURL *url = [NSURL fileURLWithPath:@"pmbok8.pdf"];
        PDFDocument *doc = [[PDFDocument alloc] initWithURL:url];
        if (!doc) {
            NSLog(@"Could not open pmbok8.pdf");
            return 1;
        }
        
        NSFileManager *fm = [NSFileManager defaultManager];
        [fm createDirectoryAtPath:@"extracted_text" withIntermediateDirectories:YES attributes:nil error:nil];
        
        VNRecognizeTextRequest *request = [[VNRecognizeTextRequest alloc] init];
        request.recognitionLevel = VNRequestTextRecognitionLevelAccurate;
        request.usesLanguageCorrection = YES;
        
        NSLog(@"Starting OCR from page %d to %d...", startPage, endPage);
        NSDate *startTime = [NSDate date];
        
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
                
                NSMutableString *pageText = [NSMutableString string];
                for (VNRecognizedTextObservation *obs in request.results) {
                    VNRecognizedText *top = [[obs topCandidates:1] firstObject];
                    if (top) {
                        [pageText appendString:top.string];
                        [pageText appendString:@"\n"];
                    }
                }
                
                NSString *filePath = [NSString stringWithFormat:@"extracted_text/page_%03d.txt", p];
                [pageText writeToFile:filePath atomically:YES encoding:NSUTF8StringEncoding error:nil];
                
                if (p % 20 == 0 || p == endPage) {
                    NSLog(@"Processed page %d/%d (%.1f s)", p, endPage, -[startTime timeIntervalSinceNow]);
                }
            }
        }
        NSLog(@"OCR extraction completed!");
    }
    return 0;
}
