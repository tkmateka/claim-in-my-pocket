/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class fundvalueService {
    urlBmodeller = 'http://10.200.65.39:24483/api/';

    idNumber: number = 0;
    fundValue: any = [];

    constructor(private http: HttpClient) {

    }

    // Get Fund Value
    getFundValue() {
        return new Promise((resolve, reject) => {
            return this.http.get(this.urlBmodeller + 'fundvalue').subscribe((res) => {
                console.log(res)
                return resolve(res);
            }, (err) => {
                return reject(err);
            })
        })
    }

    // Get Transactions
    getTransactions() {
        return new Promise((resolve, reject) => {
            return this.http.get(this.urlBmodeller + 'transactions').subscribe((res) => {
                return resolve(res);
            }, (err) => {
                return reject(err);
            })
        })
    }

    // Get Configurations
    getConfigurations() {
        return new Promise((resolve, reject) => {
            return this.http.get(this.urlBmodeller + 'configurations').subscribe((res) => {
                return resolve(res);
            }, (err) => {
                return reject(err);
            })
        })
    }

    // Register
    register(id) {
        let body = id;
        return new Promise((resolve, reject) => {
            return this.http.post(this.urlBmodeller + 'register', body).subscribe((res) => {
                return resolve(res);
            }, (err) => {
                return reject(err);
            })
        })
    }


    // Claim
    claim() {
        let body = {
            "idNumber": "9303030896087",
            "referenceNumber": "888081354",
            "claimValue": "50",
            "claimComment": "test"
        };
        return new Promise((resolve, reject) => {
            return this.http.post(this.urlBmodeller + 'claim', body).subscribe((res) => {
                return resolve(res);
            }, (err) => {
                return reject(err);
            })
        })
    }
}
