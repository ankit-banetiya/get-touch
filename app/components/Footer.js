import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-2">

                    {/* Left Section */}
                    <div className="md:col-span-2 space-y-6">

                        {/* Logo */}
                        <Image
                            src="/assets/img/logo.png"
                            alt="Dummy UI Left"
                            width={215}
                            height={50}
                        />

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed max-w-md">
                            Get launch is a Marketing Agency delivering design and
                            digital solutions that help brands grow. Stay connected with
                            us for updates, insights, and creative inspiration.
                        </p>

                        {/* Join Team */}
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-black font-medium hover:opacity-70 transition"
                        >
                            Join team <span>→</span>
                        </Link>
                    </div>

                    {/* Right Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:col-span-2">

                        {/* Quick Links */}
                        <div className="flex justify-end">
                            <div>
                            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Pricing</Link></li>
                                <li><Link href="#">Contact</Link></li>
                                <li><Link href="#">404</Link></li>
                            </ul>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="flex justify-end">
                            <div >
                            <h4 className="font-semibold mb-4 text-black">Resources</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li><Link href="#">Work</Link></li>
                                <li><Link href="#">Blogs</Link></li>
                                <li><Link href="#">Services</Link></li>
                            </ul>
                            </div>
                        </div>

                        {/* Follow Us */}
                        <div className="flex justify-end">
                            <div>
                            <h4 className="font-semibold mb-4 text-black">Follow us</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li><Link href="#">Twitter</Link></li>
                                <li><Link href="#">Linkedin</Link></li>
                                <li><Link href="#">Youtube</Link></li>
                                <li><Link href="#">Tiktok</Link></li>
                                <li><Link href="#">Dribbble</Link></li>
                            </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}
