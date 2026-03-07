export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  doj: Date;
  salary: number;
  department?: string;
  isEditable :boolean;
}