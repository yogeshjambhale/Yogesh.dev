import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-portfolio');
  isMenuOpen = false;

  // Background Bubbles Logic
  backgroundSkills: { icon: string; left: number; delay: number; duration: number }[] = [];

  constructor() {
    const skills = [
      'devicon-angularjs-plain', 'devicon-html5-plain', 'devicon-css3-plain',
      'devicon-javascript-plain', 'devicon-typescript-plain', 'devicon-react-original',
      'devicon-django-plain', 'devicon-python-plain', 'devicon-mysql-plain',
      'devicon-pandas-plain', 'devicon-tensorflow-original', 'devicon-pytorch-original'
    ];

    // Create multiple instances of skills to fill the background
    const repeatedSkills = [...skills, ...skills, ...skills];

    this.backgroundSkills = repeatedSkills.map(icon => ({
      icon: icon,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 20, // Random delay (0-20s)
      duration: 15 + Math.random() * 20 // Random duration (15-35s)
    }));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
