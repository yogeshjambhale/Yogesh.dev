import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
    roles: string[] = [
        'Full Stack Web Developer',
        'Angular Developer',
        'Django Developer',
        'Data Analyst',
        'Python Expert'
    ];
    currentRole = signal('');
    private roleIndex = 0;
    private charIndex = 0;
    private isDeleting = false;
    private typingSpeed = 100;
    private deletingSpeed = 50;
    private pauseBetweenRoles = 2000;
    private timer: any;

    ngOnInit() {
        this.type();
    }

    ngOnDestroy() {
        clearTimeout(this.timer);
    }

    type() {
        const currentFullRole = this.roles[this.roleIndex];

        if (this.isDeleting) {
            this.currentRole.set(currentFullRole.substring(0, this.charIndex - 1));
            this.charIndex--;
        } else {
            this.currentRole.set(currentFullRole.substring(0, this.charIndex + 1));
            this.charIndex++;
        }

        let typeSpeed = this.typingSpeed;

        if (this.isDeleting) {
            typeSpeed = this.deletingSpeed;
        }

        if (!this.isDeleting && this.charIndex === currentFullRole.length) {
            typeSpeed = this.pauseBetweenRoles;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.roleIndex = (this.roleIndex + 1) % this.roles.length;
            typeSpeed = 500;
        }

        this.timer = setTimeout(() => this.type(), typeSpeed);
    }
}
