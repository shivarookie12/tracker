import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})

@Injectable()
export class ProdComponent implements OnInit {
 
disp = "hello";
public edit=false;
constructor(private _http: HttpClient){ }
  ngOnInit() {
  }
displayButton(){
  this.edit=true;
  this.disp = "displayButton";
  return this._http.get("http://localhost/api/select.php/")
    .subscribe(
      response => {
        console.log(response);
      }
    )
}
private products  = []; 
getEmployees(){
  console.log("response");
  
  return this._http.get("http://localhost/api/select.php/").subscribe((res : any[])=>{
    console.log(res);
    this.products = res;
    });
 
    }
insertData={
  "id": 4861,
  "name": "hellos",
  "position": "ASE",
  "department": "BFT",
  "salary": "11111"
};

    insertEmployees(){
      return this._http.post("http://localhost/api/insert.php/",this.insertData).subscribe(data=>{
        console.log("success");
        });
    }
}
