import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Image src="/wink-logo.png" alt="Wink logo" width={400} height={188} /><div style={{fontSize: "5rem", color: '#36454F'}}>Tattoos</div>
            </div>
            <div className="links">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/gallery'>Work</Link>
            <Link href='/news'>News</Link>
            <Link href='/contact'>Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;