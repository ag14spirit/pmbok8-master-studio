#import <Foundation/Foundation.h>
#import <PDFKit/PDFKit.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSURL *url = [NSURL fileURLWithPath:@"pmbok8.pdf"];
        PDFDocument *doc = [[PDFDocument alloc] initWithURL:url];
        NSInteger total = [doc pageCount];
        int textPages = 0;
        for (int i = 0; i < total; i++) {
            PDFPage *page = [doc pageAtIndex:i];
            NSString *content = [page string];
            if (content && [content length] > 0) {
                textPages++;
                NSLog(@"Page %d has text: %ld chars (Preview: %@)", i+1, (long)[content length], [content substringToIndex:MIN(50, [content length])]);
            }
        }
        NSLog(@"Total pages with text: %d / %ld", textPages, (long)total);
    }
    return 0;
}
