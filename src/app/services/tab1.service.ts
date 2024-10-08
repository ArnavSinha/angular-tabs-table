import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface ExampleData {
  name: string;
  position: number;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  constructor() { }

  getData() {
      const data: ExampleData[] = [
        { position: 1, name: 'na1', value: 'va5' },
        { position: 2, name: 'na2', value: 'va4' },
        { position: 3, name: 'na3', value: 'va3' },
        { position: 4, name: 'na4', value: 'va2' },
        { position: 5, name: 'na5', value: 'va1' }
      ];

      return of(data);
  }
}
