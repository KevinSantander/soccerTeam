class Person {
  private name: string;
  private height: number;
  private weight: number;

  public constructor(pName: string, pHeight: number, pWeight: number) {
    this.name = pName;
    this.height = pHeight;
    this.weight = pWeight;
  }

  public getName(): string {
    return this.name;
  }

  public setName(paramName: string): void {
    this.name = paramName;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(paramHeight: number): void {
    this.height = paramHeight;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(paramWeight: number): void {
    this.weight = paramWeight;
  }

}

class Coach extends Person {
  private experience: number;

  public constructor(pExperience: number, pName:string, pHeight:number, pWeight:number) {
    super(pName, pHeight, pWeight)
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

  public constructor(pSkillfullLeg: string, pPosition: string, pName: string, pHeight: number, pWeight: number) {
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

  public getPosition(): string {
    return  this.position;
  }

  public setPosition(paramPosition: string): void {
    this.position = paramPosition;
  }
  
}

class Massagist extends Person {
  private licenseNumber: number;

  public constructor(pLicenseNumber: number, pName: string, pHeight: number, pWeight: number) {
    super(pName, pHeight, pWeight)
    this.licenseNumber = pLicenseNumber;
  }

  public getLicenseNumber(): number {
    return this.licenseNumber;
  }

  public setLicenseNumber(paramLicenseNumber: number): void {
    this.licenseNumber = paramLicenseNumber;
  }
  
}

class SoccerTeam {
  private players: Player[];
  private massagist: Massagist;
  private coach: Coach;

  public constructor(pPlayers: Player[], pMassagist: Massagist, pCoach: Coach) {
    this.players = pPlayers;
    this.massagist = pMassagist;
    this.coach = pCoach;
  }

  public getPlayers(): Player[] {
    return this.players;
  }

  public setPlayers(paramPlayer: Player): void {
    this.players.push(paramPlayer);
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
let coach = new Coach(25,'Riquelme',180,78);
let massagist = new Massagist(654321,'lucas',188,80);

let playerSquad:Player[]  = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11];
let soccerTeam = new SoccerTeam(playerSquad,massagist,coach);


console.log(soccerTeam);
