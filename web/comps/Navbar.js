import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter();
    const currentRoute = router.pathname;

    return ( 
        <nav className="navbar">
            <div className="links">
            <Link className={currentRoute === '/' ? "active": ''} href='/'>Home</Link>
            <Link className={currentRoute === '/about' ? "active": ''} href='/about'>About</Link>
            <Link className={currentRoute === '/gallery' ? "active": ''} href='/gallery'>Work</Link>
            <Link className={currentRoute === '/news' ? "active": ''} href='/news'>News</Link>
            <Link className={currentRoute === '/contact' ? "active": ''} href='/contact'>Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;