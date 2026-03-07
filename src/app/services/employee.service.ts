import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', doj: new Date('2021-03-15'), salary: 45000, isEditable: false },
    { id: 2, firstName: 'Jane', lastName: 'Smith', doj: new Date('2020-07-10'), salary: 65000, isEditable: false },
    { id: 3, firstName: 'Mike', lastName: 'Brown', doj: new Date('2022-01-05'), salary: 30000, isEditable: false }
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    const employee = this.employees.find(e => e.id === id);
    return of(employee);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const newId = this.employees.length > 0 ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    const newEmployee = { ...employee, id: newId };
    this.employees.push(newEmployee);
    return of(newEmployee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const index = this.employees.findIndex(e => e.id === employee.id);
    if (index !== -1) {
      this.employees[index] = { ...employee };
    }
    return of(employee);
  }

  deleteEmployee(id: number): Observable<boolean> {
    const index = this.employees.findIndex(e => e.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}