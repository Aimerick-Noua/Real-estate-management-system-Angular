import { Component, OnInit } from '@angular/core';
import{render} from 'creditcardpayments/creditCardPayments'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() {
    render(
      {
        id:"#myPaypalButton",
        currency:"XOF",
        value:"5000.00",
        onApprove:(details)=>{
           alert("Transaction Successfull")
        }
      }
    )
   }

  ngOnInit(): void {
  }

}
