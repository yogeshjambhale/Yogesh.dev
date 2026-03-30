import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    title: 'Home | Yogesh Jambhale - AI Agent & Automation Expert'
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent),
    title: 'AI & Web Projects | Yogesh Jambhale - Portfolio'
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent),
    title: 'Core Skills | AI, Automation & Full Stack Development'
  },
  {
    path: 'certificates',
    loadComponent: () => import('./certificates/certificates.component').then(m => m.CertificatesComponent),
    title: 'Professional Certifications | Yogesh Jambhale'
  },
  {
    path: 'resume',
    loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent),
    title: 'Resume & Experience | Yogesh Jambhale - Hire Expert'
  },
  {
    path: 'about-me',
    loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent),
    title: 'About Yogesh Jambhale | AI & Automation Specialist'
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Contact Yogesh Jambhale | Hire for AI & Web Solutions'
  },
  { path: '**', redirectTo: '/home' }
];

