import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService: TranslateService) {
  }

  setLanguage(lang: string): void{
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', lang);
    }

     this.translateService.use(lang!);
  }

  getSelectedLanguage(): string {
    return localStorage?.getItem('lang') || 'es';
  }

  setDefaultLanguage(language: string): void {

    this.translateService.setDefaultLang(language);

    this.setLanguage(language);
  }

  getDefaultLanguage(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('lang') || 'es';
    }
    return 'es';
  }
}
