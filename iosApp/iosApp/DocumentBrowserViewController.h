//
//  DocumentBrowserViewController.h
//  iosApp
//
//  Created by 박세연 on 31.07.23.
//

#import <UIKit/UIKit.h>

@interface DocumentBrowserViewController : UIDocumentBrowserViewController

- (void)presentDocumentAtURL:(NSURL *)documentURL;

@end
