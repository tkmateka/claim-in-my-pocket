/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class fundvalueService {
    urlBmodeller = 'http://10.200.65.39:24483/api/';

    idNumber:number = 0;

    constructor(private http: HttpClient) {

    }

    // Get Fund Value
    getFundValue() {
        return new Promise((resolve, reject) => {
            return this.http.get(this.urlBmodeller + 'fundvalue').subscribe((res) => {
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
}
