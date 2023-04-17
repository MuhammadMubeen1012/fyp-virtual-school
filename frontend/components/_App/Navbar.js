import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        // window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="edemy-nav">
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light">

                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <h2 className={"fw-bolder"}>Ek-School</h2>
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Search for anything" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>

                                {/* ============================= Nav Items ========================= */}
                                <ul className="navbar-nav">
                                    {/*Home*/}
                                    <li className="nav-item">
                                        <Link href="/" >
                                            <a className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                    </li>

                                    {/*About*/}
                                    <li className="nav-item">
                                        <Link href="/" >
                                            <a className="nav-link">
                                                About
                                            </a>
                                        </Link>
                                    </li>


                                    {/*Features*/}
                                    <li className="nav-item">
                                        <Link href="/" >
                                            <a className="nav-link">
                                                Features
                                            </a>
                                        </Link>
                                    </li>




                                    {/*Events*/}
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Events
                                            </a>
                                        </Link>

                                    </li>


                                    {/*Blog*/}
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Blog
                                            </a>
                                        </Link>
                                    </li>




                                </ul>

                                {/* ============================= Login Register Button ==================== */}
                                <div className="others-option d-flex align-items-center">

                                    <div className="option-item">
                                        <Link href="/login">
                                            <a className="default-btn">
                                                <i className="flaticon-user"></i> Login <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
