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
export class Tab3Service {

  constructor() { }

  getData() {
      const data: ExampleData[] = [
        { position: 1, name: 'nc1', value: 'vc5' },
        { position: 2, name: 'nc2', value: 'vc4' },
        { position: 3, name: 'nc3', value: 'vc3' },
        { position: 4, name: 'nc4', value: 'vc2' },
        { position: 5, name: 'nc5', value: 'vc1' }
      ];

      return of(data);
  }
}
