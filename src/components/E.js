import React from "react";
import { FaCrown } from "react-icons/fa";

const E = () => {
  return (
<div className="bg-gray-700 text-white min-h-screen flex items-center justify-center"> 
<div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image Section */}
          <div className="bg-yellow-100 rounded-lg p-6 flex flex-col items-center">
            <FaCrown className="text-yellow-500 text-6xl" />
            <h1 className="text-yellow-600 text-3xl font-bold mt-4">2023</h1>
            <p className="text-yellow-600 text-xl">Maker of the Year</p>
          </div>

          {/* Text Section */}
          <div className="text-left">
            <h2 className="text-2xl font-bold">Hey, it's Marc 👋</h2>
            <p className="mt-4 text-gray-300">
              In 2018, I believed I was Mark Zuckerberg, built a startup for 1 year, and got 0
              users...
            </p>
            <p className="mt-4 text-gray-300">
              A few years after my burnout, I restarted the journey differently: I shipped like a
              madman—<span className="font-bold text-white">16 startups in 2 years</span>. Now
              I'm happy and earn <span className="font-bold text-white">$45,000 a month</span>.
            </p>
            <p className="mt-4 text-gray-300">
              I realized I was doing the same thing over and over: set up DNS records, listen to
              Stripe webhooks, design pricing sections... So I built ShipFast for 3 reasons:
            </p>
            <ol className="list-decimal list-inside mt-4 text-gray-300">
              <li>Save time and focus on what matters: building a business</li>
              <li>Avoid headaches like emails ending in spam or handling Stripe subscriptions</li>
              <li>
                Get profitable fast—the more you ship, the more you learn, the more you earn
              </li>
            </ol>
            <p className="mt-4 text-gray-300">
              <span className="text-white font-bold">135,000+ people</span> trust me on Twitter,
              Product Hunt awarded me Maker of the Year 2023, and <span className="text-white font-bold">6187 indie makers</span> are using ShipFast to launch startups quickly, scroll to see what they say.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full aspect-video overflow-hidden sm:rounded-lg">
                    <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/W3Pb3v_GpoE" title="ShipFast tutorial" frameBorder={0} allow="accelerometer; autoplay; clipboard-wri; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
    </div>
    
  );
};

export default E;
