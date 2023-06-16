import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { FormsModule } from '@angular/forms';
import { faExchange, faMoneyBillTransfer, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { CurrencyPipe } from '@angular/common';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedFrom  : string = 'USD';
  selectedTo  : string = 'EGP';
  fromCurrency :string = '';
  toCurrency :string = '';
  flagFrom : string ='us'
  flagTo : string ='eg'
  amount :number = 1
  transfer : any
  rate: any
  error : string = "Sorry, funds cannot be converted to this currency "
  isError : boolean = false
  isBigLength : boolean = false
  faExchange = faExchange;
  faMoneyBillTransfer = faMoneyBillTransfer;

  countryList : any ={
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
  }

  constructor(private service : ServiceService , private currencyPipe:CurrencyPipe){}


  ngOnInit(): void {
    this.exchange()
  }

  changeFrom(event:any){
    this.selectedFrom = event.target.value
    for(const key of Object.keys(this.countryList)){
      if(this.selectedFrom === key){
          this.flagFrom  =this.countryList[key].toLowerCase()
          break;
        }
    }
  }

  changeTo(event:any){
    this.selectedTo = event.target.value

    for(const key of Object.keys(this.countryList)){
      if(this.selectedTo === key){
          this.flagTo =this.countryList[key].toLowerCase()
          break;
        }
    }
  }

  exchange(){
    this.service.getData(this.selectedFrom,this.selectedTo).subscribe((res:any) =>{
      this.isError = false
      this.isBigLength = false
      this.rate = this.currencyPipe.transform(res.conversion_rate * this.amount , " ")
      this.fromCurrency = this.selectedFrom
      this.toCurrency = this.selectedTo
      this.transfer = this.currencyPipe.transform(this.amount , " ")
      if(this.rate.toString().length >= 13  || this.transfer.toString().length >= 13){
        this.isBigLength = true
      }
    },
    (err :any)=>{
      this.isError = true
    }
    )
  }

  replace(){
    [this.selectedFrom , this.selectedTo] = [this.selectedTo , this.selectedFrom ];
    [this.flagFrom , this.flagTo] = [this.flagTo , this.flagFrom];
  }



  title = 'Currency-Converter';
}
