const FailedTask = ({ data }) => {
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

                <h2 className="mt-4 text-xl font-bold text-slate-500 dark:text-slate-500 tracking-tight">
                    {data.taskTitle}
                </h2>
                <p className="text-sm font-normal text-slate-400 dark:text-slate-500 mt-2 line-clamp-3">
                    {data.taskDescription}
                </p>
            </div>

            {/* Changed from a dead button to a clean alert badge */}
            <div className="w-full mt-6 bg-rose-50 dark:bg-rose-500/5 text-rose-600 dark:text-rose-400 font-semibold text-xs py-2.5 rounded-xl text-center border border-rose-100 dark:border-rose-500/10 tracking-wide uppercase flex items-center justify-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                Task Failed
            </div>
        </div>
    )
}

export default FailedTask