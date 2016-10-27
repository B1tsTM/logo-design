export class Contest {
  constructor(public name: string, 
              public idName?:string, 
              public id?:string, 
              public category?: string, 
              public description?: string, 
              public award?: number, 
              public status?: string, 
              public submitionCount?: number, 
              public daysRemaining?: number, 
              public startDate?: number, 
              public endDate?: number, 
              public submitions?:any , 
              public publisher?: any) {

  }
}