import Link from 'next/link';

interface Props {
    title: string;
}

function NavBar({ title }: Props) {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    {title}
                </Link>
                
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-blue-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-200">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;