import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Farm } from './farm';
import { FormArrayName } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
@Pipe({
  name: 'String',
})
export class MtSampleListIndexComponent implements OnInit, PipeTransform {
  result: Farm;
  filterN: String = 'none';
  AnotherData: any;

  constructor(
    private db: DataService,
    private selectedFarmService: SelectedFarmService
  ) {}

  public transform() {}

  ngOnInit(): void {
    this.init();
    //Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  async init() {
    const metadata: Farm = await this.db.getData().toPromise();
    if (metadata != null) {
      this.result = metadata;
    } else {
      console.log('Error trying load data');
    }
  }

  errorEvent() {
    this.db.getAnotherData().subscribe(
      (res: any) => {
        this.AnotherData = res;
        Swal.fire('Success', 'Success to the API request', 'success');
      },
      (error: any) => {
        console.log('Error!');
        Swal.fire('Error', 'An exception occurred in the API request', 'error');
      }
    );
  }

  setValue(data: Farm) {
    this.selectedFarmService.setSelect = data;
  }
}
