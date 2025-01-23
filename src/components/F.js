import React, { useState } from 'react';
import { BsPlus, BsQuote } from 'react-icons/bs';

const F = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    { question: "What do I get exactly?", answer: "..." },
    { question: "What are the ShipFast Leaderboards?", answer: "..." },
    { question: "What are the ShipFast Discounts?", answer: "..." },
    { question: "Javascript or Typescript?", answer: "..." },
    { question: "/app router or /pages router?", answer: "..." },
    { question: "My tech stack is different, can I still use it?", answer: "..." },
    { question: "Is it a website template?", answer: "..." },
    { question: "How is ShipFast better than other boilerplates?", answer: "..." },
    { question: "Are there any other costs associated?", answer: "..." },
    { question: "How often is ShipFast updated?", answer: "..." },
    { question: "Can I get a refund?", answer: "..." },
    { question: "Can I use PayPal?", answer: "..." }
  ];

  return (
    
    <div className="min-h-screen bg-zinc-900">
      
      <div className="max-w-4xl mx-auto py-16">
        
        <div className="mb-16">
          <div className="flex justify-start mb-4">
            <BsQuote className="text-4xl text-green-500" />
          </div>
          <p className="text-white text-xl mb-4">
            I was able to launch my project in just one day! I <br/>made 170$, already.
          </p>
          <div className="flex items-center gap-2">
            <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNl8zZF9pbGx1c3RyYXRpb25fb2ZfYV9ib3lfc2l0dGluZ19vbl90aGVfZmxvb18zMjc1NTFkMC1mMzRiLTQ3NzItYjg4YS1hOGM5Yzg2ODFiMzFfMS5qcGc.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
            <span className="text-white">Mateus De Nardo</span>
            <span className="bg-green-500/20 text-green-500 text-sm px-2 py-1 rounded">Built a SaaS</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between">
  <div className="flex-1 md:pr-8">
    <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
    <p className="mt-4 text-gray-400">
      Have another question? Contact me on{' '}
      <a href="#" className="underline hover:text-white">Twitter</a> or by{' '}
      <a href="#" className="underline hover:text-white">email</a>.
    </p>
  </div>

  <div className="flex-10 space-y-4">
    {faqItems.map((item, index) => (
      <div key={index} className="border-t border-zinc-800">
        <button
          onClick={() => setOpenItem(openItem === index ? null : index)}
          className="w-full py-4 flex justify-between items-center text-white hover:text-gray-300"
        >
          {item.question}
          <BsPlus 
            className={`w-6 h-6 transform transition-transform ${
              openItem === index ? 'rotate-45' : ''
            }`}
          />
        </button>
        {openItem === index && (
          <div className="pb-4 text-gray-400">
            {item.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>


        
      </div>
      
    </div>
  );
};

export default F;
