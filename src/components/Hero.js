import React from "react";

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-bit-blue to-blue-800 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Bahir Dar Institute of Technology Career Development Center
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Empowering students with the skills, resources, and opportunities
              to build successful careers.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="bg-white text-bit-blue hover:bg-gray-100 h-9 rounded-md px-4 py-2 text-sm font-medium shadow transition-colors">
                Explore Opportunities
              </button>
              <button className="border-white text-white hover:bg-white/20 h-9 rounded-md border px-4 py-2 text-sm font-medium shadow transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto">
            <img
              src="https://via.placeholder.com/500x400"
              alt="BiT CDC Students"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
