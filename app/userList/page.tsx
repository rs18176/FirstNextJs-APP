import { getUsers } from "../services/userService";

const userlist = async () => {
    const userDetails = await getUsers();
    console.log("userDetails:"+ userDetails.length);
    return (
        <>
            <h1>user list from graphQL</h1>
            {/* Handle empty or missing data */}
            {userDetails && userDetails.length > 0 ? (
                <ul>
                    {userDetails.map((user: any) => (
                        <li key={user.id}>
                            <strong>{user.username}</strong> — {user.restaurantName}, {user.city}, {user.address}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </>
    )
}

export default userlist;
