import { Component } from '@angular/core';

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
}

@Component({
    selector: 'app-certificates',
    imports: [],
    templateUrl: './certificates.component.html',
    styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
    certificates: Certificate[] = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: `Certificate of Achievement ${i + 1}`,
        issuer: 'Udemy / Coursera / LinkedIn',
        date: '2023'
    }));
}
