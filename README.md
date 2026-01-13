# Employee Management Dashboard

## Overview
Angular 20 app for managing employees with list view, detail view, and CRUD operations.

## Features
- Employee list with add/edit/delete
- Employee detail page via routing
- Bootstrap responsive UI
- Template-driven forms + validation

## Project Structure
src/
├── app/
│ ├── app.module.ts # Root module
│ ├── app-routing-module.ts # Routes
│ ├── app.component.ts # Shell with <router-outlet>
│ ├── navbar/ # Navigation
│ ├── list-employees/ # CRUD list
│ └── employee-detail/ # Single employee view
├── models/
│ └── employee.model.ts # TypeScript interface
└── assets/

## Architecture Diagram
+-------------+ +-----------------+
| Navbar | | Router Outlet |
+-------------+ +--------+--------+
|
+-------+-------+
| |
+-------+-------+ +---v---+
| ListEmployees | |Detail |
| (CRUD table) | |View |
+---------------+ +-------+
## Setup Instructions
1. `npm install`
2. `ng serve`
3. Visit `http://localhost:4200/employees`

## Technologies Used
- Angular 20 (NgModule, Components, Routing)
- Bootstrap 5 (UI)
- TypeScript (Model)
