import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = window.localStorage;
  constructor() { }

  get(key: string, defaultValue: any): any {
    let value: any = this.storage.getItem(key);
    if ( key === null || key === ''){
      throw new Error('key is null or key.length === 0');
    }
    try{
      value = JSON.parse(value);
    } catch (error) {
      value = null;
    }
    if (value === null && defaultValue) {
      value = defaultValue;
    }
    return value;
  }

  set(key: string, value: any): any {
    if ( key === null || key === ''){
      throw new Error('key is null or key.length === 0');
    }
    this.storage.setItem(key, JSON.stringify(value));

}
  remove(key: string): void {
    if ( key === null || key === ''){
      throw new Error('key is null or key.length === 0');
    }
    this.storage.removeItem(key);

  }
}
