import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skills',
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {
    skillCategories = [
        {
            name: 'Front-end Development',
            skills: [
                { name: 'Angular', icon: 'devicon-angularjs-plain' },
                { name: 'HTML', icon: 'devicon-html5-plain' },
                { name: 'CSS', icon: 'devicon-css3-plain' },
                { name: 'JavaScript', icon: 'devicon-javascript-plain' },
                { name: 'TypeScript', icon: 'devicon-typescript-plain' },
                { name: 'React', icon: 'devicon-react-original' }
            ]
        },
        {
            name: 'Back-end Development',
            skills: [
                { name: 'Django', icon: 'devicon-django-plain' },
                { name: 'Python', icon: 'devicon-python-plain' },
                { name: 'MySQL', icon: 'devicon-mysql-plain' }
            ]
        },
        {
            name: 'AI Agents & LLMs',
            skills: [
                { name: 'LangChain', icon: 'devicon-python-plain' },
                { name: 'OpenAI API', icon: 'devicon-python-plain' },
                { name: 'Custom GPTs', icon: 'devicon-python-plain' },
                { name: 'Autonomous Agents', icon: 'devicon-python-plain' }
            ]
        },
        {
            name: 'Workflow Automation',
            skills: [
                { name: 'Python Scripting', icon: 'devicon-python-plain' },
                { name: 'n8n / Make.com', icon: 'devicon-python-plain' },
                { name: 'Selenium / Playwright', icon: 'devicon-python-plain' },
                { name: 'API Integration', icon: 'devicon-python-plain' }
            ]
        },
        {
            name: 'Data Science & AI',
            skills: [
                { name: 'Data Analysis', icon: 'devicon-pandas-plain' },
                { name: 'Machine Learning', icon: 'devicon-tensorflow-original' },
                { name: 'Artificial Intelligence', icon: 'devicon-pytorch-original' }
            ]
        }
    ];
}
