import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const user = sessionStorage.getItem('userEmail');
        const userAdmin = sessionStorage.getItem('userAdmin');
        if (user) {
            setIsLoggedIn(true);
            setUserEmail(user);
            if(userAdmin == "0"){
                setIsAdmin(false);
            }
            else{
                setIsAdmin(true);
            }
            
        }
    }, []);

    const login = (email, admin) => {
        console.log(email, admin);
        sessionStorage.setItem('userEmail', email);
        setIsAdmin(admin);
        setIsLoggedIn(true);
        setUserEmail(email);
        window.location.href = "/";
    };

    const logout = () => {
        sessionStorage.removeItem('userEmail');
        setIsLoggedIn(false);
        setUserEmail('');
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, isAdmin, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
