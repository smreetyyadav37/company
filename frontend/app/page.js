// Import necessary modules from Next.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background layer with gradient */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#28282B] via-[#6C3082]"></div>
      
      {/* Meta tags and title for the page */}
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="A modern landing page inspired by Artilect.ai" />
      </Head>

      {/* Header section */}
      <header className="fixed w-full bg-gradient-to-r from-[#28282B] via-[#6C3082] bg-opacity-80 text-white backdrop-blur-lg shadow-md z-50">
        <nav className="container mx-auto flex items-center py-4 px-6">
          {/* Company Name */}
          <div className="text-2xl font-bold mr-auto">
              Nemian
          </div>
          {/* Centered Navigation links */}
          <ul className="flex space-x-8 text-lg font-semibold">
            <li>
              <a 
                href="#about" 
                className="hover:text-[#9678B6] transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="hover:text-[#9678B6] transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hover:text-[#9678B6] transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="text-center py-32">
          <div className="container mx-auto">
            <h1 className="text-6xl font-extrabold mb-6">Welcome to Nemian</h1>
            <p className="text-2xl font-light">We provide the best AI-ML services to elevate your business.</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-center text-white mb-12">About Us</h2>
              <p className="text-lg text-center text-gray-300">
                We are a leading AI and ML services company that focuses on providing scalable and efficient solutions for businesses
                looking to integrate cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Service 1 */}
                <div className="text-center p-6 bg-[#28282B] shadow-lg rounded">
                  <h3 className="text-2xl font-bold mb-4 text-[#6C3082]">Service One</h3>
                  <p className="text-gray-400">
                    We offer innovative AI solutions that streamline your business processes and provide valuable insights.
                  </p>
                </div>
                {/* Service 2 */}
                <div className="text-center p-6 bg-[#28282B] shadow-lg rounded">
                  <h3 className="text-2xl font-bold mb-4 text-[#6C3082]">Service Two</h3>
                  <p className="text-gray-400">
                    Our machine learning models are tailored to meet your specific business needs, ensuring accuracy and efficiency.
                  </p>
                </div>
                {/* Service 3 */}
                <div className="text-center p-6 bg-[#28282B] shadow-lg rounded">
                  <h3 className="text-2xl font-bold mb-4 text-[#6C3082]">Service Three</h3>
                  <p className="text-gray-400">
                    We provide expert consulting services to help your team understand and implement AI and ML technologies effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Us</h2>
              <form className="max-w-lg mx-auto">
                <div className="mb-6">
                  <input
                    type="text"
                    className="w-full p-4 text-black border border-gray-300 rounded"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    className="w-full p-4 text-black border border-gray-300 rounded"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="w-full p-4 text-black border border-gray-300 rounded"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-[#6C3082] text-white font-bold rounded hover:bg-[#9678B6] transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#28282B] via-[#6C3082] text-white text-center py-4">
        <p>&copy; 2024 Nemian. All rights reserved.</p>
      </footer>
    </div>
  );
}


