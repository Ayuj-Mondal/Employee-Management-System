import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ data, changeUser, setLoggedInUserData }) => {
    return (
        <div className="min-h-screen p-6 md:p-10 bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <Header
                    data={data}
                    changeUser={changeUser}
                    setLoggedInUserData={setLoggedInUserData} 
                />
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard;