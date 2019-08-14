/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class authService {
    logged: boolean = false;

    isLoggedIn() {
        return this.logged;
    }
}
