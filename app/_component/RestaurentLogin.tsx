const RestaurentLogin = () => {
    return (
        <>
            <h3 className="text-2xl text-white">Login Component</h3>
           <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Username" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">Login</button>
                </div>
            </div>
        </>
    )
}

export default RestaurentLogin;