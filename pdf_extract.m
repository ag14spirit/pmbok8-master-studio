#import <Foundation/Foundation.h>
#import <PDFKit/PDFKit.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        if (argc < 4) {
            NSLog(@"Usage: pdf_extract <pdf_path> <start_page> <end_page>");
            return 1;
        }
        NSString *path = [NSString stringWithUTF8String:argv[1]];
        int startPage = atoi(argv[2]);
        int endPage = atoi(argv[3]);
        
        NSURL *url = [NSURL fileURLWithPath:path];
        PDFDocument *doc = [[PDFDocument alloc] initWithURL:url];
        if (!doc) {
            NSLog(@"Failed to load %@", path);
            return 1;
        }
        
        NSInteger total = [doc pageCount];
        if (startPage < 1) startPage = 1;
        if (endPage > total) endPage = (int)total;
        
        for (int i = startPage; i <= endPage; i++) {
            PDFPage *page = [doc pageAtIndex:(i - 1)];
            NSString *content = [page string];
            printf("=== PAGE %d ===\n", i);
            if (content) {
                printf("%s\n", [content UTF8String]);
            } else {
                printf("[NO TEXT]\n");
            }
        }
    }
    return 0;
}
