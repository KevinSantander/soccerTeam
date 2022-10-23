var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(pName, pHeight, pWeight) {
        this.name = pName;
        this.height = pHeight;
        this.weight = pWeight;
    }
    Person.prototype.getNamesOfTheMembers = function () {
        return this.name;
    };
    Person.prototype.setNameOfTheMembers = function (paramName) {
        this.name = paramName;
    };
    Person.prototype.getHeightPerson = function () {
        return this.height;
    };
    Person.prototype.setHeightPerson = function (paramHeight) {
        this.height = paramHeight;
    };
    Person.prototype.getWeightPerson = function () {
        return this.weight;
    };
    Person.prototype.setWeightPerson = function (paramWeight) {
        this.weight = paramWeight;
    };
    return Person;
}());
var Coach = /** @class */ (function (_super) {
    __extends(Coach, _super);
    function Coach(pExperience, pName, pHeight, pWeight) {
        var _this = _super.call(this, pName, pHeight, pWeight) || this;
        _this.experience = pExperience;
        return _this;
    }
    Coach.prototype.getExperience = function () {
        return this.experience;
    };
    Coach.prototype.setExperience = function (paramExperience) {
        this.experience = paramExperience;
    };
    return Coach;
}(Person));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(pSkillfullLeg, pPosition, pName, pHeight, pWeight) {
        var _this = _super.call(this, pName, pHeight, pWeight) || this;
        _this.skillfullLeg = pSkillfullLeg;
        _this.position = pPosition;
        return _this;
    }
    Player.prototype.getSkillfullLeg = function () {
        return this.skillfullLeg;
    };
    Player.prototype.setSkillfullLeg = function (paramSkill) {
        this.skillfullLeg = paramSkill;
    };
    Player.prototype.ChoosePosition = function () {
        return this.position;
    };
    Player.prototype.confirmedPosition = function (paramPosition) {
        this.position = paramPosition;
    };
    return Player;
}(Person));
var Massagist = /** @class */ (function (_super) {
    __extends(Massagist, _super);
    function Massagist(pLicenseNumber, pName, pHeight, pWeight) {
        var _this = _super.call(this, pName, pHeight, pWeight) || this;
        _this.licenseNumber = pLicenseNumber;
        return _this;
    }
    Massagist.prototype.getLicenseNumber = function () {
        return this.licenseNumber;
    };
    Massagist.prototype.setLicenseNumber = function (paramLicenseNumber) {
        this.licenseNumber = paramLicenseNumber;
    };
    return Massagist;
}(Person));
var SoccerTeam = /** @class */ (function () {
    function SoccerTeam(pPlayers, pMassagist, pCoach) {
        this.players = pPlayers;
        this.massagist = pMassagist;
        this.coach = pCoach;
    }
    SoccerTeam.prototype.getPlayers = function () {
        return this.players;
    };
    SoccerTeam.prototype.setPlayers = function (paramPlayer) {
        this.players.push(paramPlayer);
    };
    return SoccerTeam;
}());
var player1 = new Player('derecho', 'central', 'Kevin', 176, 66);
var player2 = new Player('derecho', 'delanter', 'Pedro', 178, 70);
var player3 = new Player('izquierdo', 'lateral', 'Fernando', 184, 79);
var player4 = new Player('ambidiestro', 'central', 'Alex', 186, 81);
var player5 = new Player('izquierdo', 'defensor', 'Franco', 181, 78);
var player6 = new Player('ambidiestro', 'medio campo', 'Axel', 179, 71);
var player7 = new Player('ambidiestro', 'central', 'Hugo', 169, 64);
var player8 = new Player('izquierdo', 'defensor', 'Eduardo', 180, 77);
var player9 = new Player('derecho', 'defensor', 'Raul', 183, 79);
var player10 = new Player('izquierdo', 'defensor', 'Juan', 185, 80);
var player11 = new Player('ambidiestro', 'arquero', 'Diego', 198, 90);
var playerSquad = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11];
var coach = new Coach(25, 'Riquelme', 180, 78);
var massagist = new Massagist(654321, 'lucas', 188, 80);
var soccerTeam = new SoccerTeam(playerSquad, massagist, coach);
console.log(soccerTeam);
