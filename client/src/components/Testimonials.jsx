import { ChevronRight, Flower2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Person1 from "../assets/tsetimonials/t1.jpg";
import Bg from "../assets/tsetimonials/test.png";

const testimonialsData = [
  {
    image: Person1,
    title: "Comfort in Floral",
    content:
      "The flowers I received were fresh and beautifully arranged. They brought so much color and joy to my home!",
    client: "Muthu, Client",
  },
  {
    image: Person1,
    title: "Elegance Redefined",
    content:
      "Every petal was perfect. Highly recommended for gifting and events.",
    client: "Aishwarya, Client",
  },
  {
    image: Person1,
    title: "Aroma of Happiness",
    content: "The fragrance and look were top-notch. Made my day very special.",
    client: "Ravi, Client",
  },
];

const Testimonials = () => {
  return (
   <div
            className="w-screen min-h-screen bg-contain bg-center bg-no-repeat py-2 px-4 bg-[#f1ecef]"
            style={{ backgroundImage: `url(${Bg})` }}
        >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-pink-600 mb-12">
          Our Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-pink-600 mb-2">
                Why Our Clients Love Us
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                Our flowers speak the language of beauty and emotion. Explore
                heartfelt feedback from our happy clients who’ve experienced joy
                through our floral creations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 flex items-center gap-2">
                <Flower2 className="text-pink-500 w-6 h-6" />
                A Symphony of Colors
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                One of the most captivating aspects of flowers is their vibrant
                color palette. Flowers can be found in almost every color
                imaginable, including red, pink, orange, yellow, white, purple,
                and blue.
              </p>
            </div>
          </div>

          {/* Right Section: Swiper */}
          <div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="pb-16"
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = ".custom-prev";
                swiper.params.navigation.nextEl = ".custom-next";
              }}
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-pink-200 transition-shadow duration-300 h-full flex flex-col justify-between">
                    <img
                      src={testimonial.image}
                      alt="Client"
                      className="w-24 sm:w-32 h-24 sm:h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-500"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      {testimonial.content}
                    </p>
                    <div className="text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star" aria-hidden="true"></i>
                      ))}
                    </div>
                    <h5 className="text-sm text-gray-800 font-medium">
                      {testimonial.client}
                    </h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="flex justify-center md:justify-end gap-4 mt-6">
              <button
                aria-label="Previous"
                className="custom-prev bg-white shadow-md rounded-full p-3 hover:bg-pink-300 hover:text-white transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <button
                aria-label="Next"
                className="custom-next bg-white shadow-md rounded-full p-3 hover:bg-pink-300 hover:text-white transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
