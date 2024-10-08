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
export class Tab2Service {

  constructor() { }

  getData() {
      const data: ExampleData[] = [
        { position: 1, name: 'nb1', value: 'vb5' },
        { position: 2, name: 'nb2', value: 'vb4' },
        { position: 3, name: 'nb3', value: 'vb3' },
        { position: 4, name: 'nb4', value: 'vb2' },
        { position: 5, name: 'nb5', value: 'vb1' }
      ];

      return of(data);
  }
}
