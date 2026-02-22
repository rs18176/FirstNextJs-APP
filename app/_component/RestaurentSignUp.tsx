"use client";
import { createUser } from "../services/userService";
import { useSearchParams } from "next/navigation";

const RestaurentSignUp = () => {
    
    async function HandleSubmit(e: React.FormEvent): Promise<any> {
        const login = useSearchParams().get("login") === "true";
        e.preventDefault();
        console.log("Form submitted");
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        try {
            const result = await createUser(data as any); // Cast to 'any' to bypass type issues
            console.log("User created:", result);
            if (result?.id != null || result?.id != undefined) {
                alert("User created successfully!");
                window.location.href = "/restaurent?login=false";
            }
            else {

                alert("Failed to create user. Please try again.");
                window.location.href = "/restaurent?login=true";
            }
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    return (
        <>
            <h3 className="text-2xl text-white">SignUp Component</h3>
            <form onSubmit={HandleSubmit}>

                <div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Username" className="input-field" name="username" />
                    </div>
                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" className="input-field" name="password" />
                    </div>
                    <div className="input-wrapper">
                        <input type="password" placeholder="Confirm Password" className="input-field" name="password" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Restaurent Name" className="input-field" name="restaurantName" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Enter City" className="input-field" name="city" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Enter Full Address" className="input-field" name="address" />
                    </div>
                    {/* <div className="input-wrapper">
                        <input type="text" placeholder="Enter Phone Number" className="input-field" name="phone" />
                    </div> */}
                    <div className="input-wrapper">
                        <button type="submit" className="button">SignUp</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RestaurentSignUp;