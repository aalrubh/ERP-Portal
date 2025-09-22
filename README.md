# ERP Portal

This project is a front-end only implementation of a simple portal dashboard using Angular 20.2, with the following modules:
- Dashboard
- Human Resources
- Finance and Accounting
- Projects
- Documents
- IT
- Customer Portal
- System Settings


## File Structure
```
Portal
│   .editorconfig
│   .gitignore
│   angular.json
│   package-lock.json
│   package.json
│   README.md
│   tree.txt
│   tsconfig.app.json
│   tsconfig.json
│   
├───.angular                     
├───.vscode       
├───dist
├───node_modules        
└───src
    ├───app
    │       app.config.ts  
    ├───assets
    │   ├───icons
    │   └───images
    ├───auth            
    ├───core
    │   ├───layout
    │   │   ├───auth-shell  
    │   │   ├───erp-shell
    │   │   ├───footer
    │   │   ├───header
    │   │   ├───not-found-shell     
    │   │   ├───sidebar
    │   │   │   └───menu-item          
    │   │   └───top-bar      
    │   ├───routing
    │   │       app.routes.ts
    │   │       auth.routes.ts
    │   │       erp.routes.ts
    │   └───services
    ├───environments
    ├───features
    │   ├───customer-portal
    │   ├───dashboard
    │   ├───documents-and-records
    │   ├───finance-and-accounting
    │   ├───human-resources
    │   ├───it-and-support
    │   ├───projects
    │   └───system-settings
    └───shared
        ├───animations
        ├───directives
        ├───pipes
        ├───styles
        └───ui

```