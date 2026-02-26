import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Left Small Label */}
          <div className="text-sm tracking-widest uppercase text-gray-400">
            LET’S CONNECT
          </div>

          {/* Right Content */}
          <div className="md:col-span-2">

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-medium leading-snug mb-12">
              Ready to take your brand to the next level? <br />
              Partner with GetLaunch today and access professional solutions.
            </h2>

            {/* Form */}
            <form className="space-y-8 max-w-xl">

              {/* Full Name */}
              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="E.g. Utkarsh Desmukh"
                  className="w-full bg-transparent  focus:border-white outline-none py-2 placeholder-gray-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="E.g. utkarsh.deshmukh@getlaunch"
                  className="w-full bg-transparent focus:border-white outline-none py-2 placeholder-gray-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={1}
                  placeholder="Write your message here..."
                  className="w-full bg-transparent focus:border-white outline-none py-2 placeholder-gray-500 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition"
              >
                SEND MESSAGE  <Image src="/assets/img/arrow-black.png" alt="nav-icon" width={10} height={10} />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
