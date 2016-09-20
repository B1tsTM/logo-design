import { Injectable } from '@angular/core';

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

  deleteContest(contest: any) {
    this.contests.splice(this.contests.indexOf(contest), 1);
  }
}