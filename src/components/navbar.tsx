import Link from "next/link";

export default function NavBar() {

    return (
        <div className="bg-body-tertiary sticky-top">
            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link href="/" className="nav-link navbar-brand" aria-current="page">
                        Next.Js
                    </Link>
                    <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/learn" className="nav-link" aria-current="page">
                                Learn
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/practice" className="nav-link">
                                Practice
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}