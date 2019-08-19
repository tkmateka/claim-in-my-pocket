import { register } from '../src/app/models/register.model';
import { login } from '../src/app/models/login.model';
import { claim } from '../src/app/models/claim.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
register: register;
login: login;
claim: claim;
//DECLARE NEW VARIABLE

constructor() {
this.register = new register();
this.login = new login();
this.claim = new claim();
//CREATE NEW DM INSTANCE
    }
}