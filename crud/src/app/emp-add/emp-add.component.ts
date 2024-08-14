import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent {
  empForm:FormGroup;
education:string[]=[
  'Matric',
  'Diploma',
  'Intermediate',
  'Graduate',
  'Post Graduate'
]
constructor(private _fb:FormBuilder,private empService:EmployeeService,private dialogRef:DialogRef<EmpAddComponent>){
  this.empForm = this._fb.group({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender:'',
    education:'',
    company:'',
    experience:'',
    package:'',
  });
}
onFormSubmit(){
  if(this.empForm.valid){
 this.empService.addEmployee(this.empForm.value).subscribe({
  next:(val:any)=>{
alert('employee added successfully');
this.dialogRef.close();
  },
  error:(err:any) => {
    console.error(err);
  }
 })
  }
}
}
