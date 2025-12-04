import { Component } from '@angular/core';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: Project[] = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: `Project ${i + 1}`,
        description: 'This is a random project description to demonstrate the card layout. It showcases the use of various technologies.',
        image: 'assets/project-placeholder.png',
        technologies: ['Angular', 'TypeScript', 'CSS']
    }));
}
