import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  // accessing child components
  @ViewChild(UserDetailsComponent) userDetails !:any;
  @ViewChild(UserReposComponent) userRepos !:any;

  title:string = 'fyle-frontend-challenge'
  userid:string = ''

  constructor(private toast: NgToastService){}


  handleSearch(){
    if(this.userid.length===0){
      this.toast.error({detail:"ERROR",summary:'Enter User Id',duration:2000, position: 'bottomRight'});
    }
    else{
      this.userDetails.getUserDetails(this.userid);
      this.userRepos.getUserRepos(this.userid);
    }
    
  }

}