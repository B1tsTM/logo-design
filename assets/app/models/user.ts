export class User {
  constructor(public email: string, public password: string, public userType?: string, public firstName?: string, public lastName?: string, public contestsWon?: number, public designsCreated?: number, public publicDesigns?: number) {}
}