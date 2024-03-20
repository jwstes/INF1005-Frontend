import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const user = sessionStorage.getItem('userEmail');
        if (user) {
            setIsLoggedIn(true);
            setUserEmail(user);
        }
    }, []);

    const login = (email) => {
        sessionStorage.setItem('userEmail', email);
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
        <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
