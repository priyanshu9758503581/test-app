import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddComponent } from './emp-add/emp-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';
  constructor(private _dialog:MatDialog){}

  openDialog(){
    this._dialog.open(EmpAddComponent);
  }
}
