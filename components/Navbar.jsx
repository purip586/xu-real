import Link from "next/link";
import Image from "next/image";
import logo from '@/public/assets/logo.svg'

const Navbar = () => (
    <nav className='flex justify-between items-center w-full mb-10 pb-4 pt-3 border-b-2 border-gray-100'>
        <Link href='/' className='flex gap-2 items-center'>
            <Image
                src={logo}
                alt='logo'
                width={70}
                className='object-contain'
            />
            <p className='logo_text'>Cross U Co., Ltd.</p>
        </Link>

        <div className="flex gap-5">
            <Link href='/register-property'>Register Property</Link>
            <Link href='/creditworthness'>Check Creditworthness</Link>
            <Link href='/about'>About XU</Link>
            <Link href='/contact'>Connect with an agent</Link>
        </div>
    </nav>
);

export default Navbar;