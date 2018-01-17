import { Component, OnInit } from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";
import {LANG_METADATA} from "../lang-metadata";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  private langCode: string;
  langMetaData = LANG_METADATA;

  constructor(public i18nSupport: I18nSupportService) {
    this.langCode = i18nSupport.langCode
  }

  ngOnInit() {
  }

  syncToService(code: string){
    this.i18nSupport.langCode = code;
  }

}
