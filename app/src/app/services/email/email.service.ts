/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class emailService {
    // urlBmodeller = 'http://10.200.65.39:24483/api/';
    urlBmodeller = 'http://127.0.0.1:24483/api/';

    constructor(private http: HttpClient) { }

    // Send email
    sendEmail(emailsString, emailBody) {
        console.log('called')
        console.table(emailsString,emailBody);
        let body = {
            "toAddress": emailsString,
            "emailBody": emailBody
        }
        return this.http.post(this.urlBmodeller + 'login-email', body, {responseType: 'text'}).subscribe(res => {
            console.log(res, " email sent");
        }, err => {
            console.log(err, " email Failed");
        })
    }
}
