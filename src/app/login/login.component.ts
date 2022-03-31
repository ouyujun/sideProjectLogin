import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { Member } from '../models/member';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private mainService: MemberService,private router:Router) { }


  input: string = "";
  password: string = "";


  ngOnInit(): void {
  }

  info:Member|null=null;
  onLogin() {
    let suecess:boolean=false;
    this.mainService.memberInfo.subscribe((res:Member[]) => {
      res.map((list:Member) => {
        console.log(list.id===this.input,list.passWord===this.password)
        if(list.id==this.input && list.passWord==this.password){
          suecess=true;
          this.info=list;
          this.router.navigate(['/']);
          return
        }
      }
      )
    })

    if(suecess){
      localStorage.setItem("suecess",JSON.stringify(this.info));
      
    }
  }
}
