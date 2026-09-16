function Navbar (){

    const total = 25000
    const token = false

    return(
        <>
            <nav className="nav__content">
                <ul className="nav__ul">
                    <h2>Pizzeria Mamma Mia!</h2>
                    <li className="nav__li"><a className="nav__a" href="#">🍕Home</a></li>
                    {token == true ? (
                    <>
                    <li className="nav__li"><a className="nav__a" href="#">🔓Profile</a></li>
                    <li className="nav__li"><a className="nav__a" href="#">🔒Logout</a></li>
                    </> ):(
                    <>
                        <li className="nav__li"><a className="nav__a" href="#">🔐Login</a></li>
                        <li className="nav__li"><a className="nav__a" href="#">🔐Register</a></li>
                    </>
                    )}
                </ul>
                <ul className="nav__ul">
                    <li className="nav__li nav__li-cart"><a className="nav__a" href="#">🛒 Total: ${total.toLocaleString()}</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar