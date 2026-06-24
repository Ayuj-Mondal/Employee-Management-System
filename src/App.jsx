import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage } from './utils/localStorages'
import { AuthContext } from './context/AuthContext'

const App = () => {



  const [authData] = useContext(AuthContext)


  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {

      const userData = JSON.parse(loggedInUser)

      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])



  const handleLogin = (email, password) => {

    const { employees, admin } = getLocalStorage()

    // Admin Login
    if (
      email === admin[0].email &&
      password === admin[0].password
    ) {

      setUser('admin')
      setLoggedInUserData(admin[0])

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin',
          data: admin[0]
        })
      )
    }

    // Employee Login
    else {

      const employee = employees.find(
        (e) =>
          e.email === email &&
          e.password === password
      )

      if (employee) {

        setUser('employee')
        setLoggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            data: employee
          })
        )
      }

      else {
        alert('Invalid Credentials')
      }
    }
  }

  return (
    <>
      {!user && (
        <Login HandleLogin={handleLogin} />
      )}

      {user === 'admin' && (
        <AdminDashboard
          data={loggedInUserData}
          changeUser={setUser}
          setLoggedInUserData={setLoggedInUserData}
        />
      )}

      {user === 'employee' && (
        <EmployeeDashboard
          data={
            authData?.employees.find(
              (e) => e.id === loggedInUserData?.id
            )}
          changeUser={setUser}
          setLoggedInUserData={setLoggedInUserData}
        />
      )}
    </>
  )
}

export default App