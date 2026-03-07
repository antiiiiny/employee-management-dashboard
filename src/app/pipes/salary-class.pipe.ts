import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryClass',
  standalone: false
})
export class SalaryClassPipe implements PipeTransform {
  transform(salary: number): string {
    if (salary >= 100000) return 'High';
    else if (salary >= 60000) return 'Medium';
    return 'Low';
  }
}