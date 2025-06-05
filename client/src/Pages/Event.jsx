import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bg from '../assets/All1.png';
import Bg1 from '../assets/event/bg-1.jpg';
import Bg2 from '../assets/event/bg-2.jpg';
import Bg3 from '../assets/event/bg-3.jpg';

const events = [
    {
        title: 'Birthday Parties',
        bg: Bg1,
        link: '/event/birthday',
        description: 'Celebrate birthdays in unforgettable style with custom themes, décor, and fun activities that bring joy and smiles.',
    },
    {
        title: 'Wedding Planner',
        bg: Bg2,
        link: '/event/wedding',
        description: 'Turn your dream wedding into reality with elegant décor, perfect coordination, and magical moments to cherish forever.',
    },
    {
        title: 'Corporate Events',
        bg: Bg3,
        link: '/event/corporate',
        description: 'Host professional yet stylish corporate events, product launches, or team parties with seamless organization and impact.',
    },
];

const Event = () => {
    return (
        <>
            <Header />
            <div className="mt-16 text-center">
                {/* Hero Section */}
                <div
                    className="w-full h-60 bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${Bg})` }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 drop-shadow-xl">
                        Events That We Organize!
                    </h1>
                </div>

                {/* Event Sections */}
                <div className="px-6 md:px-20 py-16 space-y-20">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${
                                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            } items-center gap-10 md:gap-20 animate-fadeInUp`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-500">
                                <img src={event.bg} alt={event.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
                                    {event.title}
                                </h2>
                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                    {event.description}
                                </p>
                                <Link
                                    to={event.link}
                                    className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 transition"
                                >
                                    Explore {event.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Event;
