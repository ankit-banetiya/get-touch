"use client"

import Image from "next/image";

const brands = [
    { name: "SWARAJ CARS", link: "/assets/img/sw-cars.png" },
    { name: "RAJSHRI MAKEUP STUDIO", link: "/assets/img/rm-studio.png" },
    { name: "SAIKRUPA SALON", link: "/assets/img/s-salon.png" },
    { name: "ADVIKA MODULARS", link: "/assets/img/a-modulers.png" },
    { name: "MH27 TATTOOZ", link: "/assets/img/mh-tattooz.png" },
    { name: "LOKHANDE AUDIO MART", link: "/assets/img/lokhande.png" },
    { name: "FUSION BITES CAFE", link: "/assets/img/fusion-cafe.png" },
    { name: "SCHOLAR’S ACADEMY", link: "/assets/img/scholar-a.png" },
    // { name: "OM RAUT PHYSICS", link: "/assets/img/om-raut-physics.png" },
    { name: "CHAHAT SWEETS", link: "/assets/img/chahat-sweets.png" },
];


export default function TrustedBrands() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Top Content */}
                <div className="grid md:grid-cols-2 gap-10 items-start mb-16 items-center">

                    {/* Left Heading */}
                    <div>
                        <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-black">
                            Trusted by Brands That{" "}
                            <span className="text-green-600 block mt-2">
                                Believe in Growth
                            </span>
                        </h2>
                    </div>

                    {/* Right Description */}
                    <div className="text-gray-600 text-lg leading-relaxed">
                        From startups to growing businesses, we’ve helped brands build
                        visibility, generate leads, and scale faster.
                    </div>

                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 gap-3 py-2 flex items-center justify-center text-center hover:bg-[#dcdcdc] transition"
                        >
                            <Image src={brand?.link} alt={brand?.name} width={32} height={32} />

                            <p className="text-sm font-semibold text-black">
                                {brand?.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
