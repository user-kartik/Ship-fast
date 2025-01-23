import React from 'react';
import { 
  BsLightningFill, 
  BsTrophy,
  BsGift,
  BsStar,
  BsStarFill 
} from 'react-icons/bs';

const A = () => {
  const profiles = Array(5).fill('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNl8zZF9pbGx1c3RyYXRpb25fb2ZfYV9ib3lfc2l0dGluZ19vbl90aGVfZmxvb18zMjc1NTFkMC1mMzRiLTQ3NzItYjg4YS1hOGM5Yzg2ODFiMzFfMS5qcGc.jpg');

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <nav className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-2">
          <BsLightningFill className="text-yellow-400 w-8 h-8" />
          <span className="text-xl font-semibold">ShipFast</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white">Demo</a>
          <a href="#" className="text-gray-300 hover:text-white">Wall of love</a>
        </div>

        <button className="bg-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2">
          Press <span className="bg-zinc-700 px-2 py-1 rounded">L</span> to see the Leaderboards
        </button>
      </nav>

      <div className="flex justify-between items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <BsTrophy className="text-gray-400 w-4 h-4" />
            <span className="text-gray-400">Product of the day</span>
            <span className="text-gray-400 font-semibold">2nd</span>
            <BsTrophy className="text-gray-400 w-4 h-4" />
          </div>

          <h1 className="text-6xl font-bold mb-6">
            Ship your startup<br />
            in days, <span className="bg-zinc-200 text-zinc-900 px-2 leading-tight">not weeks</span>
          </h1>

          <p className="text-gray-400 text-xl mb-8">
            The NextJS boilerplate with all you need to build your SaaS, AI
            tool, or any other web app and make your first $ online fast.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mb-4">
            <BsLightningFill className="w-5 h-5" /> Get ShipFast
          </button>

          <div className="flex items-center gap-2 text-green-500 mb-8">
            <BsGift className="w-4 h-4" />
            <span>$100 off for the first 6200 customers (13 left)</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex">
              {profiles.map((profile, i) => (
                <img
                  key={i}
                  src={profile}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-zinc-900"
                  style={{ marginLeft: i > 0 ? '-8px' : '0' }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <BsStarFill key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">6187</span>
              <span className="text-gray-400">makers ship faster</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-zinc-900/50 rounded-full" />
          
          <div className="flex flex-col gap-8">
            <img 
              src='https://shipfa.st/_next/static/media/demo.a9a3174c.png' 
              alt="Demo"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          + all the boring stuff (SEO tags,<br />
          API calls, customer support)
        </div>
      </div>
    </div>
  );
};

export default A;
