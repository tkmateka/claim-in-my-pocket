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

    noTransact: boolean = true;
    showContent: boolean = false;

    fundvalue: any = [];
    transactions: any = [];
    configurations: any = [];

    constructor(
        private bdms: NDataModelService, private funds: fundvalueService, private route: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        // Get Fund Value
        this.funds.getFundValue().then((res) => {
            this.fundvalue = res;
            this.showContent = true;
        })

        // Get Transactions
        this.funds.getTransactions().then((res) => {
            this.transactions = res;
        })

        // Get Configurations
        this.funds.getConfigurations().then((res) => {
            this.configurations = res;
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


}
