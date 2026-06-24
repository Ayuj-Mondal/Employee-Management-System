import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const AllTask = () => {
    const [authData] = useContext(AuthContext)

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Employee Status Tracker</h2>
            
            {/* Horizontal responsive container with clean modern row elements */}
            <div className="overflow-x-auto w-full">
                <div className="min-w-150">
                    
                    {/* Clean Table Header Row */}
                    <div className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 font-semibold text-xs uppercase tracking-wider py-3.5 px-4 flex justify-between rounded-xl mb-3">
                        <span className="w-1/5">Employee Name</span>
                        <span className="w-1/5 text-center">New Tasks</span>
                        <span className="w-1/5 text-center">Active Tasks</span>
                        <span className="w-1/5 text-center">Completed</span>
                        <span className="w-1/5 text-center">Failed</span>
                    </div>

                    {/* Data List Rows */}
                    <div className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-1">
                        {authData?.employees.map((employee, idx) => (
                            <div
                                key={idx}
                                className="hover:bg-slate-50/60 dark:hover:bg-slate-900/30 border border-slate-100 dark:border-slate-700/50 items-center py-3 px-4 flex justify-between rounded-xl transition-all duration-150"
                            >
                                <h2 className="w-1/5 font-semibold text-slate-700 dark:text-slate-200">
                                    {employee.firstName}
                               </h2> 

                                <div className="w-1/5 flex justify-center">
                                    <span className="bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 font-bold text-xs min-w-7 h-7 flex items-center justify-center rounded-full px-1.5">
                                        {employee.taskNumbers.newTask}
                                    </span>
                                </div>

                                <div className="w-1/5 flex justify-center">
                                    <span className="bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 font-bold text-xs min-w-7 h-7 flex items-center justify-center rounded-full px-1.5">
                                        {employee.taskNumbers.active}
                                    </span>
                                </div>

                                <div className="w-1/5 flex justify-center">
                                    <span className="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-xs min-w-7 h-7 flex items-center justify-center rounded-full px-1.5">
                                        {employee.taskNumbers.completed}
                                    </span>
                                </div>

                                <div className="w-1/5 flex justify-center">
                                    <span className="bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 font-bold text-xs min-w-7 h-7 flex items-center justify-center rounded-full px-1.5">
                                        {employee.taskNumbers.failed}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllTask;