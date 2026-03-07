import { Component, OnInit } from '@angular/core';
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
  newFirstName = '';
  newLastName = '';
  doj = new Date();
  newSalary = 0;
  employeeSalary = 0;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  addNewEmployee() {
    const employee = {
      id: 0, // Will be set by service
      firstName: this.newFirstName,
      lastName: this.newLastName,
      doj: this.doj,
      salary: this.newSalary,
      isEditable: false
    };
    if (employee.firstName.trim().length === 0 || employee.lastName.trim().length === 0) {
      alert("First name and last name cannot be empty");
      return;
    }
    if (employee.salary <= 0) {
      alert("salary should be above 0");
      return;
    }
    this.employeeService.addEmployee(employee).subscribe(newEmployee => {
      this.employees.push(newEmployee);
      this.newFirstName = '';
      this.newLastName = '';
      this.doj = new Date();
      this.newSalary = 0;
    });
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(success => {
      if (success) {
        this.employees = this.employees.filter(s => s.id !== id);
      }
    });
  }

  getSalaryClass(salary: number): string {
    if (salary >= 100000) return 'High';
    else if (salary >= 60000) return 'Medium';
    return 'Low';
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
