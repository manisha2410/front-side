import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token:any= localStorage.getItem('token');
  baseurl = environment.baseurl

  //baseurl:any='http://localhost:4000/';
   //baseurl:any='https://localhost:80/';

  constructor(private http:HttpClient) { }
  header = new HttpHeaders({
    Authorization: 'Bearer '+this.token,
  });
  loginin( data:any){
    console.log(this.baseurl);

    return  this.http.post(this.baseurl +'api/auth/singin',data,{headers:this.header});
  }
  singup(data: any) {
    return this.http.post(this.baseurl + 'api/auth/singup',data);
  }
  otp(data: any){
    return this.http.post(this.baseurl + 'api/auth/varification/', data ,{ headers: this.header});
  }

  veryfyotp(data:any){
    return this.http.post(this.baseurl+'api/auth/varification/otp',data,{headers:this.header});
  }

  catlog()
  {
    return this.http.get(this.baseurl+ 'api/catogory', {headers:this.header});
  }
  product()
  {
    return this.http.get(this.baseurl + 'api/product',{headers:this.header});
  }
  catogory()
  {
    return this.http.get(this.baseurl + 'api/catogory',{headers:this.header});
  }

}
