import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const NewTask = ({ data, taskIndex, employeeData }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const acceptTask = () => {
        const updatedEmployees = userData.employees.map((emp) => {
            if (emp.id === employeeData.id) {
                emp.tasks[taskIndex].newTask = false
                emp.tasks[taskIndex].active = true
                emp.taskNumbers.newTask -= 1
                emp.taskNumbers.active += 1
            }
            return emp
        })

        setUserData({ ...userData, employees: updatedEmployees })
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    return (
        <div className="h-full bg-white dark:bg-slate-800 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
            <div>
                <div className="flex justify-between items-center gap-4">
                    <span className="bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 font-semibold px-3 py-1 rounded-lg text-xs tracking-wide uppercase">
                        {data.category}
                    </span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                        {data.taskDate}
                    </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                    {data.taskTitle}
                </h2>
                <p className="text-sm font-normal text-slate-500 dark:text-slate-400 mt-2 line-clamp-3">
                    {data.taskDescription}
                </p>
            </div>

            <button
                onClick={acceptTask}
                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm py-2.5 rounded-xl transition-all duration-150 active:scale-[0.98] shadow-sm shadow-orange-500/10"
            >
                Accept Task
            </button>
        </div>
    )
}

export default NewTask