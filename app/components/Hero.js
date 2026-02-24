// 'use client';
// import Image from "next/image";

import Image from "next/image";

// export default function Hero() {
//   return (
//     <>
//       <section className="max-w-6xl mx-auto">
//         <div className="w-full h-96">
//           <img
//             src="/assets/img/banner-img.png"
//             alt="Dummy UI Left"
//             className="rounded-3xl object-cover"
//           />
//         </div>
//       </section>

//     </>

//   );

// }

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden max-w-7xl mx-auto mt-16">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/img/banner-img.png"   // 👉 put your image inside public folder
          alt="Hero"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8  flex flex-col justify-between py-12 text-white">

        {/* Top Content */}
        <div className="flex justify-between items-start h-80">

          <div className="max-w-xl space-y-6 ">
            <p className="text-sm md:text-base text-gray-200">
              From digital marketing and influencer campaigns to offline
              branding and AI automation GetLaunch Labs builds complete
              growth systems for modern businesses.
            </p>

            <div className="flex gap-6 items-center">
              <button className="flex items-center gap-2 text-sm uppercase tracking-wide hover:opacity-80">
                VIEW SERVICES  <Image src="/assets/img/get-touch.png" alt="nav-icon" width={10} height={10} />
              </button>

              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition">
                BOOK A CALL  <Image src="/assets/img/arrow-black.png" alt="nav-icon" width={10} height={10} />
              </button>
            </div>
          </div>

          {/* Top Right Text */}
          <div className="max-w-md space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div className="hidden md:block text-start">
                <p className="text-sm text-gray-200">
                  Breakthrough with <br /> AI Powered Ads
                </p>
              </div>
              <Image src="/assets/img/get-touch.png" alt="nav-icon" width={16} height={16} />
            </div>
            {/* <Image src="/assets/img/banner-gif.gif" className="rounded-md" alt="nav-icon" width={200} height={100} /> */}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="space-y-4">
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Launch. Grow. Scale
          </p>

          <h1 className="text-4xl xl:text-6xl  font-semibold leading-tight max-w-4xl">
            Your All-in-One Growth Partner
            <br />
            for Modern Brands.
          </h1>
        </div>
      </div>
    </section>
  );
}
