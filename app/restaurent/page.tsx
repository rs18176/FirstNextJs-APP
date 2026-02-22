"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import RestaurentLogin from '../_component/RestaurentLogin';
import RestaurentSignUp from '../_component/RestaurentSignUp';
import RestaurentHeader from '../_component/RestaurentHeader';
import RestaurentFooter from '../_component/RestaurentFooter';
import './style.css';


const Restaurent = () => {
    const login = useSearchParams().get("login") === "true";
    const [isLogin, setlogin] = useState(login);
    console.log("Login state:", isLogin);
    return (
        <>
            <div className='container'>
                <RestaurentHeader />
                <h1 className="text-3xl text-white">Restaurent Login/Signup Page</h1>
                {
                    isLogin ? <RestaurentSignUp /> : <RestaurentLogin />
                }
                <div>
                    <button onClick={() => setlogin(!isLogin)} className="button-link">
                        {isLogin ? "Already have an account? Login" : "Don't have an account? Signup"}
                    </button>
                </div>
            </div>
            <RestaurentFooter />
        </>
    )
}

export default Restaurent;