import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserReposComponent } from './user-repos/user-repos.component';

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


  handleSearch(){
    if(this.userid.length!=0){
      this.userDetails.getUserDetails(this.userid);
      this.userRepos.getUserRepos(this.userid);
    }
    
  }

}