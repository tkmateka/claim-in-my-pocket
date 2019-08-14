/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class fundvalueService {
    urlBmodeller = 'http://127.0.0.1:24483/api/';

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
