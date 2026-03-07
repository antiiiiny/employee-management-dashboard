import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

interface Department {
  name: string;
  head?: string;
  employeeCount: number;
  avgSalary: number;
}

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  departmentKeys: string[] = [];
  displayedColumns: string[] = ['name', 'employees', 'avgSalary'];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.processDepartments(employees);
    });
  }

  processDepartments(employees: Employee[]): void {
    const deptMap = new Map<string, { employees: Employee[], avgSalary: number, count: number }>();

    employees.forEach(emp => {
      const dept = emp.department || 'Unassigned';
      if (!deptMap.has(dept)) {
        deptMap.set(dept, { employees: [], avgSalary: 0, count: 0 });
      }
      const deptData = deptMap.get(dept)!;
      deptData.employees.push(emp);
      deptData.count++;
    });

    // Calculate averages and create department list
    this.departments = [];
    this.departmentKeys = Array.from(deptMap.keys()).sort();
    
    this.departmentKeys.forEach(dept => {
      const deptData = deptMap.get(dept)!;
      const totalSalary = deptData.employees.reduce((sum, emp) => sum + emp.salary, 0);
      const avgSalary = Math.round(totalSalary / deptData.count);
      
      this.departments.push({
        name: dept,
        head: deptData.employees[0]?.firstName + ' ' + deptData.employees[0]?.lastName,
        employeeCount: deptData.count,
        avgSalary: avgSalary
      });
    });
  }
}
