import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
private isDarkMode: boolean = true; // Start with dark mode

  constructor() { 
   // Check for saved theme on initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    }
    this.applyTheme();
  }

  // Get current theme state
  getTheme(): boolean {
    return this.isDarkMode;
  }

  // Toggle theme and apply it
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  // Apply theme to the document and save to localStorage
  private applyTheme(): void {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
