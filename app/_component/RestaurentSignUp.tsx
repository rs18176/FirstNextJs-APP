const RestaurentSignUp = () => {
    return (
        <>
            <h3 className="text-2xl text-white">SignUp Component</h3>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Username" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Confirm Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Restaurent Name" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter City" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter Full Address" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter Phone Number" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">SignUp</button>
                </div>
            </div>
        </>
    )
}

export default RestaurentSignUp;