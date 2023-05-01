import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    // return this._HttpClient.get("https://simple-bank1.herokuapp.com/user/getAllUsers");
    return this._HttpClient.get("https://simple-bank-backend.vercel.app/user/getAllUsers");
  }
  getUser(userId: string): Observable<any> {
    // return this._HttpClient.get(`https://simple-bank1.herokuapp.com/user/getUser/${userId}`);
    // https://simple-bank-backend.vercel.app/user/getAllUsers
    return this._HttpClient.get(`https://simple-bank-backend.vercel.app/user/getUser/${userId}`);

  }
  updateBalance(newBalance: number, userId: any): Observable<any> {
    // return this._HttpClient.patch(`https://simple-bank1.herokuapp.com/user/updateBalance`, { newBalance, userId });
    return this._HttpClient.patch(`https://simple-bank-backend.vercel.app/user/updateBalance`, { newBalance, userId });

  }
}
