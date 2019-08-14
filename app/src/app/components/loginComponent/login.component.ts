/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

import { register } from "../../models/register.model";
import { login } from "../../models/login.model";

import { authService } from '../../services/auth/auth.service';
import { fundvalueService } from '../../services/fundvalue/fundvalue.service';

import { Router } from '@angular/router';

import { NHTTPLoaderService } from 'neutrinos-seed-services';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-login',
    templateUrl: './login.template.html'
})

export class loginComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    spinner = false;

    register: register;
    login: login;

    hasAccount: boolean = true;
    idError: boolean = false;
    pswError: boolean = false;

    constructor(
        private bdms: NDataModelService, private auth: authService,
        private route: Router, private fundvalue: fundvalueService,
        private nLoader: NHTTPLoaderService) {
        super();
        this.mm = new ModelMethods(bdms);
        this.register = new register();
        this.login = new login();
    }

    ngOnInit() {
        this.nLoader._isHTTPRequestInProgress$.subscribe(res => {
            this.spinner = res;
        })
    }

    // Register
    reg() {
        console.log(this.register);
    }

    // Login
    log(idNum, pwd) {
        if (idNum.length < 13) {
            this.idError = true;
            return false;
        } else if (pwd.length < 4) {
            this.pswError = true;
            return false;
        }

        this.fundvalue.getFundValue();
        this.auth.logged = true;
        this.route.navigate(['/home']);
    }

    switchForm(bool) {
        this.hasAccount = bool;
    }

}
