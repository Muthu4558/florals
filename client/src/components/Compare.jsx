import { Flower2, Sparkles, MoveRight } from "lucide-react";
import Topright from "../assets/Background/bg-3.png";
import Bottomleft from "../assets/Background/bg-4.png";

const Compare = () => {
  return (
    <div className="relative w-screen h-screen bg-[#f1ecef] overflow-hidden">
      {/* Top-right Decoration */}
      <img
        src={Topright}
        alt="Top Right Decoration"
        className="absolute top-0 right-0 w-32 md:w-48 lg:w-80 pointer-events-none"
      />

      {/* Bottom-left Decoration */}
      <img
        src={Bottomleft}
        alt="Bottom Left Decoration"
        className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-64 pointer-events-none"
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center h-full gap-10 px-6 md:px-12 relative z-10">
        {/* Card 1 */}
        <div className="bg-pink-50 rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md">
          <div className="flex items-center mb-4 gap-3">
            <Flower2 className="w-10 h-10 text-pink-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 leading-tight">
              The Playful Side <br />
              <span className="text-xl md:text-2xl">of Flowers</span>
            </h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
            They often have prominent stamens that add to their striking appearance.
            Lilies are known for their exquisite fragrance and are often associated with purity, beauty, and spirituality.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-pink-600 font-semibold text-lg hover:underline"
          >
            Explore <MoveRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-50 rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md">
          <div className="flex items-center mb-4 gap-3">
            <Sparkles className="w-10 h-10 text-pink-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 leading-tight">
              The Bold Elegance <br />
              <span className="text-xl md:text-2xl">of Lilies</span>
            </h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
            With large, trumpet-shaped blooms, lilies are a bold presence in any bouquet.
            They are often seen in ceremonial arrangements and symbolize refined grace.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-pink-600 font-semibold text-lg hover:underline"
          >
            Explore <MoveRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Compare;