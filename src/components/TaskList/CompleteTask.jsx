const CompleteTask = ({ data }) => {
    return (
        <div className="h-full bg-slate-50/50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between opacity-90">
            <div>
                <div className="flex justify-between items-center gap-4">
                    <span className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 font-semibold px-2.5 py-0.5 rounded-md text-xs uppercase tracking-wider">
                        {data.category || "Task"}
                    </span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                        {data.taskDate || "Archived"}
                    </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-400 dark:text-slate-500 tracking-tight line-through decoration-slate-300 dark:decoration-slate-600">
                    {data.taskTitle}
                </h2>
                <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mt-2 line-clamp-3">
                    {data.taskDescription}
                </p>
            </div>

            {/* Changed from a dead button to a clean status banner */}
            <div className="w-full mt-6 bg-blue-50 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 font-semibold text-xs py-2.5 rounded-xl text-center border border-blue-100 dark:border-blue-500/10 tracking-wide uppercase flex items-center justify-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Completed Status
            </div>
        </div>
    )
}

export default CompleteTask