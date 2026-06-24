import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, changeUser, setLoggedInUserData }) => {
    return (
        // Changed to min-h-screen to prevent layout breakdown on small screens, added layout containers
        <div className="p-6 md:p-10 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <Header
                    data={data}
                    changeUser={changeUser}
                    setLoggedInUserData={setLoggedInUserData}
                />
                <TaskListNumbers data={data} />
                <TaskList data={data} />
            </div>
        </div>
    )
}

export default EmployeeDashboard