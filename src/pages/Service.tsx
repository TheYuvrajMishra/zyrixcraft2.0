
import "../App.css";
import Paragraph from "../components/Paragraph"; // adjust path as needed

interface Card {
  title: string;
  description: string;
}

const cardData: Card[] = [
  {
    title: "Web Projects.",
    description:
      "We craft responsive, high-performance websites that align with your brand and deliver seamless user experiences across all devices.",
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

const Service: React.FC = () => {
  const text = "Design, develop, deliver — we do it all beautifully.";

  return (
    <div
      id="service"
      className="min-h-screen w-full bg-black text-white px-40 py-15"
    >
      {/* SERVICE Heading */}
      <div className="flex items-center mb-16">
        <h1 className="text-5xl font-bold mr-6">
          OUR <span className="text-orange-600">SERVICE</span>
        </h1>
        <hr className="flex-grow border-t border-white" />
      </div>

      {/* Cards Section */}
      <div className="flex justify-between space-x-12 p-5 relative ">
        {cardData.map((card, index) => (
          <div key={index} className="w-1/3">
            <h2 className="text-3xl font-semibold mb-4">{card.title}</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Animated Text using Paragraph component */}
      <div className="mt-24">
        <Paragraph text={text} />
      </div>
    </div>
  );
};

export default Service;
