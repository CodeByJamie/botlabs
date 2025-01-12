/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AuthProvider } from "@/contexts/useAuth";
import { getSession, SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SessionWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        async function fetchSession() {
            const fetchedSession = await getSession();
            setSession(fetchedSession);
        }
        fetchSession();
    }, []);

    return (
        <SessionProvider
            session={session}
            refetchOnWindowFocus={true}
            refetchInterval={30 * 60}
        >
            <AuthProvider providedSession={session}>{children}</AuthProvider>
        </SessionProvider>
    );
}