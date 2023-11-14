import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private data: any;

  getData(key: string): any {
    const data = localStorage.getItem(key) ?? '[]';
    return JSON.parse(data);
  }

  setData(key: string, data: any): void {
    this.data = data;
    localStorage.setItem(key, JSON.stringify(data));
  }
}
