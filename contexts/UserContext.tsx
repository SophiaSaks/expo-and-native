import { createContext, useState, ReactNode } from "react"

interface User {
    email: string,
    password: string
}

export interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
    children: ReactNode
}

export function UserProvider({children}: UserProviderProps){
    const [user, setUser] = useState<User | null>(null)

    async function login(email:string, password:string) {

    }

    async function register(email:string, password:string) {

    }

    async function logout() {

    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}