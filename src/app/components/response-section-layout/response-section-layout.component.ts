import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-section-layout',
  templateUrl: './response-section-layout.component.html',
  styleUrls: ['./response-section-layout.component.scss']
})
export class ResponseSectionLayoutComponent implements OnInit {

  responseData = [{
    image:'../../../assets/avatar-anisha.png',
    name:'Anisha Li',
    message:`Manage has supercharged our team’s workflow. The ability to maintain
    visibility on larger milestones at all times keeps everyone motivated.`
  },{
    image:'../../../assets/avatar-ali.png',
    name:'Ali Bravo',
    message:`We have been able to cancel so many other subscriptions since using
    Manage. There is no more cross-channel confusion and everyone is much
    more focused.`
  },{
    image:'../../../assets/avatar-richard.png',
    name:'Richard Watts',
    message:`Manage allows us to provide structure and process. It keeps us organized
    and focused. I can’t stop recommending them to everyone I talk to!`
  },{
    image:'../../../assets/avatar-shanai.png',
    name:'Shanai Gough',
    message:`Their software allows us to track, manage and collaborate on our projects
    from anywhere. It keeps the whole team in-sync without being intrusive.`
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
