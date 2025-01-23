import React from 'react';
import { 
  BsLightningFill, 
  BsTrophy,
  BsGift,
  BsStarFill,
  BsArrowDown,
  BsCloudRain
} from 'react-icons/bs';
import { FaYCombinator, FaProductHunt, FaReddit } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const B = () => {
  const profiles = Array(5).fill('/api/placeholder/40/40');

  const timeBreakdown = [
    { time: '4 hrs', task: 'to set up emails' },
    { time: '6 hrs', task: 'designing a landing page' },
    { time: '4 hrs', task: 'to handle Stripe webhooks' },
    { time: '2 hrs', task: 'for SEO tags' },
    { time: '1 hr', task: 'applying for Google OAuth' },
    { time: '3 hrs', task: 'for DNS records' },
    { time: '2 hrs', task: 'for protected API routes' },
    { time: '∞ hrs', task: 'overthinking...' },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="flex justify-center items-center gap-8 mb-12">
        <span className="text-gray-400">Featured on</span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaYCombinator className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Hacker News</span>
          </div>
          <div className="flex items-center gap-2">
            <FaProductHunt className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Product Hunt</span>
          </div>
          <div className="flex items-center gap-2">
            <RiTwitterXFill className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            <FaReddit className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">reddit</span>
          </div>
        </div>
       
      </div>

      
      <div className="flex flex-col items-center mt-24 mb-16">
        <div className="bg-zinc-800/50 p-12 rounded-lg max-w-lg">
          {timeBreakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 mb-2">
              <span className="text-red-400">{item.time}</span>
              <span className="text-gray-400">{item.task}</span>
            </div>
          ))}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-red-400 font-bold">= 22+ hours</span>
            <span className="text-gray-400">of headaches</span>
            <BsCloudRain className="text-gray-400" />
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-8 text-gray-400">
          <BsArrowDown className="mb-2" />
          <span>There's an easier way</span>
        </div>
      </div>

      <div className="text-center text-green-500 font-mono mt-8">
        const launch_time = "03:41 PM";
      </div>
    </div>
  );
};

export default B;