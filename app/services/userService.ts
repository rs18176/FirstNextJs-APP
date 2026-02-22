import client from "@/lib/apolloClient";
import { Get_User } from "../api/graphql/queries";
import { Create_User } from "../api/graphql/mutations";

export interface User {
    id: string,
    username: string,
    password: string,
    restaurantName: string,
    city: string,
    address: string,
}
//Example: Fetch users
export async function getUsers(): Promise<User[]> {
    try {
        const data = await client.query<{ getUser: User[] }>({
            query: Get_User,
            fetchPolicy: "network-only", // Always fetch fresh data
        });
        console.log(data);
        return data.data?.getUser ?? [];
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

//Example: Create a new user
export async function createUser(createUser: User): Promise<User | null> {
    try {
        console.log("Creating user with data:", createUser);
        const { data } = await client.mutate<{ createUser: User }>({
            mutation: Create_User,
            variables: { input: createUser }, // wrap createUser in an object
        });

        // Return the created user safely
        return data?.createUser ?? null;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

