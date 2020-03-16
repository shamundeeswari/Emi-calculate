import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';



@Component({
  selector: 'app-emi-calculate',
  templateUrl: './emi-calculate.component.html',
  styleUrls: ['./emi-calculate.component.css']
})
export class EmiCalculateComponent implements OnInit {

   

// emi calculation //

  pemi = {
    value: "800000"
  }
  remi = {
    value: "8"
  }

  memi = {
    value: "6"
  }

  query = {
    amount: "",
    interest: "",    
    tenureMo: ""
  }

  result = {
    emi: "",
    interest: "",
    total: ""
  }


  formatLabel(value: number) {

    if ( (value >= 50000 ) && (value <= 100000) )       
      {
        return Math.round(value / 1) + 'k';
      }

      else if ( (value >= 100000 ) && (value <= 999999) ){
        return Math.round(value / 1) + ' L';
      }     

      return value;
    }


  interestLabel(value: number) {

    if (value >= 1 )      
    {
      return Math.round(value / 1) + ' %';
    }

    return value;
  }


  emiinterestLabel(value: number) {

    if (value >= 1 )      
     {
      return Math.round(value / 1) + ' Months';
     }

     return value;
   }




    ngAfterViewInit() {
      this.update();
    }


 

   tbupdate(id) {
    if (id == 0) {
      this.pemi.value = (Number(this.query.amount) / 1).toString();
    }
    else if (id == 1) {
      this.remi.value = this.query.interest;
    }  
    else if (id == 2) {
      this.memi.value = this.query.tenureMo;
    }
    this.update();
  }



  update() {

    var loanAmount = Number(this.pemi.value) * 1;
    var numberOfMonths = Number(this.memi.value);
    var rateOfInterest = Number(this.remi.value);
    var monthlyInterestRatio = (rateOfInterest / 100) / 12;

    this.query.amount = loanAmount.toString();
    this.query.interest = rateOfInterest.toString();
    {
      this.query.tenureMo = this.memi.value.toString();
    }

    var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = ((loanAmount * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    var int_pge = (interest / full) * 100;

    this.result.emi = emi.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.total = full.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.interest = interest.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  myForm = new FormGroup({}) // Instantiating our form

  constructor(private fb: FormBuilder){ // Injecting the ReactiveForms FormBuilder.
    this.myForm = fb.group({
      // Adding the "myNum" input to our FormGroup along with its min-max Validators.
      'myNum': ['', [Validators.min(50000), Validators.max(1000000)]] 
    })
  }


  ngOnInit() {
  }

}
