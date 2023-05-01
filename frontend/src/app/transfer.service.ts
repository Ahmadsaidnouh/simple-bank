import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private _HttpClient: HttpClient) { }
  addTransfer(fromUserId: string, toUserId: string, amount: number): Observable<any> {
    return this._HttpClient.post(`https://simple-bank-backend.vercel.app/transfer/addTransfer`, { fromUserId, toUserId, amount });
  }
  getUserTransfers(userId: string): Observable<any> {
    return this._HttpClient.get(`https://simple-bank-backend.vercel.app/transfer/getUserTransfers/${userId}`)
  }
}
