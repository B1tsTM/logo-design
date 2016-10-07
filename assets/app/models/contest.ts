export class Contest {
  constructor(public name: string, public id?:string, public category?: string, public description?: string, public award?: number, public status?: string, public submitions?: number, public daysRemaining?: number, public userName?: string, public user?: string) {

  }
}