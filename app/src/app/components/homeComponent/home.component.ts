/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

import { Router } from '@angular/router';

import { fundvalueService } from '../../services/fundvalue/fundvalue.service';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    showContent: boolean = false;

    idNum: any = '';

    fundvalue: any = [];
    transactions: any = [];
    configurations: any = [];

    claimRes: any = [];

    first3Transactions: any = [];

    constructor(
        private bdms: NDataModelService, private funds: fundvalueService, private route: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.idNum = this.funds.idNumber;
        
        // Get Fund Value
        this.funds.getFundValue().then((res:any) => {
            let selectedUser = [];

            for (let i = 0; i < res.length; i++) {
                if (res[i]['idNumber'].trim() == this.idNum) {
                    selectedUser.push(res[i]);
                }
            };

            this.fundvalue.push(selectedUser[0]);
            console.log(this.fundvalue, 'Before loop');
            this.showContent = true;
        })

        // Get Transactions
        this.funds.getTransactions().then((res:any) => {
            let selectedUser = [];

            console.log(res, 'Before loop');

            for (let i = 0; i < res.length; i++) {
                if (res[i]['idNumber'].trim() == this.idNum) {
                    selectedUser.push(res[i]);
                }
            };

            this.transactions.push(selectedUser);
            console.log("Transactions", this.transactions);

            this.first3Transactions.push(this.transactions[0].slice(0, 3));
            this.first3Transactions = this.first3Transactions[0];
            console.log("First 3 Transactions", this.first3Transactions);

        })

        // Get Configurations
        this.funds.getConfigurations().then((res:any) => {
            let selectedUser = [];

            console.log(res, 'Before loop');

            for (let i = 0; i < res.length; i++) {
                if (res[i]['idNumber'].trim() == this.idNum) {
                    selectedUser.push(res[i]);
                }
            };

            this.configurations.push(selectedUser);

            console.log("Configurations", this.configurations)

            for (let i = 0; i < this.configurations.length; i++) {
                this.configurations[i]['readOnly'] = true;
                this.configurations[i]['showSubmit'] = false;
            }
        })
    }

    editConfig(sel) {
        sel['readOnly'] = false;
        sel['showSubmit'] = true;
    }

    submitConfig(sel) {
        sel['readOnly'] = true;
        sel['showSubmit'] = false;

        delete sel['readOnly'];
        delete sel['showSubmit'];

        // Call post api...

    }

    // Cancel Config Edit
    cancelConfigEdit(sel) {
        sel['readOnly'] = true;
        sel['showSubmit'] = false;
    }

    // Log Out
    logout() {
        this.route.navigate(['/login']);
    }

    claim(){
        this.funds.claim().then((res:any) => {
            this.claimRes = res;
            alert(
                `Status: ${res.status},
                 Description: ${res.description}`
            )
            console.log(this.claimRes, 'Claim res');
        });
    }


}
