import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home | Yogesh Jambhale' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | Yogesh Jambhale' },
  { path: 'skills', component: SkillsComponent, title: 'Skills | Yogesh Jambhale' },
  { path: 'certificates', component: CertificatesComponent, title: 'Certificates | Yogesh Jambhale' },
  { path: 'resume', component: ResumeComponent, title: 'Resume | Yogesh Jambhale' },
  { path: 'about-me', component: AboutMeComponent, title: 'About Me | Yogesh Jambhale' },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us | Yogesh Jambhale' },
  { path: '**', redirectTo: '/home' }
];

