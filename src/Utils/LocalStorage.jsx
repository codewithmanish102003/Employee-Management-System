// localStorage.clear()

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstname: "Aarav",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Report Completion",
        taskDescription: "Complete the report by gathering all necessary data and insights.",
        taskDate: "2024-12-12",
        category: "Reports",
        taskNumber: "active-1"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Details Update",
        taskDescription: "Update client details in the database to ensure accuracy and completeness.",
        taskDate: "2024-12-10",
        category: "Data Entry",
        taskNumber: "completed-1"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstname: "Ananya",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Presentation Preparation",
        taskDescription: "Prepare presentation slides for the upcoming meeting with the stakeholders.",
        taskDate: "2024-12-13",
        category: "Presentation",
        taskNumber: "active-2"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Budget Review",
        taskDescription: "Review budget documents to identify discrepancies and ensure accuracy.",
        taskDate: "2024-12-09",
        category: "Finance",
        taskNumber: "failed-1"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstname: "Ishaan",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting Organization",
        taskDescription: "Organize a team meeting to discuss project updates and next steps.",
        taskDate: "2024-12-14",
        category: "Management",
        taskNumber: "active-3"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Proposal Submission",
        taskDescription: "Submit the project proposal to the management for approval and feedback.",
        taskDate: "2024-12-11",
        category: "Projects",
        taskNumber: "completed-2"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstname: "Priya",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Sales Data Analysis",
        taskDescription: "Analyze sales data to identify trends and areas for improvement.",
        taskDate: "2024-12-08",
        category: "Analytics",
        taskNumber: "failed-2"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Company Event Planning",
        taskDescription: "Plan the company event, including venue selection and logistics coordination.",
        taskDate: "2024-12-15",
        category: "Events",
        taskNumber: "active-4"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstname: "Kavya",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 7",
        taskDescription: "Finalize yearly budget.",
        taskDate: "2024-12-10",
        category: "Finance",
        taskNumber: "completed-3"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task 8",
        taskDescription: "Coordinate with vendors.",
        taskDate: "2024-12-14",
        category: "Operations",
        taskNumber: "active-5"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 6,
    email: "employee6@example.com",
    password: "123",
    firstname: "Rohan",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task 9",
        taskDescription: "Prepare marketing strategy.",
        taskDate: "2024-12-16",
        category: "Marketing",
        taskNumber: "active-6"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 10",
        taskDescription: "Conduct performance reviews.",
        taskDate: "2024-12-12",
        category: "HR",
        taskNumber: "newTask-1"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 7,
    email: "employee7@example.com",
    password: "123",
    firstname: "Sneha",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Task 11",
        taskDescription: "Troubleshoot server issues.",
        taskDate: "2024-12-09",
        category: "IT",
        taskNumber: "failed-3"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task 12",
        taskDescription: "Design a new product layout.",
        taskDate: "2024-12-13",
        category: "Design",
        taskNumber: "active-7"
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1
    }
  }
];



const admin=[{

      "id": 1,
      "firstname":"Admin",
      "email": "admin@example.com",
      "password": "123"
    }]
  
  


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees, admin };
};