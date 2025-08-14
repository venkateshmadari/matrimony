import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Gourmet Catering",
      description:
        "Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.",
    },
    {
      title: "Staffing",
      description:
        "The hand-selected team at mata are just as important to our reputation as our gourmet food. Our staff is certainly the best at what they do, and you'll work with professionals.",
    },
    {
      title: "Video Production",
      description:
        "Our sophisticated flavor expertise enables us to create inventive concoctions that generate buzz in more ways than one with your customized one!",
    },
    {
      title: "Event Production",
      description:
        "If mind-blowing spectacles and immersive guest experiences are what you're after, the specialists at mata can pull it off on an epic scale!",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-gray-800" id="services">
      <h1 className="md:text-6xl text-4xl font-caslon font-extralight capitalize text-primary text-center">
        our services
      </h1>
      <p className="max-w-xl text-center mx-auto mt-3 mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
        reprehenderit accusantium dicta error.
      </p>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:items-center">
          {/* Left Column */}
          <div className="flex flex-col items-center justify-center gap-16">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="space-y-4">
                <h1 className="font-caslon text-4xl text-elegant leading-tight text-gray-800">
                  {service.title}
                </h1>
                <p className="text-gray-800 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <button className="rounded-full px-6 py-2 inline-flex items-center border border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="my-12">
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                src="/wedding3.jpg"
                alt="Elegant outdoor catering setup with tiered display and fresh flowers"
                className="w-full h-auto rounded-t-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center gap-16">
            {services.slice(2, 4).map((service, index) => (
              <div key={index} className="space-y-4">
                <h1 className="font-caslon text-4xl text-elegant leading-tight text-gray-800">
                  {service.title}
                </h1>
                <p className="text-gray-800 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <button className="rounded-full px-6 py-2 inline-flex items-center border border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-16">
          {/* Center Image for mobile */}
          <div className="w-full">
            <img
              src="/wedding3.jpg"
              alt="Elegant outdoor catering setup with tiered display and fresh flowers"
              className="w-full h-full rounded-t-full object-cover aspect-[4/5]"
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {services.map((service, index) => (
              <div key={index} className="space-y-6 text-center md:text-left">
                <h2 className="font-caslon text-3xl sm:text-4xl text-elegant leading-tight">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="rounded-full px-6 py-2 inline-flex items-center border border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    LEARN MORE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
