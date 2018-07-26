import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-date',
  templateUrl: './book-date.component.html',
  styleUrls: ['./book-date.component.scss']
})
export class BookDateComponent implements OnInit {
   
  @Input() form: FormGroup;
  picker: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  constructor() { }

  ngOnInit() {
  }
}