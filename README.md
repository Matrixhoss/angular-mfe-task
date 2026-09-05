# Angular Micro Frontend

I built this project as a small Angular micro frontend application inside an Nx monorepo. It has one shell application and two remote applications connected with Native Federation.

## Applications

- `shell` is the host application. It contains the header, navigation, and home page.
- `table` is a remote application that displays employee records with filtering, sorting, and pagination.
- `data` is a remote application that displays company information.

The shell loads the remote routes at runtime:

- `/` displays the home page.
- `/table` loads the Table remote.
- `/data` loads the Data remote.

## Technologies

- Angular standalone components
- Nx monorepo
- Native Federation
- TypeScript
- RxJS and Angular signals
- HTML and CSS

## Completed Features

### Core Features

- Nx monorepo with one shell and two remote applications
- Native Federation configuration for the shell and remotes
- Shell routes that load the Table and Data applications at runtime
- Shared shell layout with a header and navigation sidebar
- Home page with summary statistics and links to both remotes
- Table remote with mock employee data
- Data remote with mock company information
- Angular services that simulate API requests
- Loading states while mock data is being requested
- Reusable table, pagination, statistics card, and application card components
- Responsive layouts for desktop and mobile screens
- Direct route support for `/table` and `/data`

### Bonus Features

- Loading indicator while a remote application is being loaded
- Error message when a remote cannot be loaded
- Table pagination with five records per page
- Search filtering by name, email, or department
- Status filtering by active or inactive records
- Sorting by ID, name, email, department, or status
- Empty state when no table records match the filters

## Requirements

- Node.js 22.22.3 or newer
- npm

## Install

```bash
npm install
```

## Run the applications

Start the shell and both remotes with one command:

```bash
npx nx run-many -t serve --projects=shell,table,data --parallel=3
```

Then open [http://localhost:4200](http://localhost:4200).

The applications use these ports:

- Shell: `http://localhost:4200`
- Table remote: `http://localhost:4201`
- Data remote: `http://localhost:4202`

The shell is the main user-facing application, so the remote URLs do not need to be opened separately.

## Build

Build all three applications for production:

```bash
npx nx run-many -t build --projects=shell,table,data --configuration=production
```

## Lint

Run ESLint for all applications:

```bash
npx nx run-many -t lint --projects=shell,table,data
```

## Data

This project does not use a backend. The Angular services return mock data with a short delay to simulate API requests and loading states.
