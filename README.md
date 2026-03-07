# Employee Management Dashboard

## Overview
Angular 20 enterprise app for managing employees with admin authentication, CRUD operations, and dynamic department analytics.

## Features
- **Admin Login System** - Secure authentication with localStorage persistence
- **Employee Management** - Full CRUD operations with REST API integration
- **Dynamic Departments** - Auto-calculated department analytics (employee count, average salary)
- **Reports Page** - Admin dashboard with insights
- **Material Design UI** - Professional Material components
- **Persistent Storage** - json-server backend with 15 sample employees
- **Route Guards** - Protected admin routes via AuthGuard

## Project Structure
```
src/
├── app/
│   ├── app.module.ts # Root module with Material imports
│   ├── app-routing-module.ts # Auth-protected routes
│   ├── services/
│   │   ├── employee.service.ts # REST API (CRUD)
│   │   └── auth.service.ts # Login/logout/token
│   ├── guards/
│   │   └── auth.guard.ts # Route protection
│   ├── models/
│   │   └── employee.model.ts # Employee interface
│   ├── components/
│   │   ├── login/ # Admin login
│   │   ├── admin-layout/ # Protected layout
│   │   ├── dashboard/ # Overview page
│   │   ├── departments/ # Dynamic analytics
│   │   └── reports/ # Admin reports
│   ├── list-employees/ # CRUD table
│   ├── navbar/ # Navigation
│   ├── pipes/ # salary-class.pipe
│   └── directives/ # highlight-salary.directive
├── models/
└── db.json # json-server database (15 employees)
```

## Setup & Execution

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Run Both Servers (in separate terminals)
**Terminal 1 - JSON Server (port 3000)**
```bash
npm run server
```

**Terminal 2 - Angular Dev Server (port 4200)**
```bash
npm start
```

### Access Application
Visit `http://localhost:4200/login`
- Default: Admin login (configure credentials as needed)
- Navigate to **Dashboard** → **Departments** → **Employees**

## Technologies Used
- **Angular 20** (Standalone: false, NgModule architecture)
- **Angular Material** (Tables, Cards, Icons, Forms)
- **json-server** (Mock REST API)
- **Reactive Forms** (Form validation)
- **RxJS** (Observable streams)
- **TypeScript 5.9**
- **Bootstrap 5** (Utility classes)

## API Endpoints (json-server)
```
GET    /employees          # Fetch all employees
GET    /employees/:id      # Fetch one employee
POST   /employees          # Create employee
PUT    /employees/:id      # Update employee
DELETE /employees/:id      # Delete employee
```

## Sample Data
15 employees across HR, IT, Finance, Sales, and Operations departments with realistic salaries and joining dates.

## Key Components
- **AuthService** - Manages login/logout with token
- **AuthGuard** - Protects `/admin` routes
- **EmployeeService** - HttpClient REST operations
- **DepartmentsComponent** - Aggregates employee data by department
- **ListEmployees** - CRUD table with inline editing

