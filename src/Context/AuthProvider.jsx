/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem('employees')) {
            setLocalStorage();
        }
        const { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })
    }, [])


    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>

        </div>
    )
}

export default AuthProvider
