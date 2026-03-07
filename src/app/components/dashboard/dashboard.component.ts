import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  totalDepartments = 5;
  pendingReports = 3;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.totalEmployees = employees.length;
    });
  }

  navigateToSection(section: string): void {
    this.router.navigate([`/admin/${section}`]);
  }
}
