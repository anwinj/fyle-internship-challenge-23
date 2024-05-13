import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent {

  userRepos:any = []
  errorFlag:boolean = false
  page: number = 1
  itemsPerPage = 10;
  totalItems : any;

  constructor(private api:ApiService){}

  getUserRepos(userid:string){
    this.api.getUserReposAPI(userid).subscribe({
      next:(result:any)=>{
        this.userRepos = result
        this.page = 0
        // console.log(result);
      },
      error:(reason:any)=>{
        this.errorFlag = true
        console.log(reason);
      }
    })
  }
}
