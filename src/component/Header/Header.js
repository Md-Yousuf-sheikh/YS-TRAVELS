import React from 'react';
import'./Header.css';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark py-3">
                <div className="container">
                    <a className="navbar-brand" href="/"><span className="text-light">YS </span><span className="text-danger">TRAVELS</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link"  href="/">Best Place</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/">Tour Info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/">Ticket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/">Top Place</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/">About</a>
                            </li>
                        </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-danger" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>

            <div className=" bg-danger text-light p-2 ">
                <h4>CHOOSE THE PLACE OF YOUR CHOICE</h4>
            </div>
        </div>
    );
};

export default Header;