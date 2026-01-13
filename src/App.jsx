import { useState } from "react";

import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";


let DUMMY_PROJECTS = [
  {
    id: Math.random(),
    title: "Project 1",
    description: "SmartShop is a full-stack e-commerce web application built using React (frontend) and Django + MySQL (backend). The system allows users to browse products, add them to the cart, and place orders using a simple and clean interface. It includes full authentication (sign up, login, logout), product management (CRUD operations), shopping cart and checkout flow, and an admin dashboard for managing orders and inventory. The platform also supports secure payments and cash-on-delivery, with a scalable architecture suitable for real-world deployment.",
    dueDate: "2025-01-01",
  },
  {
    id: Math.random(),
    title: "Project 2",
    description: "SmartShop is a full-stack e-commerce web application built using React (frontend) and Django + MySQL (backend). The system allows users to browse products, add them to the cart, and place orders using a simple and clean interface. It includes full authentication (sign up, login, logout), product management (CRUD operations), shopping cart and checkout flow, and an admin dashboard for managing orders and inventory. The platform also supports secure payments and cash-on-delivery, with a scalable architecture suitable for real-world deployment.",
    dueDate: "2025-01-02",
  },
  {
    id: Math.random(),
    title: "Project 3",
    description: "SmartShop is a full-stack e-commerce web application built using React (frontend) and Django + MySQL (backend). The system allows users to browse products, add them to the cart, and place orders using a simple and clean interface. It includes full authentication (sign up, login, logout), product management (CRUD operations), shopping cart and checkout flow, and an admin dashboard for managing orders and inventory. The platform also supports secure payments and cash-on-delivery, with a scalable architecture suitable for real-world deployment.",
    dueDate: "2025-01-03",
  },
  {
    id: Math.random(),
    title: "Project 4",
    description: "SmartShop is a full-stack e-commerce web application built using React (frontend) and Django + MySQL (backend). The system allows users to browse products, add them to the cart, and place orders using a simple and clean interface. It includes full authentication (sign up, login, logout), product management (CRUD operations), shopping cart and checkout flow, and an admin dashboard for managing orders and inventory. The platform also supports secure payments and cash-on-delivery, with a scalable architecture suitable for real-world deployment.",
    dueDate: "2025-01-04",
  }
];

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: DUMMY_PROJECTS,
    tasks: []
  });
  

  function handleAddTask(task){
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        taskText: task,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    });
  }

  function handleDeletTask(taskId) {
    setProjectState(prevState => {
      const updatedTasks = prevState.tasks.filter(task => task.id !== taskId);
      return {
        ...prevState,
        tasks: updatedTasks
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  
  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  // My Solutoin
  function handleDeletProject(id) {
    setProjectState(prevState => {
      const updatedProjects = prevState.projects.filter(project => project.id !== id);
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
      }
    })
  }

  // InstructorMax Solution
  function HandleDelete(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  let content = <SelectedProject 
    project={projectState.projects.find(project => project.id === projectState.selectedProjectId)}
    tasks={projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId)}
    onDelete={handleDeletProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeletTask}
  />;


  if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  } else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected OnStartAddProject={handleStartAddProject} />
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
      OnStartAddProject={handleStartAddProject} 
      projects={projectState.projects} 
      onSelectProject={handleSelectProject}
      selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
