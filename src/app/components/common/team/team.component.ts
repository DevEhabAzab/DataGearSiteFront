import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from './team.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

	public teamData: any;

    constructor(
        public router: Router,
        private content: TeamService
    ) {
        this.content.getData().subscribe((teamData: any) => {
            this.teamData = teamData.data.attributes;
        });
    }

    ngOnInit(): void {}

}