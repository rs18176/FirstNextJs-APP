'use client'
import { useState } from 'react';
import RestaurentLogin from '../_component/RestaurentLogin';
import RestaurentSignUp from '../_component/RestaurentSignUp';
import RestaurentHeader from '../_component/RestaurentHeader';
import RestaurentFooter from '../_component/RestaurentFooter';
import './style.css';


const Restaurent = () => {
    const [login, setlogin] = useState(true);
    return (
        <>
            <div className='container'>
                <RestaurentHeader />
                <h1 className="text-3xl text-white">Restaurent Login/Signup Page</h1>
                {
                    login ? <RestaurentLogin /> : <RestaurentSignUp />
                }
                <div>
                    <button onClick={() => setlogin(!login)} className="button-link">
                        {login ? "Don't have an account? Signup" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
            <RestaurentFooter />
        </>
    )
}

export default Restaurent;