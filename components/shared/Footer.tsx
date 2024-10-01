import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-cyan-400 text-gray-700 justify-end px-24 p-8 font-semibold flex flex-row gap-60 align-middle">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-black">Dashboard</h1>
                <p>© 2021 Dashboard. All rights reserved.</p>
            </div>
            <nav>
                <ul>
                    <li className="mb-4 ">
                        <h3 className='text-xl text-black font-bold'>Social Media</h3>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            Instagram
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            Twitter
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            Linkedin
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li className="mb-4">
                        <h3 className='text-xl text-black font-bold'>Company</h3>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            About
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            Contact
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            Careers
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li className="mb-4">
                        <h3 className='text-xl text-black font-bold'>Legal</h3>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#">
                            Terms of Service
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
