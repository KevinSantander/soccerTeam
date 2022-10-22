class Person {
  private name: string;
  private height: number;
  private weight: number;

  public constructor(pName:string, pHeight:number, pWeight:number) {
    this.name = pName;
    this.height = pHeight;
    this.weight = pWeight;
  }

  public getNamesOfTheMembers(): string {
    return this.name;
  }

  public setNameOfTheMembers(paramName:string): void {
    this.name = paramName;
  }

  public getHeightPerson():number {
    return this.height;
  }

  public setHeightPerson(paramHeight:number): void {
    this.height = paramHeight;
  }

  public getWeightPerson(): number {
    return this.weight;
  }

  public setWeightPerson(paramWeight: number):void {
    this.weight = paramWeight;
  }

}

class Coach extends Person {
  private experience: number;

  public constructor(pExperience: number,pName:string, pHeight:number, pWeight:number) {
    super(pName,pHeight,pWeight)
    this.experience = pExperience;
  }

  public getExperience(): number {
    return this.experience;
  }

  public setExperience(paramExperience: number): void {
    this.experience = paramExperience;
  }

}

class Player extends Person {
  private skillfullLeg: string;
  private position: string;

  public constructor(pSkillfullLeg:string, pPosition: string, pName:string, pHeight:number, pWeight:number) {
    super(pName,pHeight,pWeight)
    this.skillfullLeg = pSkillfullLeg;
    this.position = pPosition;
  }

  public getSkillfullLeg():string {
    return this.skillfullLeg;
  }

  public setSkillfullLeg(paramSkill:string): void {
    this.skillfullLeg = paramSkill;
  }

  public ChoosePosition():string {
    return  this.position;
  }

  public confirmedPosition(paramPosition: string): void {
    this.position = paramPosition;
  }
  
}

class Massagist  extends Person {
  private licenseNumber: number;

  public constructor(pLicenseNumber: number, pName:string, pHeight:number, pWeight:number) {
    super(pName,pHeight,pWeight)
    this.licenseNumber = pLicenseNumber;
  }

  public getLicenseNumber(): number {
    return this.licenseNumber;
  }

  public setLicenseNumber(paramLicenseNumber: number): void {
    this.licenseNumber = paramLicenseNumber;
  }
  
}

let player1 = new Player('derecho','central','Kevin',176,66);
let player2 = new Player('derecho','delanter','Pedro',178,70);
let player3 = new Player('izquierdo','lateral','Fernando',184,79);
let player4 = new Player('ambidiestro','central','Alex',186,81);
let player5 = new Player('izquierdo','defensor','Franco',181,78);
let player6 = new Player('ambidiestro','medio campo','Axel',179,71);
let player7 = new Player('ambidiestro','central','Hugo',169,64);
let player8 = new Player('izquierdo','defensor','Eduardo',180,77);
let player9 = new Player('derecho','defensor','Raul',183,79);
let player10 = new Player('izquierdo','defensor','Juan',185,80);
let player11 = new Player('ambidiestro','arquero','Diego',198,90);

let playerSquad:Player[]  = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11];

let coachExperience = new Coach(25,'Riquelme',180,78);

let registrationNumber = new Massagist(654321,'lucas',188,80);

console.log(playerSquad,coachExperience,registrationNumber);










