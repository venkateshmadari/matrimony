import React from "react";

const testimonials = [
  {
    id: 1,
    number: "9.3",
    text: "We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate by 800% in just two weeks. Highly recommend!",
    name: "David Callahan",
    role: "Marketing Director, Spotify",
    bg: "bg-slate-50",
  },
  {
    id: 2,
    number: "9.5",
    text: "From branding to website design, every detail was meticulously handled. The team's expertise helped us launch faster, and the results have been phenomenal!",
    name: "Sarah Michel",
    role: "Marketing Director, Google",
    bg: "bg-slate-50",
  },
  {
    id: 3,
    number: "9.8",
    text: "They really understood our vision and brought it to life beautifully. Couldn’t have asked for a better experience!",
    name: "James Carter",
    role: "Founder, StartupX",
    bg: "bg-slate-50",
  },
  {
    id: 4,
    number: "9.9",
    text: "The team’s attention to detail is unmatched. We saw immediate results after the launch!",
    name: "Emily Stone",
    role: "CEO, Brandify",
    bg: "bg-primary",
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center sm:px-6 lg:px-8 py-10 mb-6">
      <span className="px-3 py-2 bg-primary rounded-full text-xs mb-4 uppercase font-medium text-center">
        testimonials
      </span>
      <h1 className="md:text-6xl text-4xl font-caslon font-extralight capitalize text-primary text-center">
        Results that speaks volume
      </h1>
      <h1 className="md:text-6xl text-4xl mt-3 mb-6 font-caslon font-extralight capitalize text-gray-700 text-center">
        Read success stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div
          className={`${testimonials[0].bg} rounded-3xl border border-slate-300 p-6 flex flex-col justify-between h-full`}
        >
          <div>
            <div className="inline-flex items-end justify-end font-caslon mb-4">
              <h1 className="text-5xl font-semibold  text-gray-900">
                {testimonials[0].number}
              </h1>{" "}
              <p className="text-gray-500 text-lg">/10</p>
            </div>
            <p className="text-gray-600 italic mb-4">{testimonials[0].text}</p>
          </div>
          <div>
            <div className="font-light text-lg text-primary font-caslon">
              {testimonials[0].name}
            </div>
            <div className="text-gray-700 text-sm">{testimonials[0].role}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
          {testimonials.slice(1).map((t, idx) => {
            const isLast = idx === testimonials.slice(1).length - 1;
            return (
              <div
                key={t.id}
                className={`${
                  t.bg
                } rounded-3xl border border-slate-300 p-6 flex flex-col justify-between ${
                  idx === 0 ? "md:col-span-2" : ""
                } ${isLast && t.bg === "bg-primary" ? "text-white" : ""}`}
              >
                <div>
                  <div className="inline-flex items-end justify-end font-caslon mb-4">
                    <h1
                      className={`text-5xl font-semibold ${
                        isLast && t.bg === "bg-primary"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {t.number}
                    </h1>
                    <p
                      className={`ml-1 text-lg ${
                        isLast && t.bg === "bg-primary"
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      /10
                    </p>
                  </div>
                  <p
                    className={`italic mb-4 ${
                      isLast && t.bg === "bg-primary"
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {t.text}
                  </p>
                </div>
                <div>
                  <div
                    className={`font-light text-lg font-caslon ${
                      isLast && t.bg === "bg-primary"
                        ? "text-white"
                        : "text-primary"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-sm ${
                      isLast && t.bg === "bg-primary"
                        ? "text-white/80"
                        : "text-gray-700"
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
