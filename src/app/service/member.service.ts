import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Member } from '../models/member'; 
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { 
    this.loadMembers();
  }

  private memberInfo$ = new BehaviorSubject<Member[]>([]);
  public memberInfo = this.memberInfo$.asObservable();
  loadMembers(){
    let memberList:Member[]=[
      {
        id:"user1",
        passWord:"123456",
        name:"claire",
      }, {
        id:"user2",
        passWord:"000000",
        name:"jhon",
      }, {
        id:"user3",
        passWord:"123456",
        name:"jiar",
      },
      {
        id:"user4",
        passWord:"000000",
        name:"maggie",
      },
    ]
    this.memberInfo$.next(memberList);
  }

}
