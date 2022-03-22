import { Injectable } from '@angular/core';
import { Farm } from './farm';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SelectedFarmService {
  private selectedFarm: BehaviorSubject<Farm> = new BehaviorSubject<Farm>({
    Id: 0,
    FarmNo: 'null',
    FarmName: 'null',
    Address: 'null',
    ActiveDate: new Date(1),
  });

  get getSelect() {
    return this.selectedFarm.asObservable();
  }

  set setSelect(farm: Farm) {
    this.selectedFarm.next(farm);
  }
}
