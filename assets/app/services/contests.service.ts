import { Injectable } from '@angular/core';
import { Contest } from '../models/contest';

@Injectable()
export class ContestsService {
  contests = [];
  constructor() { }

  getContests() {
    return this.contests;
  }

  addContest(contest: any) {
    this.contests.push(contest);
  }

  editContest(contest: any) {
    this.contests[this.contests.indexOf(contest)] = new Contest('Edited', 'edit', 'edit');
  }

  deleteContest(contest: any) {
    this.contests.splice(this.contests.indexOf(contest), 1);
  }
}