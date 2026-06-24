import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [userData, setUserData] = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        const updatedEmployees = userData.employees.map((employee) => {
            if (employee.firstName.toLowerCase() === assignTo.toLowerCase()) {
                employee.tasks.push(newTask)
                employee.taskNumbers.newTask += 1
            }
            return employee
        })

        const updatedData = { ...userData, employees: updatedEmployees }
        setUserData(updatedData)
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }

    // Shared styling configuration for form text field wrappers
    const inputStyle = "w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200";
    const labelStyle = "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 block";

    return (
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Create New Assignment</h2>
            
            <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                
                {/* Left Form Inputs Column */}
                <div className="flex flex-col gap-4">
                    <div>
                        <label className={labelStyle}>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className={inputStyle}
                            type="text"
                            placeholder="Design corporate layout system"
                            required
                        />
                    </div>

                    <div>
                        <label className={labelStyle}>Due Date</label>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className={inputStyle}
                            type="date"
                            required
                        />
                    </div>

                    <div>
                        <label className={labelStyle}>Assign To</label>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className={inputStyle}
                            type="text"
                            placeholder="Employee name"
                            required
                        />
                    </div>

                    <div>
                        <label className={labelStyle}>Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className={inputStyle}
                            type="text"
                            placeholder="Design, Engineering, Marketing"
                            required
                        />
                    </div>
                </div>

                {/* Right Textarea Column */}
                <div className="flex flex-col justify-between h-full">
                    <div className="w-full h-full flex flex-col">
                        <label className={labelStyle}>Task Description</label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className={`${inputStyle} h-40 md:h-[calc(100%-28px)] resize-none`}
                            placeholder="Describe detailed specifications..."
                            required
                        />
                    </div>

                    <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-3 px-5 rounded-xl transition-all duration-150 active:scale-[0.98] shadow-md shadow-emerald-600/10">
                        Dispatch Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask;