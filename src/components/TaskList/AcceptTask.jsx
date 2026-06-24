import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const AcceptTask = ({ data, taskIndex, employeeData }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const updateTaskStatus = (statusKey, incrementKey) => {
        const updatedEmployees = userData.employees.map((emp) => {
            if (emp.id === employeeData.id) {
                emp.tasks[taskIndex].active = false
                emp.tasks[taskIndex][statusKey] = true
                emp.taskNumbers.active -= 1
                emp.taskNumbers[incrementKey] += 1
            }
            return emp
        })

        setUserData({ ...userData, employees: updatedEmployees })
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    return (
        <div className="h-full bg-white dark:bg-slate-800 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-200">
            <div>
                <div className="flex justify-between items-center gap-4">
                    <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 font-semibold px-3 py-1 rounded-lg text-xs tracking-wide uppercase">
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

            <div className="flex gap-3 mt-6">
                <button
                    onClick={() => updateTaskStatus('completed', 'completed')}
                    className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-2.5 rounded-xl transition-all duration-150 active:scale-[0.97] shadow-sm shadow-emerald-600/10"
                >
                    Complete
                </button>
                <button
                    onClick={() => updateTaskStatus('failed', 'failed')}
                    className="w-1/2 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 dark:text-rose-400 font-medium text-sm py-2.5 rounded-xl transition-all duration-150 active:scale-[0.97]"
                >
                    Fail Task
                </button>
            </div>
        </div>
    )
}

export default AcceptTask