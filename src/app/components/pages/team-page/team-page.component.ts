import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../common/team/team.service';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

	public teamData: any;

    constructor(
        private content: TeamService
    ) {
        this.content.getData().subscribe((teamData: any) => {
            this.teamData = teamData.data.attributes;
        });
    }

    ngOnInit(): void {}

}