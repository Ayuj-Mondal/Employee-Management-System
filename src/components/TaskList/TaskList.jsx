import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                Task Overview
            </h3>
            
            {/* Added scrollbar-none utilities or smooth padding offsets */}
            <div
                id="tasklist"
                className="overflow-x-auto flex items-stretch justify-start gap-5 w-full pb-4 scroll-smooth snap-x snap-mandatory"
            >
                {data.tasks.map((task, idx) => {
                    if (task.active) {
                        return (
                            <div key={idx} className="snap-start shrink-0 w-72.5:w-[340px]">
                                <AcceptTask data={task} taskIndex={idx} employeeData={data} />
                            </div>
                        )
                    }
                    if (task.newTask) {
                        return (
                            <div key={idx} className="snap-start shrink-0 w-72.5 sm:w-85">
                                <NewTask data={task} taskIndex={idx} employeeData={data} />
                            </div>
                        )
                    }
                    if (task.completed) {
                        return (
                            <div key={idx} className="snap-start shrink-0 w-72.5 sm:w-85">
                                <CompleteTask data={task} taskIndex={idx} employeeData={data} />
                            </div>
                        )
                    }
                    if (task.failed) {
                        return (
                            <div key={idx} className="snap-start shrink-0 w-72.5 sm:w-85">
                                <FailedTask data={task} taskIndex={idx} employeeData={data} />
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default TaskList