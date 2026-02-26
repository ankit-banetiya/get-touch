
export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl md:text-4xl font-medium leading-snug text-gray-400">
            At GetLaunch Labs,{" "}
            <span className="text-black">
              Your Growth Partner,
            </span>{" "}
            Not Just a Marketing Agency, we{" "}
            <span className="text-black">
              help brands
            </span>{" "}
            create meaningful impact and scale faster.
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-3xl">
          
          {/* Stat 1 */}
          <div>
            <h3 className="text-5xl md:text-6xl font-semibold text-black">
              80<span className="text-green-600">+</span>
            </h3>
            <p className="mt-4 text-gray-600">
              Brands Collaborated With
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-5xl md:text-6xl font-semibold text-black">
              150<span className="text-green-600">+</span>
            </h3>
            <p className="mt-4 text-gray-600">
              Campaigns Launched
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-5xl md:text-6xl font-semibold text-black">
              5M<span className="text-green-600">+</span>
            </h3>
            <p className="mt-4 text-gray-600">
              Audience Impressions Generated
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
