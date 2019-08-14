/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

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
        private bdms: NDataModelService, private funds: fundvalueService) {
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
        })
    }

}
