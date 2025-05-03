

import '../App.css'

const cardData = [

    {

        title: "Web Projects.",
        description: "We craft responsive, high-performance websites that align with your brand and deliver seamless user experiences across all devices.",

    },

    {

        title: "Graphic Design.",

        description:

            "From logos to full branding kits, we create visually compelling designs that communicate your message and capture your audience’s attention.",

    },

    {

        title: "UX/UI Design.",

        description:

            "Our user-centric approach ensures intuitive, engaging interfaces that enhance usability and turn users into loyal customers.",

    },

];



const Service = () => {

    return (

        <div className="min-h-screen w-full bg-black text-white px-40 py-46">

            {/* SERVICE Heading */}

            <div className="flex items-center mb-16">

                <h1 className="text-5xl font-bold mr-6">SERVICE</h1>

                <hr className="flex-grow border-t border-white" />

            </div>



            {/* Cards Section */}

            <div className="flex justify-between space-x-12 p-5 relative left-20">

                {cardData.map((card, index) => (

                    <div key={index} className="w-1/3">

                        <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>

                        <p className="text-sm leading-relaxed mb-6 text-gray-300">

                            {card.description}

                        </p>

                        <button className="text-white font-medium hover:text-orange-500 transition duration-300">

                            Know More

                        </button>

                    </div>

                ))}

            </div>



            {/* Typewriter Text */}

            <div className="w-full mt-30">

                <h3 className="typewriter-text">

                    Design, develop, deliver — we do it all beautifully.

                </h3>

            </div>

        </div>

    );

};



export default Service;
