import Link from 'next/link';

const RestaurentHeader = () => {
    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img style={{width:100}} src="/logo.png" alt="Logo" className="logo-image" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/restaurent">Login/Signup</Link>
                </li>
                <li>
                    <Link href="/customer">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default RestaurentHeader;