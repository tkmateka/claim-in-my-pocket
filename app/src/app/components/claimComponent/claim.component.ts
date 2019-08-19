/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

import { Router } from '@angular/router';
import { fundvalueService } from '../../services/fundvalue/fundvalue.service';

import { claim } from "../../models/claim.model";

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-claim',
    templateUrl: './claim.template.html'
})

export class claimComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    claimRes;
    claim: claim;

    constructor(private bdms: NDataModelService, private funds: fundvalueService, private route: Router,
        private alertService: NSnackbarService) {
        super();
        this.mm = new ModelMethods(bdms);

        this.claim = new claim();
    }

    ngOnInit() {

    }

    claimFunc(claimValue) {
        this.funds.claim(claimValue).then((res: any) => {
            this.claimRes = res;
            this.alertService.openSnackBar(res.description);
            console.log(this.claimRes, 'Claim res');
        });
    }

    cancel() {
        this.route.navigate(['/home']);
    }
}
