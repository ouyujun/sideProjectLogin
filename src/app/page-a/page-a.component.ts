import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent implements OnInit {

  constructor(private mainService:MemberService) {
    this.onGetMember();
   }
  memberlist:Member[]|null=null;
  ngOnInit(): void {
   
  }
  onGetMember(){
    this.mainService.memberInfo.subscribe((res:Member[])=>{
      this.memberlist=res;
    })
  }
}
