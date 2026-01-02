import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  standalone: false,
  templateUrl: './list-employees.html',
  styleUrl: './list-employees.css',
})
export class ListEmployees {
  employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', doj: new Date('2021-03-15'), salary: 45000, isEditable: false },
    { id: 2, firstName: 'Jane', lastName: 'Smith', doj: new Date('2020-07-10'), salary: 65000, isEditable: false },
    { id: 3, firstName: 'Mike', lastName: 'Brown', doj: new Date('2022-01-05'), salary: 30000, isEditable: false }
  ]
  newFirstName='';
  newLastName='';
  doj=new Date()
  newSalary=0;
  employeeSalary=0;

  addNewEmployee(){
    const newId=this.employees.length >0? Math.max(...this.employees.map(s=>s.id)) +1 : 1;
    const employee={
      id: newId,
      firstName: this.newFirstName,
      lastName: this.newLastName,
      doj: this.doj,
      salary: this.newSalary,
      isEditable: false
    }
    if (employee.firstName.trim().length===0 || employee.lastName.trim().length===0){
      alert("First name and last name cannot be empty");
      return;
    }
    if (employee.salary <=0){
      alert("salary should be above 0");
      return;
    }
    this.employees.push(employee);
    this.newFirstName='';
    this.newLastName='';
    this.doj=new Date();
    this.newSalary=0;
  }
  deleteEmployee(id:any){
    this.employees=this.employees.filter(s=>s.id !== id);
  }

  getSalaryClass(salary: number): string {
    if (salary >= 100000) return 'High';
    else if (salary >= 60000) return 'Medium';
    return 'Low';
  }
  editEmployee(employee:Employee){
    this.employees.forEach(s=>s.isEditable=false);
    employee.isEditable=true;
    this.employeeSalary=employee.salary;

  }
  
  saveEmployeeSalary(employee:Employee){
    if (this.employeeSalary <= 0) {
      alert('Salary should be above 0');
      return;
    }
    employee.salary=this.employeeSalary;
    employee.isEditable=false;
  }

}
