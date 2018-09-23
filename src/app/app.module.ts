import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { PostPopover } from '../pages/home/post-popover';
import { Search } from '../pages/search/search';
import { ModalPost } from '../pages/modal-post/modal-post';
import { Messages } from '../pages/messages/messages';
import { MessageDetail } from '../pages/message-detail/message-detail';
import { NewMessage } from '../pages/new-message/new-message';
import { Notifications } from '../pages/notifications/notifications';
import { Profile } from '../pages/profile/profile';
import { EditProfile } from '../pages/edit-profile/edit-profile';
import { TaggedProfile } from '../pages/tagged-profile/tagged-profile';
import { SavedProfile } from '../pages/saved-profile/saved-profile';
import { Options } from '../pages/options/options';
import { Comments } from '../pages/comments/comments';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
import { EmojiProvider } from '../providers/emoji/emoji';
import { GetaudioformatPipe } from '../pipes/getaudioformat/getaudioformat';
import { GetfilenmPipe } from '../pipes/getfilenm/getfilenm';
import { OrderbydataPipe } from '../pipes/orderbydata/orderbydata';
import { StrsearchPipe } from '../pipes/strsearch/strsearch';
import { Fileex } from '../pipes/fileex';
import { FormatConvert } from '../pipes/format-convert';
import { TimerProvider } from '../providers/timer/timer';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';
import { AndroidPermissions } from '@ionic-native/android-permissions';
// import { Chooser } from '@ionic-native/chooser';
@NgModule({
  declarations: [
    MyApp,
    Home,
    PostPopover,
    Search,
    ModalPost,
    Messages,
    MessageDetail,
    NewMessage,
    Notifications,
    Profile,
    EditProfile,
    TaggedProfile,
    SavedProfile,
    Options,
    Comments,
    TabsPage,
    GetaudioformatPipe,
    GetfilenmPipe,
    OrderbydataPipe,
    StrsearchPipe,
    Fileex,
    FormatConvert
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    PostPopover,
    Search,
    ModalPost,
    Messages,
    MessageDetail,
    NewMessage,
    Notifications,
    Profile,
    EditProfile,
    TaggedProfile,
    SavedProfile,
    Options,
    Comments,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    Camera,
ChatserviceProvider,
FileChooser,FilePath,
FileOpener,
AndroidPermissions,
    EmojiProvider,FileTransfer,File ]
})
export class AppModule {}
