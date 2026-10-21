#import <Foundation/Foundation.h>
#import <PDFKit/PDFKit.h>
#import <Vision/Vision.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSURL *url = [NSURL fileURLWithPath:@"pmbok8.pdf"];
        PDFDocument *doc = [[PDFDocument alloc] initWithURL:url];
        if (!doc || [doc pageCount] == 0) return 1;
        
        int pageNum = 1;
        if (argc > 1) pageNum = atoi(argv[1]);
        
        PDFPage *page = [doc pageAtIndex:(pageNum - 1)];
        // Render page to image
        NSRect bounds = [page boundsForBox:kPDFDisplayBoxMediaBox];
        NSImage *image = [[NSImage alloc] initWithSize:bounds.size];
        [image lockFocus];
        CGContextRef context = [[NSGraphicsContext currentContext] CGContext];
        [page drawWithBox:kPDFDisplayBoxMediaBox toContext:context];
        [image unlockFocus];
        
        CGImageRef cgImage = [image CGImageForProposedRect:NULL context:NULL hints:NULL];
        if (!cgImage) {
            NSLog(@"Failed to get CGImage");
            return 1;
        }
        
        VNRecognizeTextRequest *request = [[VNRecognizeTextRequest alloc] init];
        request.recognitionLevel = VNRequestTextRecognitionLevelAccurate;
        request.usesLanguageCorrection = YES;
        
        VNImageRequestHandler *handler = [[VNImageRequestHandler alloc] initWithCGImage:cgImage options:@{}];
        NSError *error = nil;
        [handler performRequests:@[request] error:&error];
        if (error) {
            NSLog(@"Error: %@", error);
            return 1;
        }
        
        NSArray<VNRecognizedTextObservation *> *results = request.results;
        NSLog(@"Page %d OCR recognized %ld text observations:", pageNum, (long)[results count]);
        for (VNRecognizedTextObservation *obs in results) {
            VNRecognizedText *top = [[obs topCandidates:1] firstObject];
            if (top) {
                printf("%s\n", [top.string UTF8String]);
            }
        }
    }
    return 0;
}
