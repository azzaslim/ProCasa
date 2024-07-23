'use client';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect, useState } from 'react';

const Example: React.FC = () => {
  const paragraphe = [
    ', our mission is to provide exceptional real estate services that exceed our clients expectations. We are dedicated to helping you find the perfect home, whether you re buying, selling, or renting. Our team of experienced professionals is committed to making the process as smooth and stress-free as possible.',
    ' ProCasa Realty is a leading real estate agency with a passion for helping people achieve their property goals. With years of experience in the industry, we have built a reputation for trust, integrity, and excellence. Our agents are knowledgeable, approachable, and always ready to go the extra mile to ensure your satisfaction.',
    ' a wide range of real estate services tailored to meet the unique needs of our clients. From property listings and market analysis to personalized home search assistance and negotiation support, we are here to guide you every step of the way. Our comprehensive services are designed to make your real estate journey seamless and enjoyable.',
    ' Choosing ProCasa Realty means choosing a partner who is dedicated to your success. We pride ourselves on our deep understanding of the real estate market and our commitment to delivering outstanding results. Our personalized approach ensures that we understand your needs and work tirelessly to meet them. Trust us to be your guide in the world of real estate.',
    ' Our vision is to be the most trusted and respected real estate agency in the region. We aim to set the standard for excellence in the industry by providing unparalleled service, building lasting relationships with our clients, and contributing positively to our community. At ProCasa Realty, your dreams are our mission.'
  ];
  const title = ['Our Mission At ProCasa Realty','Who We Are','What We Do We offer','Why Choose Us','Our Vision'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphe.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paragraphe.length]);

  return (
    <div>
      <Navbar />

      <div className="relative overflow-hidden bg-white mt-36">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">

            {title.map((text, index) => (
            <h1 key={index}
                    className={` absolute text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                                        {text}

             </h1>
 ))}
 <br /><br /><br />
              <div className="relative h-32 mt-4">
                {paragraphe.map((text, index) => (
                  <p
                    key={index}
                    className={`absolute left-0 right-0 text-center font-bold text-xl text-gray-500 transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="../assets/img/about2.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="../assets/img/about.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="../assets/img/cle.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="../assets/img/house2.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="../assets/img/image3.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="../assets/img/image.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="../assets/img/image3.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

<br /><br /><br />
<div>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                  View offers
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Example;
