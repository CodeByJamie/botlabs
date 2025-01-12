/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { createContext, useContext } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{
    children: React.ReactNode;
    providedSession: any | null;
}> = ({ children, providedSession }) => {
    return (
        <AuthContext.Provider value={providedSession}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): any => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};