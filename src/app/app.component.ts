import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from './services/language.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    LoginComponent,
    MatToolbarModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  actualLang?: string;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    const defaultLanguage = this.languageService.getDefaultLanguage();
    this.actualLang = defaultLanguage;
    this.languageService.setDefaultLanguage(defaultLanguage);
  }

  changeLanguage(lang: string): void {
    this.actualLang = lang;
    this.languageService.setLanguage(lang);
  }
}
