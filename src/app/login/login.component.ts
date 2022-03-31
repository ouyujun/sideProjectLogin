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

  constructor(private mainService: MemberService, private router: Router) { }


  input: string = "";
  idHint: string = ""
  pwHint: string = ""
  password: string = "";


  ngOnInit(): void {
  }

  info: Member | null = null;
  onLogin() {
    let suecess: boolean = false;
    this.mainService.memberInfo.subscribe((res: Member[]) => {
      res.map((list: Member) => {
        if (list.id == this.input && list.passWord == this.password) {
          suecess = true;
          this.info = list;
          this.router.navigate(['./page1']);
          return
        } else {
          if (!this.input && !this.password) {
            this.pwHint = "";
            this.idHint = "請輸入帳號與密碼!!";
            return
          } else if (!this.input) {
            this.pwHint = "";
            this.idHint = "請輸入帳號!!";
            return
          } else if (!this.password) {
            this.idHint = "";
            this.pwHint = "請輸入密碼!!";
            return
          } else {
            this.pwHint = "";
            this.idHint = "帳號或密碼輸入錯誤!!";
          }
        }
      }
      )
    })

    this.input = "";
    this.password = "";
    if (suecess) {
      localStorage.setItem("suecess", JSON.stringify(this.info));
    }
  }
}
