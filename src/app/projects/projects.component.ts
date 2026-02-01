import { Component } from '@angular/core';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            id: 1,
            title: 'House Rent Predictor',
            description: 'Advanced AI market analysis for the modern homeowner.',
            image: 'assets/bg1.png',
            technologies: ['Machine Learning', 'Streamlit', 'sklearn', 'Pandas', 'Numpy', 'Matplotlib'],
            link: 'https://renthousing.streamlit.app/'
        },
        {
            id: 2,
            title: 'Heart stroke prediction',
            description: 'A machine learning application designed to predict the probability of a stroke by analyzing key patient health metrics such as age, hypertension, glucose levels, and BMI.',
            image: 'assets/bg2.png',
            technologies: ['Machine Learning', 'Streamlit', 'sklearn', 'Pandas', 'Numpy', 'Matplotlib'],
            link: 'https://heartdiseasespredictor.streamlit.app/'
        },
        {
            id: 3,
            title: 'Movie Recommendation System',
            description: 'A movie recommendation system based on user preferences and ratings.',
            image: 'assets/bg3.png',
            technologies: ['Machine Learning', 'Streamlit', 'sklearn', 'Pandas', 'Numpy', 'Matplotlib'],
            link: '#'
        },
        {
            id: 4,
            title: 'Kokan Cummunity App',
            description: 'A community app for Kokan.',
            image: 'assets/bg4.png',
            technologies: ['Angular', 'django', 'nosql', 'nodejs', 'typescript', 'python'],
            link: 'https://aplakokan.cloud'
        },
        {
            id: 5,
            title: 'Invoice Generator Website',
            description: 'A website for generating invoices.',
            image: 'assets/bg5.png',
            technologies: ['Angular', 'typescript', 'bootstrap', 'html', 'css'],
            link: 'https://zentrobill.netlify.app/'
        }
    ];
}
