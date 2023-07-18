import React from "react";
import Cookies from "js-cookies"


const Navigation = () => {
    const handleClick = (e) => {
        e.preventDefault();
        Cookies.removeItem('token');
        window.location.href = '/'
    }



    const hasToken = document.cookie.includes('token')
    return (
        <div id="header_right">
            <div id="templatemo_menu">
                <ul>
                    <li>
                        <a href="/" className="current">
                            Home
                        </a>
                    </li>


                    {hasToken ? (
                        <>
                            <li className="last">
                                <a href="/create">Add to Fridge</a>
                            </li>
                            <li>
                                <a href="/dashboard">Fridge</a>
                            </li>
                            <li>
                                <a href='' onClick={handleClick}>Logout</a>
                            </li>
                        </>

                    ) : (
                        <>
                            <li>
                                <a href="/login">Login</a>
                            </li>
                            <li>
                                <a href="/register">Register</a>
                            </li>
                        </>
                    )}

                </ul>
            </div>
        </div>
    );
}

export default Navigation;