import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, tap} from "rxjs";
import {DeviceDtoModel} from "../../models/device.dto.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<DeviceDtoModel>();
  @Output() liveModeEvent = new EventEmitter<boolean>();

  filterGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.notifyFilterChange();
  }

  initForm(): void {
    this.filterGroup = this.formBuilder.group({
      deviceName: [''],
      deviceType: [''],
      startDate: [''],
      endDate: [''],
      enableLiveMode: false
    })
  }

  notifyFilterChange() {
    this.filterGroup.valueChanges
      .pipe(
        debounceTime(1000),
        tap(formValue => {
          if (formValue?.startDate && formValue.startDate != '' && formValue.endDate == '') {
            return;
          }
          const deviceDto: DeviceDtoModel = {
            deviceName: formValue.deviceName,
            deviceType: formValue.deviceType,
            startDate: formValue.startDate,
            endDate: formValue.endDate
          };

          this.searchEvent.emit(deviceDto);
        })
      ).subscribe();
  }

  clearForm(): void {
    this.filterGroup.reset();
  }

  toggle() {
    this.liveModeEvent.emit(!this.filterGroup.controls['enableLiveMode'].value);
  }
}
