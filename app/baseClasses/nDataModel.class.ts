import { register } from '../src/app/models/register.model';
import { login } from '../src/app/models/login.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
register: register;
login: login;
//DECLARE NEW VARIABLE

constructor() {
this.register = new register();
this.login = new login();
//CREATE NEW DM INSTANCE
    }
}