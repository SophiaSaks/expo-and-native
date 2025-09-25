import { createContext, useState, ReactNode } from "react"
import { account } from "../lib/appwrite"
import { ID, Models } from "react-native-appwrite"

export interface UserContextType {
    user: Models.User<Models.Preferences> | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name?: string) => Promise<Models.User<Models.Preferences> | null>;
    logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
    children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)

    async function login(email: string, password: string) {
        try {
            await account.createEmailPasswordSession({
                email: email,
                password: password,
            })
            const response = await account.get()
            setUser(response)

        } catch (err) {
            console.log(err)
        }

    }

    async function register(email: string, password: string, name?: string) {
        try {
            const newUser = await account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name
            })
            setUser(newUser)
            return newUser

        } catch (err) {
            console.log(err)
            return null
        }

    }

    async function logout() {
        try {
            await account.deleteSession("current");
            setUser(null);
        } catch (err) {
            console.error("Logout error:", err);
        }

    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}