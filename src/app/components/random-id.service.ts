import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomIdService {
  static usedId: string[] = [];
  getId(): string {
    const id = Math.random();
    const idStr = id.toFixed(10);
    const str = idStr.substring(2);
    return str;
  }
}
