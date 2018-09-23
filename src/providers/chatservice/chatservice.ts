import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
/*
  Generated class for the ChatserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatserviceProvider {
//private url = 'http://54.93.231.104:9000';
private url = 'http://192.168.0.100:9000/';
private socket;
  constructor(public http: HttpClient) {
    console.log('Hello ChatserviceProvider Provider');
    this.socket = io(this.url);

  }
  joinchat(obj) {
    console.log(obj);
    console.log(this.socket);
    this.socket.emit('join', obj);
  }
  sendMessage(message) {
    this.socket.emit('createMessage', {
      text: message
    }, (err) => {
      console.log(err);
    });
  }
  sendMessagewithatt(message) {
    this.socket.emit('createMessage', {
      text: 'xxx',
      img: message
    }, (err) => {
      console.log(err);
    });
  }
  showtyping(obj) {
    this.socket.emit('typing', obj);
  }
  stopping(obj) {
    this.socket.emit('stop typing', obj);
  }
  seen(obj) {
    this.socket.emit('seen', obj);
  }
  chatendemit(obj) {
    this.socket.emit('chatend', obj);
  }
  fileupload(obj) {
    this.socket.emit('fileuploading', obj);
  }
  fileuploadend(obj) {
    this.socket.emit('fileuploaddone', obj);
  }
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('newMessage', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  getTyping() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('typing', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  stopTyping() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('stop typing', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  fileuplist() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('fileuploading', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  fileuploaddonelist() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('fileuploaddone', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  chatend() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('chatend', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  doubleclick() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('seen', (data) => {
        console.log('doubleit')
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  grabdis() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('disconnect', (data) => {
        console.log('doubleit')
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}
