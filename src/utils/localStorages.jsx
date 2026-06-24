
const employees=[
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "e1@e.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Make UI",
                "taskDescription": "Create login page UI",
                "taskDate": "23 Jun 2026",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix Bug",
                "taskDescription": "Fix navbar bug",
                "taskDate": "24 Jun 2026",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "e2@e.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Database Setup",
                "taskDescription": "Configure MongoDB connections and schemas",
                "taskDate": "20 Jun 2026",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "API Routing",
                "taskDescription": "Create user authentications endpoints",
                "taskDate": "21 Jun 2026",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Deploy Server",
                "taskDescription": "Push backend code to cloud hosting production",
                "taskDate": "25 Jun 2026",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Diya",
        "email": "e3@e.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Client Meeting",
                "taskDescription": "Review initial wireframes with client stakeholders",
                "taskDate": "19 Jun 2026",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Figma Prototype",
                "taskDescription": "Design dashboard high-fidelity interactive screens",
                "taskDate": "22 Jun 2026",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Logo Refinement",
                "taskDescription": "Update brand typography based on feedback",
                "taskDate": "26 Jun 2026",
                "category": "Design"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Ananya",
        "email": "e4@e.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 2,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Test Cases",
                "taskDescription": "Create unit tests for auth middleware components",
                "taskDate": "24 Jun 2026",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Security Audit",
                "taskDescription": "Check dependencies for known vulnerabilities",
                "taskDate": "25 Jun 2026",
                "category": "Testing"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Kabir",
        "email": "e5@e.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Write Readme",
                "taskDescription": "Document installation steps and architecture details",
                "taskDate": "18 Jun 2026",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Approve pull requests for the dashboard branch",
                "taskDate": "20 Jun 2026",
                "category": "Development"
            }
        ]
    }
]

const admin = [
    {
        id: 1,
        email: "admin@me.com",
        password: "123"
    }
]




export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}