import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userDetails:any = []
  errorFlag:boolean = false

  constructor(private api:ApiService){}

  getUserDetails(userid:string){
    this.api.getUserDetailsAPI(userid).subscribe({
      next:(result:any)=>{
        this.userDetails = result
        // console.log(result);
      },
      error:(reason:any)=>{
        this.userDetails = []
        this.errorFlag = true
        // console.log(reason);
      }
    })
  }

}
