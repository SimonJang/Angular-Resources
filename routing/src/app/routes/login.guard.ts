import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
    canActivate() {
        return this.checkedIfLoggedIn();
    }

    private checkedIfLoggedIn(): boolean {
        const loggedIn: boolean = Math.random() < 0.5;
        console.log('Login Guard status: ' + loggedIn);
        return loggedIn;
    }
}