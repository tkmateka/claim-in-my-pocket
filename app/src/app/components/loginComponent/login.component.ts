/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

import { register } from "../../models/register.model";
import { login } from "../../models/login.model";

import { authService } from '../../services/auth/auth.service';
import { fundvalueService } from '../../services/fundvalue/fundvalue.service';
import { emailService } from '../../services/email/email.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';


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

    register: register;
    login: login;

    hasAccount: boolean = true;
    idError: boolean = false;
    pswError: boolean = false;
    sentCode: boolean = false;

    randomKey;

    constructor(
        private bdms: NDataModelService, private auth: authService,
        private route: Router, private fundvalue: fundvalueService,
        private emailService: emailService, private _location: Location, 
        private alertService: NSnackbarService) {
        super();
        this.mm = new ModelMethods(bdms);
        this.register = new register();
        this.login = new login();
    }

    ngOnInit() {

    }

    // Go Back
    goback() {
        this._location.back();
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

        this.randomKey = Math.floor(1000 + Math.random() * 9000);

        let emailsString = "tukiso.mateka@neutrinos.co";
        let emailBody = "To login please enter the following number " + this.randomKey;

        this.emailService.sendEmail(emailsString, emailBody);

        this.fundvalue.idNumber = idNum;

        this.sentCode = true;
    }

    cancelOtp() {
        this.sentCode = false;
    }

    verifyCode(a, b, c, d, form) {
        let incomingCode = Number(`${a}${b}${c}${d}`);

    console.log(this.randomKey);

        if (incomingCode == this.randomKey) {
            this.fundvalue.getFundValue();
            this.auth.logged = true;
            this.route.navigate(['/home']);
        } else {
            this.alertService.openSnackBar('Please enter a valid OTP code');
        }
    }

    // Switch form
    switchForm(bool) {
        this.hasAccount = bool;
    }

    // Switch Inputs
    onInputEntry(event, nextInput) {
        let input = event.target;
        let length = input.value.length;
        let maxLength = input.attributes.maxlength.value;

        if (length >= maxLength) {
            nextInput.focus();
        }
    }

}
