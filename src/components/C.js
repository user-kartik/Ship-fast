import React from 'react';
import { HiOutlineCheck } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const C = () => {
  const plans = [
    {
      title: "Starter",
      price: 199,
      originalPrice: 299,
      features: [
        "NextJS boilerplate",
        "SEO & Blog",
        "Mailgun emails",
        "Stripe / Lemon Squeezy",
        "MongoDB / Supabase",
        "Google Oauth & Magic Links",
        "Components & animations",
        "ChatGPT prompts for terms & privacy",
      ],
      missingFeatures: [
        "Discord community & Leaderboard",
        "$1,210 worth of discounts",
        "Lifetime updates",
      ],
      buttonText: "Get ShipFast",
    },
    {
      title: "All-in",
      price: 249,
      originalPrice: 349,
      features: [
        "NextJS boilerplate",
        "SEO & Blog",
        "Mailgun emails",
        "Stripe / Lemon Squeezy",
        "MongoDB / Supabase",
        "Google Oauth & Magic Links",
        "Components & animations",
        "ChatGPT prompts for terms & privacy",
        "Discord community & Leaderboard",
        "$1,210 worth of discounts",
        "Lifetime updates (Updated 4 days ago)",
      ],
      buttonText: "Get ShipFast",
    },
    {
      title: "ShipFast + CodeFast",
      price: 299,
      originalPrice: 648,
      isBundle: true,
      features: [
        "Everything in All-in",
        "CodeFast ($299 value)",
        "12 hours of content",
        "Build a SaaS from 0",
        "Entrepreneur mindset",
      ],
      buttonText: "Get ShipFast + CodeFast",
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Save hours of repetitive code, ship fast, get profitable!
        </h2>
        <p className="text-green-500 text-lg">
          $100 off for the first 6200 customers (13 left)
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-zinc-900 text-white rounded-lg p-6 w-80 ${
              plan.isBundle ? "border-2 border-green-500" : ""
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <div className="text-center mb-6">
              <p className="text-gray-500 line-through">${plan.originalPrice}</p>
              <p className="text-3xl font-bold">${plan.price} USD</p>
            </div>
            <ul className="mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 mb-2">
                  <HiOutlineCheck className="text-green-500" size={20} />
                  {feature}
                </li>
              ))}
              {plan.missingFeatures &&
                plan.missingFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 mb-2">
                    <MdClose className="text-red-500" size={20} />
                    <span className="line-through text-gray-500">{feature}</span>
                  </li>
                ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-semibold ${
                plan.isBundle ? "bg-green-500 text-black" : "bg-yellow-500 text-black"
              }`}
            >
              {plan.buttonText}
            </button>
            {plan.isBundle && (
              <p className="mt-4 text-center text-green-400 text-sm">
                Pay once. Build unlimited projects!
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default C;
