import { Component } from '@angular/core';

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
}

@Component({
    selector: 'app-certificates',
    imports: [],
    templateUrl: './certificates.component.html',
    styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
    certificates: Certificate[] = [
        {
            id: 1,
            title: 'Excel',
            issuer: 'IT VEDANT',
            date: '2025',
            image: 'assets/advancedexcel.jpg'
        },
        {
            id: 2,
            title: 'SQL Mastery',
            issuer: 'IT VEDANT',
            date: '2025',
            image: 'assets/sqlmastery.jpg'
        },
        {
            id: 3,
            title: 'Power BI Essentials',
            issuer: 'IT VEDANT',
            date: '2025',
            image: 'assets/powerbiessentials.jpg'
        },
        // {
        //     id: 4,
        //     title: 'Tableau Essentials',
        //     issuer: 'IT VEDANT',
        //     date: '2026',
        //     image: 'assets/logo.svg'
        // },
        // {
        //     id: 5,
        //     title: 'Python Essentials For Data Science',
        //     issuer: 'IT VEDANT',
        //     date: '2026',
        //     image: 'assets/logo.svg'
        // },
        // {
        //     id: 6,
        //     title: 'NumPy And Statistical Analysis',
        //     issuer: 'IT VEDANT',
        //     date: '2026',
        //     image: 'assets/logo.svg'
        // },
        // {
        //     id: 7,
        //     title: 'Applied Data Analysis With Python',
        //     issuer: 'IT VEDANT',
        //     date: '2026',
        //     image: 'assets/logo.svg'
        // },
        // {
        //     id: 9,
        //     title: 'Machine Learning Mastery',
        //     issuer: 'IT VEDANT',
        //     date: '2026',
        //     image: 'assets/logo.svg'
        // },
        // {
        //     id: 10,
        //     title: 'Artificial Intelligence Essentials',
        //     issuer: 'IT VEDANT',
        //     date: '2026',
        //     image: 'assets/logo.svg'
        // }


    ];
}
