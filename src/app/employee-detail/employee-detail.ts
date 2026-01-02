// employee-detail.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-detail',
  standalone: false,
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css'
})
export class EmployeeDetail {
  employee?: Employee;

  // simple in-memory copy; in future this can move to a service
  employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', doj: new Date('2021-03-15'), salary: 45000, isEditable: false },
    { id: 2, firstName: 'Jane', lastName: 'Smith', doj: new Date('2020-07-10'), salary: 65000, isEditable: false },
    { id: 3, firstName: 'Mike', lastName: 'Brown', doj: new Date('2022-01-05'), salary: 30000, isEditable: false }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;
    this.employee = this.employees.find(e => e.id === id);
  }

  goBack() {
    this.router.navigate(['/employees']);
  }
}
