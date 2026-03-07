import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  reports = [
    { id: 1, title: 'Monthly Salary Report', generatedBy: 'Admin', date: '2026-03-01', status: 'Completed' },
    { id: 2, title: 'Employee Performance Report', generatedBy: 'HR Manager', date: '2026-02-28', status: 'Pending' },
    { id: 3, title: 'Attendance Summary', generatedBy: 'Admin', date: '2026-02-25', status: 'Completed' },
    { id: 4, title: 'Departmental Analysis', generatedBy: 'Manager', date: '2026-02-20', status: 'Pending' }
  ];

  displayedColumns: string[] = ['id', 'title', 'generatedBy', 'date', 'status', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  deleteReport(id: number): void {
    this.reports = this.reports.filter(report => report.id !== id);
  }

  downloadReport(id: number): void {
    const report = this.reports.find(r => r.id === id);
    if (report) {
      console.log('Downloading report:', report.title);
      alert(`Report "${report.title}" would be downloaded here.`);
    }
  }
}
