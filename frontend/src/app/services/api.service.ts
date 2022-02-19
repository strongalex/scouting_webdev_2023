import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



export interface Final24 {
  SortOrder: Number;
  Team: String;
}

export interface CEA {
  Team: String;
  AnalysisType: String;
  AnalysisTypeID: Number;
  EventID: Number;
  Match1Display: String;
  Match1Format: Number;
  Match1Value: Number;
  Match2Display: String;
  Match2Format: Number;
  Match2Value: Number;
  Match3Display: String;
  Match3Format: Number;
  Match3Value: Number;
  Match4Display: String;
  Match4Format: Number;
  Match4Value: Number;
  Match5Display: String;
  Match5Format: Number;
  Match5Value: Number;
  Match6Display: String;
  Match6Format: Number;
  Match6Value: Number;
  Match7Display: String;
  Match7Format: Number;
  Match7Value: Number;
  Match8Display: String;
  Match8Format: Number;
  Match8Value: Number;
  Match9Display: String;
  Match9Format: Number;
  Match9Value: Number;
  Match10Display: String;
  Match10Format: Number;
  Match10Value: Number;
  Match11Display: String;
  Match11Format: Number;
  Match11Value: Number;
  Match12Display: String;
  Match12Format: Number;
  Match12Value: Number;
  Summary1Display: String;
  Summary1Format: Number;
  Summary1Value: Number;
  Summary2Display: String;
  Summary2Format: Number;
  Summary2Value: Number;
  Summary3Display: String;
  Summary3Format: Number;
  Summary3Value: Number;
  Summary4Display: String;
  Summary4Format: Number;
  Summary4Value: Number;
  Maximum: Number;
  Minimum: Number;
  Percent: Number;
}

export interface Matches {
  BlueTeam1: String;
  BlueTeam2: String;
  BlueTeam3: String;
  MatchNo: Number;
  RedTeam1: String;
  RedTeam2: String;
  RedTeam3: String;
}
  export interface Teams {
  AutoHuman: Number;
  AutoPickUp: Number;
  AutoScoredHigh: Number;
  AutoScoredLow: Number;
  AutoStartPosID: Number;
  AutoSummary: String;
  CanClimb: Number;
  ClimbHeightID: Number;
  ClimbPosition: Number;
  ClimbStrategy: String;
  ClimbTime: Number;
  DriveTypeID: Number;
  GearRatio: String;
  HasAuto: Number;
  IntakeType: Number;
  LanguageID: Number;
  MaxBallCapacity: Number;
  MotorTypeID: Number;
  MoveBonus: Number;
  NumDriveMotors: Number;
  NumGearSpeed: Number;
  NumWheels: Number;
  Pneumatics: Number;
  Preload: Number;
  RobotHeight: Number;
  RobotLength: Number;
  RobotWeight: Number;
  RobotWidth: Number;
  Speed: Number;
  Team: Number;
  TeamCity: String;
  TeamCountry: String;
  TeamLocation: String;
  TeamName: String;
  TeamStateProv: String;
  TeleBallsScoredHigh: Number;
  TeleBallsScoredLow: Number
  TeleDefense: Number;
  TeleDefenseEvade: Number;
  TeleDefenseStrat: String;
  TeleShootWhileDrive: String;
  TeleSortCargo: Number;
  TeleStrategy: String;
  WheelTypeID: Number;
  }

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://192.168.1.195:23450';

  constructor(private http: HttpClient) { }

  getFinal24(): Observable<Final24[]> {
    return this.http.get<Final24[]>(this.apiUrl+'/final24');
  }

  getAnalysis(): Observable<CEA[]> {
    return this.http.get<CEA[]>(this.apiUrl+'/analysis');
  }

  getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.apiUrl+'/teams');
  }

  getMatches(): Observable<Matches[]> {
    return this.http.get<Matches[]>(this.apiUrl+'/matches');
  }
}
