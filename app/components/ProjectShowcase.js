import Image from "next/image";

export default function ProjectShowcase() {
    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Top Content */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">

                    {/* Left Small Label */}
                    <div className="text-sm tracking-widest uppercase text-gray-400">
                        OUR SERVICES
                    </div>

                    {/* Heading */}
                    <div className="md:col-span-2 space-y-8">
                        <h2 className="text-2xl md:text-4xl leading-snug font-medium text-gray-400">
                            Explore GetLaunch services{" "}
                            <span className="text-white">designed to elevate brands.</span>{" "}
                            From creative design to digital solutions, and deliver{" "}
                            <span className="text-white">
                                long-lasting success for every client.
                            </span>
                        </h2>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                            {/* Card 1 */}
                            <div className="group relative bg-[#2a2a2a] rounded-3xl p-4 h-[290px] flex flex-col justify-between hover:bg-[#333] transition duration-300">
                                <h3 className="text-lg font-medium">
                                    Branding & Identity
                                </h3>

                                <div className="flex justify-end">
                                    <Image src="/assets/img/get-touch.png" alt="nav-icon" width={20} height={20} />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative bg-[#2a2a2a] rounded-3xl p-4 h-[290px] flex flex-col justify-between hover:bg-[#333] transition duration-300">
                                <h3 className="text-lg font-medium">
                                    Website & Landing Pages
                                </h3>

                                {/* Example Image */}
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/phone-mockup.png"
                                        alt="Website mockup"
                                        className="h-40 object-contain"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <Image src="/assets/img/get-touch.png" alt="nav-icon" width={20} height={20} />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative bg-[#2a2a2a] rounded-3xl p-4 h-[290px] flex flex-col justify-between hover:bg-[#333] transition duration-300">
                                <h3 className="text-lg font-medium">
                                    Social Media Management
                                </h3>

                                <div className="flex justify-end">
                                    <Image src="/assets/img/get-touch.png" alt="nav-icon" width={20} height={20} />
                                </div>
                            </div>

{/* Card 1 */}
                            <div className="group relative bg-[#2a2a2a] rounded-3xl p-4 h-[290px] flex flex-col justify-between hover:bg-[#333] transition duration-300">
                                <h3 className="text-lg font-medium">
                                    Branding & Identity
                                </h3>

                                <div className="flex justify-end">
                                    <Image src="/assets/img/get-touch.png" alt="nav-icon" width={20} height={20} />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative bg-[#2a2a2a] rounded-3xl p-4 h-[290px] flex flex-col justify-between hover:bg-[#333] transition duration-300">
                                <h3 className="text-lg font-medium">
                                    Website & Landing Pages
                                </h3>

                                {/* Example Image */}
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/phone-mockup.png"
                                        alt="Website mockup"
                                        className="h-40 object-contain"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <Image src="/assets/img/get-touch.png" alt="nav-icon" width={20} height={20} />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative bg-[#2a2a2a] rounded-3xl p-4 h-[290px] flex flex-col justify-between hover:bg-[#333] transition duration-300">
                                <h3 className="text-lg font-medium">
                                    Social Media Management
                                </h3>

                                <div className="flex justify-end">
                                    <Image src="/assets/img/get-touch.png" alt="nav-icon" width={20} height={20} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
