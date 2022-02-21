import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todoList.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      title: 'Dolphin, striped',
      description: 'Stenella coeruleoalba',
      isCompleted: true,
      isArchived: true,
      endData: '12/20/2021',
    },
    {
      title: 'Sheathbill, snowy',
      description: 'Chionis alba',
      isCompleted: true,
      isArchived: true,
      endData: '10/30/2021',
    },
    {
      title: 'Jaeger, long-tailed',
      description: 'Stercorarius longicausus',
      isCompleted: false,
      isArchived: false,
      endData: '8/11/2021',
    },
    {
      title: 'Lesser masked weaver',
      description: 'Ploceus intermedius',
      isCompleted: true,
      isArchived: true,
      endData: '10/21/2021',
    },
    {
      title: 'Wallaby, tammar',
      description: 'Macropus eugenii',
      isCompleted: true,
      isArchived: false,
      endData: '9/29/2021',
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  constructor() { }

  public getTodo(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
}
