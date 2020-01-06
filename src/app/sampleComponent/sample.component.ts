import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { User } from './user-data';
import { UserData } from './user-data.service';
import { DataService} from './data-service';
import { Observable } from 'rxjs';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements AfterViewInit{
  @ViewChild(EditUserModalComponent,  { static: false }) modal: EditUserModalComponent;
  title1 = 'sample-app component';
  users: UserData[]=[];
  // user: User[]=[];
  apiurl = 'api/users';
  searchUserData: User;
  user: User;
  displayData = false;
  searchId: any;
  addUserTab = true;
  updateId: any;
  

  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users=data;
      console.log(this.users);
    });
  }

  ngAfterViewInit(): void {
    this.modal.onOK.subscribe(user => {
        this.user = user;
        this.modal.close();
    });
}
  ngOnInit(){
    this.getUsers();
  }

  getUser(event: any) {
    console.log(event.target.value);
    console.log(this.searchId);

    this.dataservice.getUser(this.searchId).subscribe(data => {
      this.searchUserData = data;
      console.log(this.searchUserData)
      this.displayData= true;
    });
  }

  addUser(value: any) {
    this.dataservice.addUser(value).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    this.getUsers();
  }

  updateUser(updateId) {
    this.updateId = updateId.srcElement.value;
    this.dataservice.getUser(this.updateId).subscribe(data => {
      this.user = data;
      this.dataservice.updateUser(this.user).subscribe(data1 => {
        this.getUsers();
      });
    });
  }
  
}
