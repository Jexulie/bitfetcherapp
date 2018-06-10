import Link from 'next/link'

var Navbar = () => {
    return(
        <header>
            <nav>
                <div className="nav-wrapper blue lighten-3">
                    <ul className="right">
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/"><a>Home</a></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;