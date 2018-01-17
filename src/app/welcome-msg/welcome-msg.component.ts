import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from "../i18n-support.service";
import { MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})

export class WelcomeMsgComponent implements AfterViewInit {
  userName = "";
  private welcomeMsg : string;
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;


  constructor(public i18nSupportService: I18nSupportService, public matSnackBar: MatSnackBar) {}

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupportService.getWelcomeMsgByCode(this.userName);
  }


  // 뷰가 초기화될때 angular가 호출
  ngAfterViewInit(){
    const checkTouchedFn = () =>{
      if(this.valid) return;
      this.matSnackBar.open('이름을 입력해 주세요.');
    }

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onChange(){
    this.valid = this.userName.length > 0;
  }

  /*onKeyUp(name){
    console.log(name.length);
    this.valid = name.length > 0;
  }

  setName(name){
    this.userName = name;
  }*/


}
