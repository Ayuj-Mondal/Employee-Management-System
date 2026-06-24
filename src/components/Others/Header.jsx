const Header = ({ data, changeUser, setLoggedInUserData }) => {

    const logOutUser = () => {
        localStorage.removeItem('loggedInUser')
        changeUser(null)
        setLoggedInUserData(null)
    }

    return (
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-5">
            <div>
                <h1 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Welcome Back
                </h1>
                <span className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-2 mt-0.5">
                    {data?.firstName || 'Admin'} <span className="animate-wave">👋</span>
                </span>
            </div>

            <button
                onClick={logOutUser}
                className="bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:text-red-400 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-[0.98] border border-red-200/40 dark:border-red-500/10"
            >
                Log Out
            </button>
        </div>
    )
}

export default Header