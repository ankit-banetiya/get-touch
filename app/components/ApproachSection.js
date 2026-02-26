export default function ApproachSection() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Top Layout */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">

                    {/* Left Small Label */}
                    <div className="text-sm tracking-widest uppercase text-gray-700">
                        OUR APPROACH
                    </div>

                    {/* Heading */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl md:text-4xl leading-snug font-medium text-gray-500">
                            A strategy-first and{" "}
                            <span className="text-black">
                                growth-driven marketing
                            </span>{" "}
                            approach designed for brands that want{" "}
                            <span className="text-green-600">
                                visibility, leads, and scalable growth.
                            </span>
                        </h2>
                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                            {/* Card 1 */}
                            <div className="bg-gray-100 rounded-3xl p-6 space-y-6">
                                <h3 className="text-4xl font-semibold text-green-600">
                                    3X
                                </h3>
                                <p className="text-lg font-medium text-black">
                                    Higher Lead Generation
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Scaled from low-quality traffic to consistent, qualified leads.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-100 rounded-3xl p-6 space-y-6">
                                <h3 className="text-4xl font-semibold text-green-600">
                                    +150%
                                </h3>
                                <p className="text-lg font-medium text-black">
                                    Increase in Engagement
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Boosted audience interaction across social media and content.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-gray-100 rounded-3xl p-6 space-y-6">
                                <h3 className="text-4xl font-semibold text-green-600">
                                    +70%
                                </h3>
                                <p className="text-lg font-medium text-black">
                                    Conversion Rate
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Improved conversions using high-performing landing pages.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
