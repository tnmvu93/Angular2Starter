import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <main>
            <header>
                <nav class="navbar navbar-inverse">
                    <div class="navbar-header">
                        <a href="/" class="navbar-brand">My Angular 2!</a>
                    </div>
                </nav>
            </header>

            <p *ngFor="let user of users">The user is {{user.name}} ({{user.username}}).</p>
        </main>

        <div *ngIf="users">
            <div class="jumbotron">
                <h1>Welcome to  Our App!</h1>
                <p>{{message}}</p>
            </div>
        </div>

        <footer class="text-center">
            Copyright &copy; 2016
        </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]
})

export class AppComponent {
    message = 'Hello';
    users = [
        { id: 93, name: 'Vu', username: 'babakiwi' },
        { id: 94, name: 'Minh', username: 'sodacoca' }
    ];
}