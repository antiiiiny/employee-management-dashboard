import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-employees',
  standalone: false,
  templateUrl: './list-employees.html',
  styleUrl: './list-employees.css',
})
export class ListEmployees implements OnInit {
  employees: Employee[] = [];
  employeeForm: FormGroup;
  employeeSalary = 0;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'salary', 'doj', 'salaryClass', 'actions'];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      doj: [new Date(), Validators.required],
      salary: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = [...employees];
    });
  }

  addNewEmployee() {
    if (this.employeeForm.valid) {
      const employee = {
        id: 0, // Will be set by service
        firstName: this.employeeForm.value.firstName,
        lastName: this.employeeForm.value.lastName,
        doj: this.employeeForm.value.doj,
        salary: this.employeeForm.value.salary,
        isEditable: false
      };

      this.employeeService.addEmployee(employee).subscribe(newEmployee => {
        // refresh the local list to guarantee uniqueness and to pick up
        // any backend-side modifications; this avoids accidental duplicates
        this.employeeService.getEmployees().subscribe(employees => {
          this.employees = [...employees]; // Create new array reference for change detection
        });
        this.employeeForm.reset();
        this.employeeForm.patchValue({ doj: new Date() });
      });
    }
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      // After deletion, refresh the list from backend
      this.employeeService.getEmployees().subscribe(employees => {
        this.employees = [...employees];
      });
    });
  }

  editEmployee(employee: Employee) {
    this.employees.forEach(s => s.isEditable = false);
    employee.isEditable = true;
    this.employeeSalary = employee.salary;
  }

  saveEmployeeSalary(employee: Employee) {
    if (this.employeeSalary <= 0) {
      alert('Salary should be above 0');
      return;
    }
    employee.salary = this.employeeSalary;
    this.employeeService.updateEmployee(employee).subscribe(updatedEmployee => {
      employee.isEditable = false;
    });
  }
}
