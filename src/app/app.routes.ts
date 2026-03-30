import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    title: 'Home | Yogesh Jambhale - Full Stack Developer'
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects | Yogesh Jambhale - Portfolio'
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent),
    title: 'Skills | Yogesh Jambhale - Technical Expertise'
  },
  {
    path: 'certificates',
    loadComponent: () => import('./certificates/certificates.component').then(m => m.CertificatesComponent),
    title: 'Certificates | Yogesh Jambhale'
  },
  {
    path: 'resume',
    loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent),
    title: 'Resume | Yogesh Jambhale - Professional Experience'
  },
  {
    path: 'about-me',
    loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent),
    title: 'About Me | Yogesh Jambhale'
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Contact Us | Yogesh Jambhale'
  },
  { path: '**', redirectTo: '/home' }
];

