const TaskListNumbers = ({ data }) => {
    return (
        // Grid shifts dynamically from 2 columns on mobile to 4 columns on large displays
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

            {/* New Task Card */}
            <div className="bg-linear-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 border border-orange-200/60 dark:border-orange-500/10 rounded-2xl p-5 md:p-6 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 dark:text-orange-400">
                    {data?.taskNumbers?.newTask || 0}
                </h2>
                <h3 className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    New Tasks
                </h3>
            </div>

            {/* Completed Card */}
            <div className="bg-linear-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 border border-blue-200/60 dark:border-blue-500/10 rounded-2xl p-5 md:p-6 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                    {data?.taskNumbers?.completed || 0}
                </h2>
                <h3 className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Completed
                </h3>
            </div>

            {/* Active Card */}
            <div className="bg-linear-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/10 border border-emerald-200/60 dark:border-emerald-500/10 rounded-2xl p-5 md:p-6 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {data?.taskNumbers?.active || 0}
                </h2>
                <h3 className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Active Tasks
                </h3>
            </div>

            {/* Failed Card */}
            <div className="bg-linear-to-br from-rose-50 to-rose-100/50 dark:from-rose-950/20 dark:to-rose-900/10 border border-rose-200/60 dark:border-rose-500/10 rounded-2xl p-5 md:p-6 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-extrabold text-rose-600 dark:text-rose-400">
                    {data?.taskNumbers?.failed || 0}
                </h2>
                <h3 className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Failed
                </h3>
            </div>

        </div>
    )
}

export default TaskListNumbers