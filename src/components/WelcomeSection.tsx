import ImageSlider from "@/components/ImageSlider";

export default function WelcomeSection() {
  return (
    <main className="relative w-full lg:h-screen h-[43vh] overflow-hidden z-20">
      {/* Video element with loop and mute */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/preweddding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-5xl md:text-8xl font-extralight mb-4 font-caslon">
          Simply the Finest
        </h1>
        <p className="md:text-xl text-sm md:mt-3 capitalize text-rose-50">
          {" "}
          create special moments for your wedding
        </p>
      </div>
    </main>
  );
}
