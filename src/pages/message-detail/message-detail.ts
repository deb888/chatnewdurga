import { Component,OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { ChatserviceProvider } from '../../providers/chatservice/chatservice';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File,FileEntry, IFile } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ViewChildren, QueryList,  trigger, state, style, transition, animate, AfterViewChecked, ChangeDetectorRef, NgZone } from '@angular/core';
import { Platform, ToastController, ViewController, ModalController,  LoadingController, Content, PopoverController, AlertController } from 'ionic-angular';
// import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
// import { FileChooser } from '@ionic-native/file-chooser';
declare var window: any;
declare var cordova: any;
declare var FilePicker: any;
@IonicPage()
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html',
})
export class MessageDetail  implements OnInit,OnDestroy{

  public sender:string;
  public profile_img:string;
  public last_message:string;
  public send_like_icon:boolean = false;
  public likeBtnVisible:boolean = false;
  API_URL:any='';
  connection;
  message:any;
  typing: Boolean=false;
  online:boolean=false;
  public messages = []; // You can get all the chat details from your API
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  @ViewChild('textareainp') myInput;
  @ViewChild('textareainpx') myInputx;
  storageDirectory: string = '';
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private chatService:ChatserviceProvider,
    public platform: Platform,
    public androidPermissions: AndroidPermissions,
    private camera: Camera,
    public transfer:FileTransfer
    ,public lc: NgZone,private file:File,public filePath:FilePath) 
  {
    this.sender = this.navParams.get('sender');
    this.profile_img = this.navParams.get('profile_img');
    this.last_message = this.navParams.get('last_message');
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      success => console.log('Permission granted'),
      err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    if (this.platform.is('ios')) {
      this.storageDirectory = cordova.file.documentsDirectory;
    }
    else if (this.platform.is('android')) {
      this.storageDirectory = cordova.file.documentsDirectory;
    }
    this.filePath.resolveNativePath(this.file.dataDirectory)
    .then(
    (filePath) => {
      let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
      console.log("Correct_Path" + correctPath);
      this.storageDirectory = this.file.externalApplicationStorageDirectory;





    },
    (err) => {
      console.log("Error" + err);
    });
  }

  sendLike() {
    if(this.send_like_icon === false) {
      this.send_like_icon = true;
    }
      // Allow heart effect
      this.likeBtnVisible = !this.likeBtnVisible;
  }
  ngOnInit(){
    setTimeout(()=>{
      this.joinchat();
    },3000);
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.typing = false;
      let msgx = JSON.parse(JSON.stringify(message));

      let res = msgx.text.substr(0, msgx.text.indexOf('.'));
      let resx = res.replace(/[^a-zA-Z0-9]/g, "");
      msgx.videsnap = 'http://18.220.184.160/uploads/chatattachment/snap/' + resx + '.png';
      console.log(msgx);
      if (msgx.from == 'Disconnect') {
        this.online = false;
      } else {
        this.messages.push(msgx);
      }

      //  this.doubleclik();

      console.log(this.messages);
      this.scrollToBottom();
    });
  }
  _focus() {

    this.content.resize();
    this.scrollToBottom()
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 1000)
  }
  ngOnDestroy(){

  }
  joinchat() {
    // console.log(this.form);
    let obj = {
      'name':  this.sender,
      'room': "12"

    };

    console.log(obj);
    this.chatService.joinchat(obj);
    // let ob = {
    //   'name': this.appUser.loginResponse[0].username,
    // }
    //
    // this.chatService.seen(ob);
  }
  msgSend() {
    let ob = {
      'name': this.sender,
    }
    let obj = {
      'name': this.sender,
      'id': this.sender,
      'type': 'this.appUser.user_type',
    }
   // this.chatService.seen(obj);
    this.chatService.sendMessage(this.message);
    this.message = '';
   // this._isOpenEmojiPicker = false;

   // this.camicon = true
   // this.cambutton = false;
    this.myInput.setFocus();
    //console.log(JSON.stringify(this.messages));
    //console.log(JSON.stringify(this.user_name))
  }
  // openCamera() {
  //   let fileTransfer: FileTransferObject;
  //   const options: CameraOptions = {
  //     quality: 50,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true,
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     //  this.base64Image = 'data:image/png;base64,' + imageData;
  //     // console.log(this.base64Image);
  //     console.log(imageData);
  //     let uri = imageData;
  //     let currentName = imageData.substr(imageData.lastIndexOf('/') + 1)
  //     fileTransfer = this.transfer.create();

  //     let options: FileUploadOptions = {
  //       fileKey: 'photo',
  //       fileName: currentName,
  //       httpMethod: "POST",
  //       chunkedMode: false,
  //       headers: {
  //         Connection: "close"
  //       }

  //     }
  //     console.log(options);
  //     const url: string = `${this.API_URL}/chatfileup`;
  //     console.log(currentName);
  //     console.log(uri);

  //     //  this.loading.present();
  //    // this.up = true;
  //     let chatobj = {
  //       name: this.sender,
  //       type: 'this.appUser.user_type',
  //       id: 'this.appUser.loginResponse[0].id',
  //       fnm: currentName
  //     }
  //     this.chatService.sendMessage(currentName);
  //     this.chatService.fileupload(chatobj);
  //     fileTransfer.upload(uri, url, options)
  //       .then((data) => {

  //      //   this.up = false;
  //         if (data.response = "Upload and move success") {
  //           console.log(data);
  //           //this.loading.dismiss();
  //           //this.chatService.sendMessage(currentName);
  //           this.chatService.fileuploadend(chatobj);
  //         }


  //       }, (err) => {
  //         //this.loading.dismiss();
  //         console.log(err);
  //       })


  //     //this.message=this.base64Image;
  //     // this.chatService.sendMessagewithatt(this.base64Image);
  //   }, (err) => {
  //   });

  // }
}
