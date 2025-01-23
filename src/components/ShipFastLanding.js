// import React from 'react';
// import { RiTailwindCssFill } from "react-icons/ri";
// import { HiOutlineCheck } from 'react-icons/hi';
// import { MdClose } from 'react-icons/md';
// import { FaCheck } from "react-icons/fa";

// import { 
//   BsLightningFill, 
//   BsTrophy,
//   BsGift,
//   BsStar,
//   BsStarFill 
// } from 'react-icons/bs';
// import { 
//     BsArrowDown,
//     BsCloudRain
//   } from 'react-icons/bs';
//   import { FaYCombinator, FaProductHunt, FaReddit } from 'react-icons/fa';
//   import { RiTwitterXFill } from 'react-icons/ri';

// const ShipFastLanding = () => {
//   const profiles = Array(5).fill('/api/placeholder/40/40');

//   const timeBreakdown = [
//     { time: '4 hrs', task: 'to set up emails' },
//     { time: '6 hrs', task: 'designing a landing page' },
//     { time: '4 hrs', task: 'to handle Stripe webhooks' },
//     { time: '2 hrs', task: 'for SEO tags' },
//     { time: '1 hr', task: 'applying for Google OAuth' },
//     { time: '3 hrs', task: 'for DNS records' },
//     { time: '2 hrs', task: 'for protected API routes' },
//     { time: '∞ hrs', task: 'overthinking...' },
//   ];

//   const plans = [
//     {
//       title: "Starter",
//       price: 199,
//       originalPrice: 299,
//       features: [
//         "NextJS boilerplate",
//         "SEO & Blog",
//         "Mailgun emails",
//         "Stripe / Lemon Squeezy",
//         "MongoDB / Supabase",
//         "Google Oauth & Magic Links",
//         "Components & animations",
//         "ChatGPT prompts for terms & privacy",
//       ],
//       missingFeatures: [
//         "Discord community & Leaderboard",
//         "$1,210 worth of discounts",
//         "Lifetime updates",
//       ],
//       buttonText: "Get ShipFast",
//     },
//     {
//       title: "All-in",
//       price: 249,
//       originalPrice: 349,
//       features: [
//         "NextJS boilerplate",
//         "SEO & Blog",
//         "Mailgun emails",
//         "Stripe / Lemon Squeezy",
//         "MongoDB / Supabase",
//         "Google Oauth & Magic Links",
//         "Components & animations",
//         "ChatGPT prompts for terms & privacy",
//         "Discord community & Leaderboard",
//         "$1,210 worth of discounts",
//         "Lifetime updates (Updated 4 days ago)",
//       ],
//       buttonText: "Get ShipFast",
//     },
//     {
//       title: "ShipFast + CodeFast",
//       price: 299,
//       originalPrice: 648,
//       isBundle: true,
//       features: [
//         "Everything in All-in",
//         "CodeFast ($299 value)",
//         "12 hours of content",
//         "Build a SaaS from 0",
//         "Entrepreneur mindset",
//       ],
//       buttonText: "Get ShipFast + CodeFast",
//     },
//   ];
//   return (
//     <div className="min-h-screen bg-zinc-900 text-white p-8">
//       {/* Navigation */}
//       <nav className="flex justify-between items-center mb-24">
//         <div className="flex items-center gap-2">
//           <BsLightningFill className="text-yellow-400 w-8 h-8" />
//           <span className="text-xl font-semibold">ShipFast</span>
//         </div>
        
//         <div className="flex gap-8">
//           <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
//           <a href="#" className="text-gray-300 hover:text-white">Demo</a>
//           <a href="#" className="text-gray-300 hover:text-white">Wall of love</a>
//         </div>

//         <button className="bg-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2">
//           Press <span className="bg-zinc-700 px-2 py-1 rounded">L</span> to see the Leaderboards
//         </button>
//       </nav>

//       {/* Main Content */}
//       <div className="flex justify-between items-center">
//         <div className="max-w-2xl">
//           {/* Product of the day badge */}
//           <div className="flex items-center gap-2 mb-6">
//             <BsTrophy className="text-gray-400 w-4 h-4" />
//             <span className="text-gray-400">Product of the day</span>
//             <span className="text-gray-400 font-semibold">2nd</span>
//             <BsTrophy className="text-gray-400 w-4 h-4" />
//           </div>

//           {/* Hero Text */}
//           <h1 className="text-6xl font-bold mb-6">
//             Ship your startup<br />
//             in days, <span className="bg-zinc-200 text-zinc-900 px-2">not weeks</span>
//           </h1>

//           <p className="text-gray-400 text-xl mb-8">
//             The NextJS boilerplate with all you need to build your SaaS, AI
//             tool, or any other web app and make your first $ online fast.
//           </p>

//           {/* CTA Button */}
//           <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mb-4">
//             <BsLightningFill className="w-5 h-5" /> Get ShipFast
//           </button>

//           {/* Discount Text */}
//           <div className="flex items-center gap-2 text-green-500 mb-8">
//             <BsGift className="w-4 h-4" />
//             <span>$100 off for the first 6200 customers (13 left)</span>
//           </div>

//           {/* Social Proof */}
//           <div className="flex items-center gap-4">
//             <div className="flex">
//               {profiles.map((profile, i) => (
//                 <img
//                   key={i}
//                   src={profile}
//                   alt="User"
//                   className="w-10 h-10 rounded-full border-2 border-zinc-900"
//                   style={{ marginLeft: i > 0 ? '-8px' : '0' }}
//                 />
//               ))}
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="flex">
//                 {Array(5).fill(0).map((_, i) => (
//                   <BsStarFill key={i} className="w-4 h-4 text-yellow-400" />
//                 ))}
//               </div>
//               <span className="font-semibold">6187</span>
//               <span className="text-gray-400">makers ship faster</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Features */}
//         <div className="relative">
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-zinc-900/50 rounded-full" />
//           <div className="relative border border-zinc-800 rounded-full p-16">
//             {/* Tech Stack Logos */}
//             <div className="flex flex-col gap-8">
//               <div className="bg-white text-black px-4 py-2 rounded font-mono">NEXT.js</div>
              
//               <div className="flex items-center gap-2">
//                 <img src="/api/placeholder/40/40" alt="Tailwind" className="w-8 h-8" />
//                 <div>
//                   <div className="font-semibold">Tailwind</div>
//                   <div className="text-sm text-gray-400">• components<br />• animations</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <img src="/api/placeholder/40/40" alt="Mailgun" className="w-8 h-8" />
//                 <div>
//                   <div className="font-semibold">Mailgun</div>
//                   <div className="text-sm text-gray-400">• DNS records<br />• avoid spam</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <img src="/api/placeholder/40/40" alt="NextAuth" className="w-8 h-8" />
//                 <div>
//                   <div className="font-semibold">NextAuth</div>
//                   <div className="text-sm text-gray-400">• Google login<br />• Magic link</div>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="flex items-center gap-2">
//                   <img src="/api/placeholder/40/40" alt="Stripe" className="w-8 h-8" />
//                   <div>
//                     <div className="font-semibold">Stripe</div>
//                     <div className="text-sm text-gray-400">Lemon Squeezy<br />• webhook<br />• checkout</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <img src="/api/placeholder/40/40" alt="MongoDB" className="w-8 h-8" />
//                   <div>
//                     <div className="font-semibold">MongoDB</div>
//                     <div className="text-sm text-gray-400">Supabase</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 text-gray-400 text-sm">
//               + all the boring stuff (SEO tags,<br />
//               API calls, customer support)
//             </div>
//           </div>

//           <div className="min-h-screen bg-zinc-900 text-white p-8">
//       {/* Featured Section */}
//       <div className="flex justify-center items-center gap-8 mb-12">
//         <span className="text-gray-400">Featured on</span>
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <FaYCombinator className="w-5 h-5 text-gray-400" />
//             <span className="text-gray-400">Hacker News</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaProductHunt className="w-5 h-5 text-gray-400" />
//             <span className="text-gray-400">Product Hunt</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <RiTwitterXFill className="w-5 h-5 text-gray-400" />
//           </div>
//           <div className="flex items-center gap-2">
//             <FaReddit className="w-5 h-5 text-gray-400" />
//             <span className="text-gray-400">reddit</span>
//           </div>
//         </div>
        
//       </div>

//       {/* Previous Navigation and Main Content */}
//       {/* [Previous code remains the same until after the main content section] */}
      
//       {/* Time Breakdown Section */}
//       <div className="flex flex-col items-center mt-24 mb-16">
//         <div className="bg-zinc-800/50 p-12 rounded-lg max-w-lg">
//           {timeBreakdown.map((item, index) => (
//             <div key={index} className="flex items-center justify-center gap-2 mb-2">
//               <span className="text-red-400">{item.time}</span>
//               <span className="text-gray-400">{item.task}</span>
//             </div>
//           ))}
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <span className="text-red-400 font-bold">= 22+ hours</span>
//             <span className="text-gray-400">of headaches</span>
//             <BsCloudRain className="text-gray-400" />
//           </div>
//         </div>
        
//         <div className="flex flex-col items-center mt-8 text-gray-400">
//           <BsArrowDown className="mb-2" />
//           <span>There's an easier way</span>
//         </div>
//       </div>

//       {/* Launch Time */}
//       <div className="text-center text-green-500 font-mono mt-8">
//         const launch_time = "03:41 PM";
//       </div>
//     </div>
//           {/* Git Clone Command */}
//           <div className="absolute bottom-0 right-0 transform translate-x-16 translate-y-16">
//             <div className="font-mono text-yellow-400">
//               git clone ship-fast
//             </div>
//           </div>
//           <div className="bg-black text-white py-12 px-6">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4">
//           Save hours of repetitive code, ship fast, get profitable!
//         </h2>
//         <p className="text-green-500 text-lg">
//           $100 off for the first 6200 customers (13 left)
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-center gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`bg-zinc-900 text-white rounded-lg p-6 w-80 ${
//               plan.isBundle ? "border-2 border-green-500" : ""
//             }`}
//           >
//             <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
//             <div className="text-center mb-6">
//               <p className="text-gray-500 line-through">${plan.originalPrice}</p>
//               <p className="text-3xl font-bold">${plan.price} USD</p>
//             </div>
//             <ul className="mb-6">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-center gap-2 mb-2">
//                   <HiOutlineCheck className="text-green-500" size={20} />
//                   {feature}
//                 </li>
//               ))}
//               {plan.missingFeatures &&
//                 plan.missingFeatures.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2 mb-2">
//                     <MdClose className="text-red-500" size={20} />
//                     <span className="line-through text-gray-500">{feature}</span>
//                   </li>
//                 ))}
//             </ul>
//             <button
//               className={`w-full py-3 rounded-lg font-semibold ${
//                 plan.isBundle ? "bg-green-500 text-black" : "bg-yellow-500 text-black"
//               }`}
//             >
//               {plan.buttonText}
//             </button>
//             {plan.isBundle && (
//               <p className="mt-4 text-center text-green-400 text-sm">
//                 Pay once. Build unlimited projects!
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
    
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShipFastLanding;

import React from "react";
import './A.css'

function HI(){
    return(
       
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFBE18" />
        <meta name="msapplication-TileColor" content="#FFBE18" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Launch Your Startup in Days, Not Weeks | ShipFast</title>
        <meta name="application-name" content="ShipFast" />
        <meta name="description" content="The NextJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes." />
        <meta name="keywords" content="ShipFast, NextJS boilerplate, NextJS starter, NextJS template, NextJS, ReactJS" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Launch Your Startup in Days, Not Weeks | ShipFast" />
        <meta property="og:description" content="The NextJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes." />
        <meta property="og:image" content="https://shipfa.st/shareMain.png" />
        <meta property="og:url" content="https://shipfa.st/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@marc_louvion" />
        <link rel="canonical" href="https://shipfa.st/" />
        <link rel="stylesheet" href="A.css" />
        <link rel="preload" as="image" imagesrcset="/logoAndName_transparent.9c74ebc0.png 1x, /logoAndName_transparent.9c74ebc0.png 2x" fetchpriority="high" />
        <link rel="preload" as="image" imagesrcset="/lennard.a8caddd5.jpeg 1x, /lennard.a8caddd5.jpeg 2x" fetchpriority="high" />
        <link rel="preload" as="image" imagesrcset="/wahab.c0419676.jpeg 1x, /wahab.c0419676.jpeg 2x" fetchpriority="high" />
        <link rel="preload" as="image" imagesrcset="/naveen.311d3eb1.jpeg 1x, /naveen.311d3eb1.jpeg 2x" fetchpriority="high" />
        <link rel="preload" as="image" imagesrcset="/artificery.ba1049ef.jpeg 1x, /artificery.ba1049ef.jpeg 2x" fetchpriority="high" />
        <link rel="preload" as="image" imagesrcset="/dunsin.c7d35d82.jpeg 1x, /dunsin.c7d35d82.jpeg 2x" fetchpriority="high" />
        <link rel="preload" as="image" imagesrcset="/demo.a9a3174c.png 1x, /demo.a9a3174c.png 2x" fetchpriority="high" />
        <link rel="preload" as="image" imagesrcset="/logo_transparent.2aa1e5a5.png 1x, /logo_transparent.2aa1e5a5.png 2x" fetchpriority="high" />
        <meta name="next-head-count" content={27} />
        <noscript>
          &lt;img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=625616693072486&amp;amp;ev=PageView&amp;amp;noscript=1"/&gt;
        </noscript>
        <link rel="preload" href="/3685d5506ce59a5b.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" data-next-font />
        <link rel="preload" href="/_next/static/css/8ccc5b838ec1b6c4.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/8ccc5b838ec1b6c4.css" data-n-g />
        <link rel="preload" href="/_next/static/css/1f89a0f3134ca1f5.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/1f89a0f3134ca1f5.css" data-n-p />
        <noscript data-n-css />
        <style id="__jsx-1441967962" dangerouslySetInnerHTML={{__html: "\n            html {\n                font-family: '__Bricolage_Grotesque_1692b2'\n            }\n        " }} />
        <div id="__next">
          <style dangerouslySetInnerHTML={{__html: "\n                #nprogress {\n                    pointer-events: none;\n                }\n\n                #nprogress .bar {\n                    background: #FFBE18;\n                    position: fixed;\n                    z-index: 9999;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 3px;\n                }\n\n                #nprogress .peg {\n                    display: block;\n                    position: absolute;\n                    right: 0px;\n                    width: 100px;\n                    height: 100%;\n                    box-shadow: 0 0 10px #FFBE18, 0 0 5px #FFBE18;\n                    opacity: 1;\n                    -webkit-transform: rotate(3deg) translate(0px, -4px);\n                    -ms-transform: rotate(3deg) translate(0px, -4px);\n                    transform: rotate(3deg) translate(0px, -4px);\n                }\n\n                #nprogress .spinner {\n                    display: block;\n                    position: fixed;\n                    z-index: 1031;\n                    top: 15px;\n                    right: 15px;\n                }\n\n                #nprogress .spinner-icon {\n                    width: 18px;\n                    height: 18px;\n                    box-sizing: border-box;\n                    border: solid 2px transparent;\n                    border-top-color: #FFBE18;\n                    border-left-color: #FFBE18;\n                    border-radius: 50%;\n                    -webkit-animation: nprogresss-spinner 400ms linear infinite;\n                    animation: nprogress-spinner 400ms linear infinite;\n                }\n\n                .nprogress-custom-parent {\n                    overflow: hidden;\n                    position: relative;\n                }\n\n                .nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar {\n                    position: absolute;\n                }\n\n                @-webkit-keyframes nprogress-spinner {\n                    0% {\n                        -webkit-transform: rotate(0deg);\n                    }\n\n                    100% {\n                        -webkit-transform: rotate(360deg);\n                    }\n                }\n\n                @keyframes nprogress-spinner {\n                    0% {\n                        transform: rotate(0deg);\n                    }\n\n                    100% {\n                        transform: rotate(360deg);\n                    }\n                }\n            " }} />
          <header className="max-w-7xl mx-auto px-8 py-5 flex items-center">
            <img alt="ShipFast logo" fetchpriority="high" width={1709} height={512} decoding="async" data-nimg={1} className="w-28 md:w-32" style={{"color":"transparent","background-size":"cover","background-position":"50% 50%","background-repeat":"no-repeat"}} srcSet="/logoAndName_transparent.9c74ebc0.png 1x, /logoAndName_transparent.9c74ebc0.png 2x" src="/logoAndName_transparent.9c74ebc0.png" />
            <div className="w-full flex items-center pl-12 md:pl-24 gap-4 md:gap-12">
              <a className="link link-hover" href="#pricing">Pricing</a>
              <a className="link link-hover hidden sm:inline" href="#demo">Demo</a>
              <a className="link link-hover" href="#testimonials">Wall of love</a>
            </div>
          </header>
          <div className="select-none max-lg:hidden z-[99] fixed top-6 right-6 bg-base-200 hover:bg-base-300 px-4 py-3 rounded-lg shadow-lg border border-base-content/20 hover:border-base-content/40 duration-200 cursor-pointer">
            Press
            {/* */}
            <span className="font-bold bg-base-100 px-2.5 py-1.5 rounded border border-base-content/20 font-mono mx-1 capitalize">l</span>
            {/* */}
            to see the Leaderboards
          </div>
          <main className="min-h-screen">
            <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
              <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <a href="https://www.producthunt.com/posts/shipfast-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-shipfast-2" target="_blank" className=" -mb-4 md:-mb-6 group" title="View ShipFast on Product Hunt">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 37" className="w-32 md:w-36 fill-base-content/80 group-hover:fill-base-content">
                    <path d="M104.953 36.286c-4.22 1.634-5.936.086-5.936-.891 1.495-.126 5.067-.331 5.936.891Zm5.356-1.336a5.486 5.486 0 0 1-7.083-.497c1.44-.4 5.372-.874 7.083.497Zm-7.139-3.176c.16 2.033-1.922 3.176-4.17 3.341.41-2.045 2.509-2.958 4.17-3.341Zm4.032-1.874c.238.869-.089 3.228-3.323 4.164.139-1.593.986-3.667 3.323-4.164Zm6.413 2.365a5.005 5.005 0 0 1-6.385.571c1.296-.668 4.408-1.57 6.385-.571Zm-3.417-4.706c.443.856.537 3.295-2.326 4.763-.166-1.57.465-4.255 2.326-4.763Zm7.083.948a4.389 4.389 0 0 1-2.657 2.217 4.243 4.243 0 0 1-3.39-.44c1.805-1.697 4.685-2.348 6.047-1.777Zm-4.28-4.547c1.284 2.24-.073 4.798-1.485 5.849-.628-2.082-.052-4.351 1.484-5.849Zm6.662-.097c.155 3.479-3.478 3.29-5.184 3.313.537-.731 3.522-3.381 5.184-3.313Zm-4.48-3.25c.675.743 1.688 3.599-.555 5.929-.703-1.685-.858-4.272.554-5.929Zm6.385-1.542c.116 2.81-2.249 4.232-4.53 4.21.686-1.354 2.52-3.964 4.53-4.21Zm-4.785-1.936c1.512.89 1.34 3.764.448 5.26-1.002-1.393-1.75-3.124-.448-5.26Zm4.884-2.633c.748 2.559-1.45 4.29-2.769 4.438.338-1.222.781-3.387 2.77-4.438Zm-4.607-.851c1.667.835 2.457 2.832 1.833 4.632-1.163-.937-2.564-2.919-1.833-4.632Zm4.685-3.096c1.03 3.113-1.335 4.13-2.215 4.38.105-1.324.947-3.963 2.215-4.38Zm-4.619-.817c.676.195 2.603 1.777 2.254 4.61-1.268-.714-2.808-2.074-2.254-4.61Zm3.921-3.9c1.152 3.826-.77 5.397-1.401 5.71-.1-1.21-.222-4.037 1.401-5.71Zm-4.264.096c1.207.337 2.73 2.553 2.658 4.684-1.196-.548-2.985-2.827-2.658-4.684Zm.36-5.934c2.802 2.896 3.195 5.18 2.376 7.996-1.269-1.142-2.282-4.569-2.376-7.996ZM17.047 36.286c4.22 1.634 5.936.086 5.936-.891-1.495-.126-5.067-.331-5.936.891ZM11.69 34.95a5.486 5.486 0 0 0 7.083-.497c-1.44-.4-5.372-.874-7.083.497Zm7.139-3.176c-.16 2.033 1.922 3.176 4.17 3.341-.41-2.045-2.509-2.958-4.17-3.341ZM14.798 29.9c-.238.869.089 3.228 3.323 4.164-.139-1.593-.986-3.667-3.323-4.164Zm-6.413 2.365a5.005 5.005 0 0 0 6.385.571c-1.296-.668-4.408-1.57-6.385-.571Zm3.417-4.706c-.443.856-.537 3.295 2.326 4.763.166-1.57-.465-4.255-2.326-4.763Zm-7.083.948a4.389 4.389 0 0 0 2.657 2.217 4.243 4.243 0 0 0 3.39-.44c-1.805-1.697-4.685-2.348-6.047-1.777Zm4.28-4.547c-1.284 2.24.073 4.798 1.485 5.849.628-2.082.052-4.351-1.484-5.849Zm-6.662-.097c-.155 3.479 3.478 3.29 5.184 3.313-.537-.731-3.522-3.381-5.184-3.313Zm4.48-3.25c-.675.743-1.688 3.599.555 5.929.703-1.685.858-4.272-.554-5.929ZM.433 19.071c-.116 2.81 2.249 4.232 4.53 4.21-.686-1.354-2.52-3.964-4.53-4.21Zm4.785-1.936c-1.512.89-1.34 3.764-.448 5.26 1.002-1.393 1.75-3.124.448-5.26ZM.333 14.502c-.748 2.559 1.45 4.29 2.769 4.438-.338-1.222-.781-3.387-2.77-4.438Zm4.607-.851c-1.667.835-2.457 2.832-1.833 4.632 1.163-.937 2.564-2.919 1.833-4.632ZM.255 10.555c-1.03 3.113 1.335 4.13 2.215 4.38-.105-1.324-.947-3.963-2.215-4.38Zm4.619-.817c-.676.195-2.603 1.777-2.254 4.61 1.268-.714 2.808-2.074 2.254-4.61Zm-3.921-3.9c-1.152 3.826.77 5.397 1.401 5.71.1-1.21.222-4.037-1.401-5.71Zm4.264.096c-1.207.337-2.73 2.553-2.658 4.684 1.196-.548 2.985-2.827 2.658-4.684ZM4.857 0C2.055 2.896 1.662 5.18 2.481 7.996 3.75 6.854 4.763 3.427 4.857 0Zm49.105 35c.162 0 .288-.108.288-.27v-1.782a.284.284 0 0 0-.288-.288h-4.41l3.006-3.06c.486-.504 1.674-1.62 1.674-3.492 0-2.214-1.71-3.852-4.176-3.852-1.962 0-3.204 1.026-3.924 2.07-.09.108-.09.27.036.396l1.242 1.242c.162.144.27.162.414 0 .468-.612 1.026-1.188 1.998-1.188 1.044 0 1.728.648 1.728 1.584 0 1.116-.918 1.962-1.422 2.466l-3.744 3.798c-.09.126-.126.216-.126.342v1.764c0 .162.126.27.288.27h7.416Zm4.572 0c.162 0 .288-.108.288-.27v-4.464c0-1.17.576-1.782 1.53-1.782.972 0 1.476.612 1.476 1.782v4.464c0 .162.126.27.288.27h2.178c.162 0 .288-.108.288-.27v-5.112c0-2.304-1.35-3.654-3.186-3.654-1.26 0-2.07.63-2.574 1.53l-.09-1.026c0-.216-.108-.288-.27-.288h-2.124c-.162 0-.27.108-.27.27v8.28c0 .162.108.27.27.27h2.196Zm11.754.216c1.26 0 2.16-.504 2.754-1.35l.036.864c0 .162.126.27.288.27h1.98c.162 0 .306-.108.306-.27V22.4c0-.162-.126-.27-.288-.27H73.15c-.162 0-.27.108-.27.27v4.662c-.594-.702-1.44-1.098-2.592-1.098-2.448 0-4.14 2.016-4.14 4.626 0 2.628 1.692 4.626 4.14 4.626Zm.594-2.502c-1.17 0-2.052-.828-2.052-2.124 0-1.278.882-2.124 2.052-2.124 1.206 0 2.034.846 2.034 2.106 0 1.296-.828 2.142-2.034 2.142ZM20.72 15c.09 0 .15-.06.15-.15v-2.26h.72c1.69 0 2.49-.93 2.49-2.29 0-1.36-.8-2.3-2.49-2.3h-2.15c-.09 0-.15.06-.15.15v6.7c0 .09.06.15.15.15h1.28Zm.15-5.6h.68c.53 0 1.02.17 1.02.9 0 .72-.49.89-1.02.89h-.68V9.4Zm5.5 5.6c.09 0 .16-.06.16-.15v-2.36c0-.73.38-1.13 1.01-1.13.15 0 .26.02.36.05.14.03.21 0 .21-.13v-.97c0-.09-.02-.15-.09-.2-.08-.06-.21-.13-.45-.13-.57 0-.88.4-1.04.93l-.05-.65c0-.12-.06-.16-.15-.16h-1.18c-.09 0-.15.06-.15.15v4.6c0 .09.06.15.15.15h1.22Zm4.77.12c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17Zm5.49 1.4c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.52 1.39c.71 0 1.16-.35 1.44-.85l.04.57c0 .12.07.16.16.16h1.17c.09 0 .16-.06.16-.15v-4.6c0-.09-.07-.15-.16-.15h-1.21c-.09 0-.16.06-.16.15v2.48c0 .65-.33.99-.85.99-.54 0-.82-.34-.82-.99v-2.48c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v2.84c0 1.28.74 2.03 1.76 2.03Zm6.44 0c.79 0 1.45-.35 1.87-.9.06-.07.05-.15-.01-.21l-.69-.66c-.08-.08-.19-.08-.26-.01-.27.25-.53.38-.86.38-.74 0-1.18-.56-1.18-1.2 0-.63.44-1.14 1.16-1.14.34 0 .6.12.86.38.08.07.19.07.27-.01l.69-.66c.06-.06.07-.15.01-.21-.42-.55-1.08-.9-1.9-.9-1.48 0-2.56 1.1-2.56 2.54 0 1.47 1.1 2.6 2.6 2.6Zm4.77 0c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm5.95 0c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17ZM64.79 15c.09 0 .16-.06.16-.15v-3.57h.98c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.98v-.49c0-.33.11-.57.58-.57.11 0 .25.03.42.06.07.01.13 0 .13-.07V8.02c0-.06-.03-.13-.09-.16-.3-.15-.52-.17-.82-.17-1.09 0-1.76.52-1.76 1.72v.69h-.58c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.58v3.57c0 .09.06.15.15.15h1.23Zm6.08.12c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm4.65-5.14c-.7 0-1.15.35-1.43.85V8c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v6.85c0 .09.06.15.15.15h1.22c.09 0 .16-.06.16-.15v-2.48c0-.65.32-.99.85-.99.54 0 .82.34.82.99v2.48c0 .09.07.15.16.15h1.21c.09 0 .16-.06.16-.15v-2.84c0-1.28-.75-2.03-1.77-2.03Zm5.34 5.14c.69 0 1.32-.2 1.74-.62.09-.08.09-.16.05-.22l-.41-.58c-.06-.07-.1-.09-.18-.05-.41.23-.75.27-1.08.27-.7 0-1.16-.26-1.33-.79h2.82c.45 0 .58-.3.58-.8 0-1.26-.87-2.35-2.37-2.35-1.51 0-2.52 1.11-2.52 2.55 0 1.49 1.09 2.59 2.7 2.59Zm-1.23-3.05c.12-.58.55-.83 1.06-.83s.9.24 1 .83h-2.06Zm8.27 3.05c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.81 1.39c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15v-4.6c0-.09-.07-.15-.16-.15h-1.11c-.09 0-.16.06-.16.15l-.02.47c-.32-.46-.81-.74-1.53-.74-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.96 3.17c.08 0 .15-.04.18-.12l2.6-6.51c.04-.11-.02-.17-.13-.17h-1.24c-.08 0-.16.04-.19.12l-1.08 3-1.08-3c-.03-.08-.11-.12-.19-.12h-1.24c-.11 0-.17.06-.13.17l1.9 4.74-.72 1.71c-.05.12.01.18.13.18h1.19Z" />
                  </svg>
                </a>
                <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
                  <span className="relative">Ship your startup </span>
                  <span className="whitespace-nowrap relative ">
                    <span className="mr-3 sm:mr-4 md:mr-5">in days,</span>
                    <span className=" relative whitespace-nowrap">
                      <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1" />
                      <span className="relative text-neutral">not weeks</span>
                    </span>
                  </span>
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.</p>
                <div className="space-y-4">
                  <button className="btn btn-primary group btn-wide plausible-event-name=Checkout" title="Go to ShipFast Checkout">
                    <svg className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg">
                      <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
                    </svg>
                    Get ShipFast
                  </button>
                  <p className="text-sm md:text-base flex justify-center items-center gap-2 md:text-sm">
                    <svg className="w-5 h-5 fill-accent animate-pulse" viewBox="0 0 161 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_8_2399)">
                        <path d="M13.9653 26.3929C13.3454 26.4007 12.7254 26.3891 12.1055 26.3781C10.9378 26.3371 9.76879 26.3561 8.60306 26.4349C4.24676 26.7979 2.47252 28.6135 2.27301 32.9093C1.97374 39.3929 1.71523 45.9857 1.46519 52.3619L1.1867 59.4195C1.16791 59.8841 1.17111 60.3506 1.19508 60.8093C1.5086 66.7514 3.74024 69.1992 9.72176 70.1639C10.2316 70.2455 10.7491 70.3031 11.2692 70.3581C13.0383 70.5522 14.7127 70.7392 16.2382 71.9142C16.2777 72.7101 16.3245 73.5092 16.3679 74.3083C16.4787 76.2165 16.594 78.1907 16.6115 80.1286C16.6931 89.1674 16.7656 98.2062 16.8291 107.245C16.9042 117.237 16.9858 127.229 17.0739 137.221C17.0748 140.34 17.2411 143.457 17.5721 146.559C18.0754 150.852 19.3133 152.078 23.5912 152.525L25.146 152.69C29.2657 153.198 33.4084 153.499 37.5585 153.589C41.9111 153.609 46.2512 153.619 50.5788 153.62C61.9284 153.62 73.155 153.55 84.092 153.41C89.9673 153.335 95.9359 153.127 101.708 152.925C105.951 152.777 110.339 152.623 114.654 152.525C118.836 152.428 123.092 152.404 127.209 152.38C130.275 152.362 133.446 152.344 136.565 152.296C140.119 152.242 142.072 150.598 142.703 147.119C142.868 146.065 142.953 145 142.954 143.934C142.969 143.427 142.982 142.921 143.015 142.416C143.274 138.382 143.541 134.348 143.817 130.316C144.41 121.479 145.023 112.341 145.517 103.346C145.675 100.462 145.978 97.5183 146.271 94.6752C147.139 86.244 148.036 77.5339 145.415 68.7281C145.632 68.6809 145.841 68.6336 146.042 68.5884C146.744 68.4156 147.456 68.2855 148.174 68.2001C149.057 68.1166 149.968 68.0707 150.848 68.0286C152.152 67.9639 153.501 67.8992 154.825 67.7051C158.372 67.1875 160.401 64.9635 160.693 61.2785C160.74 60.4115 160.722 59.5422 160.639 58.6779L160.629 58.5291C160.051 50.3348 159.463 42.1416 158.874 33.8521L158.372 26.8148C158.361 26.6623 158.298 26.5183 158.193 26.4068C158.089 26.2954 157.949 26.2233 157.798 26.2028C157.404 26.1497 157.025 26.0913 156.657 26.0337C155.871 25.912 155.129 25.7975 154.369 25.7509C151.924 25.6016 149.478 25.4588 147.032 25.3225C142.701 25.0747 138.222 24.8192 133.824 24.5118C133.078 24.4103 132.351 24.2007 131.666 23.8894C131.51 23.8286 131.352 23.7672 131.194 23.7071C131.392 23.2748 131.587 22.8627 131.777 22.4661C132.341 21.3419 132.83 20.1817 133.24 18.9932C133.855 17.1872 134.099 15.2759 133.958 13.3737C133.816 11.4715 133.292 9.61755 132.418 7.92206C131.488 6.22992 130.227 4.742 128.709 3.54746C127.192 2.35292 125.448 1.47617 123.584 0.969338C120.508 0.0439655 117.257 -0.145334 114.094 0.416744C105.064 2.00139 96.9276 6.12259 89.2191 13.0176C88.2474 13.8873 87.2758 14.7957 86.2549 15.7572C85.931 16.0633 85.5942 16.3783 85.2463 16.7032C85.0053 16.3149 84.7767 15.9475 84.5564 15.5936C83.8562 14.4638 83.2512 13.4886 82.6079 12.5232C80.6044 9.44497 77.8584 6.91879 74.6228 5.17648C65.7671 0.465246 56.2985 0.0518385 46.4808 3.94713C43.6793 5.10813 41.2785 7.0614 39.5731 9.56688C35.9624 14.6256 36.1081 18.8347 40.0615 23.6404C40.6022 24.2666 41.1769 24.8624 41.7832 25.4255C41.9724 25.6099 42.1791 25.8137 42.4078 26.035L37.0124 26.1035C28.8563 26.2057 21.4108 26.3036 13.9653 26.3929ZM27.2699 78.0781C27.1857 76.5834 27.051 75.1016 26.9091 73.5403C26.8625 73.0324 26.816 72.516 26.7698 71.9912C26.9453 71.9589 27.1138 71.9265 27.2764 71.8948C27.8156 71.768 28.3657 71.6936 28.9192 71.6703C42.4641 71.6515 56.0103 71.6515 70.0489 71.6528H78.1409C78.1376 75.3741 78.1046 79.0539 78.0729 82.6192C77.9964 91.2594 77.9239 99.4194 78.2432 107.673C78.5626 115.945 79.2622 124.015 80.0026 132.56C80.3025 136.023 80.6121 139.599 80.892 143.165C80.5474 143.265 80.2196 143.368 79.9054 143.467C79.1566 143.75 78.3715 143.924 77.5734 143.984C62.42 144.096 47.4888 144.144 29.7327 144.178H29.7249C29.1714 144.153 28.6218 144.074 28.0841 143.94C27.8801 143.896 27.667 143.852 27.4416 143.81C27.4086 143.469 27.3735 143.133 27.3385 142.8C27.2166 141.822 27.1487 140.838 27.1351 139.852C27.1917 130.616 27.2565 121.38 27.3295 112.144C27.3951 103.234 27.4571 94.3245 27.5154 85.4145C27.5297 82.9278 27.4 80.4295 27.2705 78.0781H27.2699ZM66.5289 35.6309C67.713 35.6212 68.8984 35.5831 70.0806 35.5449C72.3653 35.4725 74.7213 35.3968 76.9801 35.5449C77.7237 40.2083 78.0586 53.6179 77.5838 60.0975C74.2886 60.9096 70.81 60.8552 67.4403 60.7983C65.6408 60.7705 63.7784 60.7394 61.9452 60.8391C56.9515 61.1089 51.8535 61.1465 46.9233 61.1834L42.9532 61.2169C38.3294 61.2602 33.5475 61.3056 28.8661 61.0915C27.5919 61.0332 26.2912 61.0117 25.0338 60.9916C20.9833 60.9269 16.7993 60.8579 12.4618 59.5541L11.3768 36.0255C13.7352 35.7968 16.112 35.8364 18.4615 36.1433C19.6534 36.2559 20.886 36.3732 22.1019 36.4062C25.6594 36.502 29.3512 36.5523 33.3887 36.5588C36.9645 36.5633 40.811 36.5531 44.6821 36.4334C46.5775 36.3745 48.4988 36.26 50.3559 36.15C51.9708 36.0536 53.6407 35.9556 55.2789 35.8909C59.0691 35.7479 62.8533 35.6613 66.5289 35.6315V35.6309ZM50.6169 25.2539L46.5095 19.5205C46.8333 15.9849 48.548 13.9338 52.0512 12.8856C57.2333 11.3326 62.0133 11.3053 66.6533 12.7962C71.9171 14.4882 75.2771 18.0373 77.7684 24.5933L50.6169 25.2539ZM90.3637 23.7886C96.2908 16.8719 104.393 12.1696 113.343 10.4519C116.571 9.78863 120.24 9.57186 123.072 12.9443C123.694 19.2603 123.692 19.4647 121.892 23.5289C121.708 23.5599 121.52 23.5938 121.329 23.6293C120.645 23.7755 119.95 23.8646 119.251 23.8954C110.16 24.0248 100.595 24.1242 90.8139 24.1902C90.7161 24.1163 90.6235 24.0361 90.5367 23.9497C90.4803 23.896 90.422 23.8416 90.3637 23.7892V23.7886ZM87.3438 107.324C87.5692 99.0609 87.5174 90.9682 87.463 82.3998C87.4397 78.8721 87.4176 75.321 87.415 71.7369C94.0223 70.9456 133.713 69.1293 140.326 69.3066C140.197 69.9155 140.063 70.5237 139.929 71.13C139.514 73.0026 139.087 74.9379 138.839 76.8772C137.936 83.9948 137.235 89.9736 136.742 96.0211C136.172 103.036 135.727 110.175 135.297 117.08C135.171 119.109 135.043 121.139 134.914 123.169C134.731 126.049 134.557 128.93 134.392 131.811C134.198 135.111 134.004 138.407 133.789 141.703C133.73 142.066 133.616 142.418 133.448 142.746C133.398 142.864 133.346 142.983 133.295 143.109H85.4814C85.6758 139.563 85.8882 136.042 86.0994 132.539C86.5988 124.263 87.1151 115.705 87.3438 107.325V107.324ZM149.252 32.2648C149.299 32.3329 149.33 32.4108 149.343 32.4926C149.165 40.0276 148.979 47.5629 148.786 55.3179L148.738 57.2726C148.391 57.3412 148.051 57.4128 147.715 57.484C146.745 57.7143 145.759 57.8765 144.766 57.9693C125.98 59.2433 107.1 59.9189 88.638 59.9752C87.6975 54.7748 87.4105 41.4195 88.1198 35.5488C91.9676 34.6914 96.0227 34.602 99.954 34.5134C101.02 34.4901 102.086 34.4669 103.149 34.4281C105.584 34.3421 108.067 34.3276 110.469 34.314C113.07 34.2992 115.76 34.2837 118.406 34.1763C123.742 33.9608 128.973 33.5647 134.308 33.1409C137.82 32.864 141.33 32.5249 144.723 32.1969C146.094 32.0649 147.445 31.9357 148.777 31.8089C148.861 31.8872 148.933 31.9532 148.998 32.0108C149.089 32.0883 149.174 32.1725 149.252 32.2629V32.2648Z" />
                      </g>
                    </svg>
                    <span>
                      <span className="text-accent">$100
                        {/* */}
                        off</span>
                      for the first 
                      {/* */}
                      6200
                      {/* */}
                      customers (
                      {/* */}
                      13
                      {/* */}
                      left)
                    </span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center align-center gap-3">
                  <div className="-space-x-5 avatar-group justy-start">
                    <div className="avatar w-12 h-12">
                      <img alt="Lennard" fetchpriority="high" width={400} height={400} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/lennard.a8caddd5.jpeg 1x, /lennard.a8caddd5.jpeg 2x" src="/lennard.a8caddd5.jpeg" />
                    </div>
                    <div className="avatar w-12 h-12">
                      <img alt="Wahab" fetchpriority="high" width={400} height={400} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/wahab.c0419676.jpeg 1x, /wahab.c0419676.jpeg 2x" src="/wahab.c0419676.jpeg" />
                    </div>
                    <div className="avatar w-12 h-12">
                      <img alt="Naveen" fetchpriority="high" width={400} height={400} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/naveen.311d3eb1.jpeg 1x, /naveen.311d3eb1.jpeg 2x" src="/naveen.311d3eb1.jpeg" />
                    </div>
                    <div className="avatar w-12 h-12">
                      <img alt="Artificery" fetchpriority="high" width={400} height={400} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/artificery.ba1049ef.jpeg 1x, /artificery.ba1049ef.jpeg 2x" src="/artificery.ba1049ef.jpeg" />
                    </div>
                    <div className="avatar w-12 h-12">
                      <img alt="dunsin" fetchpriority="high" width={400} height={400} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/dunsin.c7d35d82.jpeg 1x, /dunsin.c7d35d82.jpeg 2x" src="/dunsin.c7d35d82.jpeg" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center md:items-start gap-1">
                    <div className="rating">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-base text-base-content/80">
                      <span className="font-semibold text-base-content">6187</span>
                      {/* */}
                      maker
                      {/* */}
                      s
                      {/* */}
                      ship faster
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative max-md:-m-4 lg:w-full">
                <img alt="Mongo + Mailgun + Stripe + NextJS + Tailwind + NextAuth = ShipFast" fetchpriority="high" width={1080} height={1080} decoding="async" data-nimg={1} className="w-full max-w-xl ml-auto" style={{"color":"transparent"}} srcSet="/demo.a9a3174c.png 1x, /demo.a9a3174c.png 2x" src="/demo.a9a3174c.png" />
              </div>
            </section>
            <section className="p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <span className="text-xs text-[10px] opacity-50">Featured on</span>
              <a href="https://news.ycombinator.com/item?id=37333976" target="_blank" rel="noreferrer" title="Featured on Hackers New">
                <svg className="w-28 md:w-32 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer" viewBox="0 0 1126 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_176_19)">
                    <g clipPath="url(#clip1_176_19)">
                      <path d="M210 0.458344H0.458252V210H210V0.458344Z" fill="#FF6600" stroke="white" strokeWidth="0.09375" />
                      <path d="M77.6457 46.1674L103 98.9889L128.354 46.1674H150.162L111.906 118.043V164.291H94.0946V118.043L55.8381 46.1674H77.6457Z" fill="white" />
                    </g>
                    <path d="M333.355 151H310.855V112.562H277.633V151H255.133V63.7539H277.633V95.6875H310.855V63.7539H333.355V151ZM394.352 133.832V120.121C391.5 120.355 388.414 120.688 385.094 121.117C381.773 121.508 379.254 121.977 377.535 122.523C375.426 123.188 373.805 124.164 372.672 125.453C371.578 126.703 371.031 128.363 371.031 130.434C371.031 131.801 371.148 132.914 371.383 133.773C371.617 134.633 372.203 135.453 373.141 136.234C374.039 137.016 375.113 137.602 376.363 137.992C377.613 138.344 379.566 138.52 382.223 138.52C384.332 138.52 386.461 138.09 388.609 137.23C390.797 136.371 392.711 135.238 394.352 133.832ZM394.352 144.027C393.219 144.887 391.812 145.922 390.133 147.133C388.453 148.344 386.871 149.301 385.387 150.004C383.316 150.941 381.168 151.625 378.941 152.055C376.715 152.523 374.273 152.758 371.617 152.758C365.367 152.758 360.133 150.824 355.914 146.957C351.695 143.09 349.586 138.148 349.586 132.133C349.586 127.328 350.66 123.402 352.809 120.355C354.957 117.309 358.004 114.906 361.949 113.148C365.855 111.391 370.699 110.141 376.48 109.398C382.262 108.656 388.258 108.109 394.469 107.758V107.406C394.469 103.773 392.984 101.273 390.016 99.9062C387.047 98.5 382.672 97.7969 376.891 97.7969C373.414 97.7969 369.703 98.4219 365.758 99.6719C361.812 100.883 358.98 101.82 357.262 102.484H355.328V86.6055C357.555 86.0195 361.168 85.3359 366.168 84.5547C371.207 83.7344 376.246 83.3242 381.285 83.3242C393.277 83.3242 401.93 85.1797 407.242 88.8906C412.594 92.5625 415.27 98.3438 415.27 106.234V151H394.352V144.027ZM468.941 152.758C463.199 152.758 457.945 152.074 453.18 150.707C448.453 149.34 444.332 147.23 440.816 144.379C437.34 141.527 434.645 137.934 432.73 133.598C430.816 129.262 429.859 124.184 429.859 118.363C429.859 112.23 430.875 106.938 432.906 102.484C434.977 98.0312 437.848 94.3398 441.52 91.4102C445.074 88.6367 449.176 86.6055 453.824 85.3164C458.473 84.0273 463.297 83.3828 468.297 83.3828C472.789 83.3828 476.93 83.8711 480.719 84.8477C484.508 85.8242 488.043 87.0938 491.324 88.6562V106.645H488.336C487.516 105.941 486.52 105.121 485.348 104.184C484.215 103.246 482.809 102.328 481.129 101.43C479.527 100.57 477.77 99.8672 475.855 99.3203C473.941 98.7344 471.715 98.4414 469.176 98.4414C463.551 98.4414 459.215 100.238 456.168 103.832C453.16 107.387 451.656 112.23 451.656 118.363C451.656 124.691 453.199 129.496 456.285 132.777C459.41 136.059 463.824 137.699 469.527 137.699C472.184 137.699 474.566 137.406 476.676 136.82C478.824 136.195 480.602 135.473 482.008 134.652C483.336 133.871 484.508 133.051 485.523 132.191C486.539 131.332 487.477 130.492 488.336 129.672H491.324V147.66C488.004 149.223 484.527 150.453 480.895 151.352C477.301 152.289 473.316 152.758 468.941 152.758ZM575.172 151H550.621L532.164 122.348L526.422 129.32V151H505.328V59.8281H526.422V114.262L549.156 85.1992H573.473L549.801 113.559L575.172 151ZM650.641 121.996H602.359C602.672 127.152 604.625 131.098 608.219 133.832C611.852 136.566 617.184 137.934 624.215 137.934C628.668 137.934 632.984 137.133 637.164 135.531C641.344 133.93 644.645 132.211 647.066 130.375H649.41V147.309C644.645 149.223 640.152 150.609 635.934 151.469C631.715 152.328 627.047 152.758 621.93 152.758C608.727 152.758 598.609 149.789 591.578 143.852C584.547 137.914 581.031 129.457 581.031 118.48C581.031 107.621 584.352 99.0273 590.992 92.6992C597.672 86.332 606.812 83.1484 618.414 83.1484C629.117 83.1484 637.164 85.8633 642.555 91.293C647.945 96.6836 650.641 104.457 650.641 114.613V121.996ZM629.664 109.633C629.547 105.219 628.453 101.898 626.383 99.6719C624.312 97.4453 621.09 96.332 616.715 96.332C612.652 96.332 609.312 97.3867 606.695 99.4961C604.078 101.605 602.613 104.984 602.301 109.633H629.664ZM713.219 105.297H711.344C710.445 104.984 709 104.75 707.008 104.594C705.016 104.438 703.355 104.359 702.027 104.359C699.02 104.359 696.363 104.555 694.059 104.945C691.754 105.336 689.273 106 686.617 106.938V151H665.523V85.1992H686.617V94.8672C691.266 90.8828 695.309 88.2461 698.746 86.957C702.184 85.6289 705.348 84.9648 708.238 84.9648C708.98 84.9648 709.82 84.9844 710.758 85.0234C711.695 85.0625 712.516 85.1211 713.219 85.1992V105.297ZM846.695 151H825.016L787.984 91.1172V151H767.359V63.7539H794.254L826.07 113.734V63.7539H846.695V151ZM932.594 121.996H884.312C884.625 127.152 886.578 131.098 890.172 133.832C893.805 136.566 899.137 137.934 906.168 137.934C910.621 137.934 914.938 137.133 919.117 135.531C923.297 133.93 926.598 132.211 929.02 130.375H931.363V147.309C926.598 149.223 922.105 150.609 917.887 151.469C913.668 152.328 909 152.758 903.883 152.758C890.68 152.758 880.562 149.789 873.531 143.852C866.5 137.914 862.984 129.457 862.984 118.48C862.984 107.621 866.305 99.0273 872.945 92.6992C879.625 86.332 888.766 83.1484 900.367 83.1484C911.07 83.1484 919.117 85.8633 924.508 91.293C929.898 96.6836 932.594 104.457 932.594 114.613V121.996ZM911.617 109.633C911.5 105.219 910.406 101.898 908.336 99.6719C906.266 97.4453 903.043 96.332 898.668 96.332C894.605 96.332 891.266 97.3867 888.648 99.4961C886.031 101.605 884.566 104.984 884.254 109.633H911.617ZM1052.42 85.1992L1032.03 151H1009.64L996.227 106.645L983.043 151H960.367L940.152 85.1992H962.301L973.551 130.551L987.613 85.1992H1006.3L1019.66 130.551L1030.74 85.1992H1052.42ZM1122.2 130.141C1122.2 136.938 1119.16 142.426 1113.06 146.605C1106.97 150.746 1098.63 152.816 1088.04 152.816C1082.18 152.816 1076.87 152.27 1072.11 151.176C1067.34 150.082 1063.51 148.871 1060.62 147.543V130.199H1062.55C1063.61 130.941 1064.82 131.762 1066.19 132.66C1067.59 133.52 1069.57 134.457 1072.11 135.473C1074.29 136.371 1076.77 137.152 1079.55 137.816C1082.32 138.441 1085.29 138.754 1088.45 138.754C1092.59 138.754 1095.66 138.305 1097.65 137.406C1099.64 136.469 1100.64 135.102 1100.64 133.305C1100.64 131.703 1100.05 130.551 1098.88 129.848C1097.71 129.105 1095.48 128.402 1092.2 127.738C1090.64 127.387 1088.51 127.016 1085.82 126.625C1083.16 126.195 1080.74 125.688 1078.55 125.102C1072.57 123.539 1068.14 121.117 1065.25 117.836C1062.36 114.516 1060.91 110.395 1060.91 105.473C1060.91 99.1445 1063.9 93.8906 1069.88 89.7109C1075.89 85.4922 1084.1 83.3828 1094.49 83.3828C1099.41 83.3828 1104.12 83.8906 1108.61 84.9062C1113.14 85.8828 1116.68 86.9375 1119.21 88.0703V104.711H1117.4C1114.27 102.562 1110.7 100.824 1106.68 99.4961C1102.69 98.1289 1098.65 97.4453 1094.55 97.4453C1091.15 97.4453 1088.28 97.9141 1085.93 98.8516C1083.63 99.7891 1082.48 101.117 1082.48 102.836C1082.48 104.398 1083 105.59 1084.06 106.41C1085.11 107.23 1087.59 108.051 1091.5 108.871C1093.65 109.301 1095.95 109.73 1098.41 110.16C1100.91 110.551 1103.41 111.059 1105.91 111.684C1111.46 113.129 1115.56 115.414 1118.22 118.539C1120.88 121.625 1122.2 125.492 1122.2 130.141Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_176_19">
                      <rect width={1126} height={210} fill="white" />
                    </clipPath>
                    <clipPath id="clip1_176_19">
                      <rect width={214} height={214} fill="white" transform="translate(-4 -4)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.producthunt.com/products/shipfast-2" target="_blank" rel="noreferrer" title="Featured on Product Hunt">
                <svg className="w-28 md:w-32 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100  cursor-pointer" viewBox="0 0 935 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_176_3)">
                    <path d="M218.991 109.5C218.991 169.999 170.037 219 109.596 219C49.1552 219 0.200928 169.999 0.200928 109.5C0.200928 49.0012 49.1552 0 109.596 0C170.037 0 218.991 49.0012 218.991 109.5Z" fill="#DA552F" />
                    <path d="M124.182 109.5H93.1866V76.65H124.182C133.207 76.65 140.591 84.0413 140.591 93.075C140.591 102.109 133.207 109.5 124.182 109.5ZM124.182 54.75H71.3076V164.25H93.1866V131.4H124.182C145.332 131.4 162.47 114.245 162.47 93.075C162.47 71.905 145.332 54.75 124.182 54.75Z" fill="white" />
                    <path d="M333.947 96.0863C333.947 90.0638 329.298 86.4137 323.281 86.4137H307.145V105.668H323.281C329.298 105.668 333.947 102.018 333.947 96.0863ZM291.921 146V73H325.469C341.057 73 349.536 83.4938 349.536 96.0863C349.536 108.588 340.966 119.081 325.469 119.081H307.236V146H291.921Z" />
                    <path d="M358.743 146V92.8013H372.418V99.8275C376.155 95.3563 382.537 91.5238 389.009 91.5238V104.846C388.006 104.664 386.821 104.573 385.271 104.573C380.713 104.573 374.697 107.128 372.509 110.504V146.091H358.743V146Z" />
                    <path d="M434.864 118.716C434.864 110.686 430.123 103.66 421.554 103.66C413.076 103.66 408.336 110.686 408.336 118.716C408.336 126.929 413.076 133.864 421.554 133.864C430.123 133.864 434.864 126.838 434.864 118.716ZM394.114 118.716C394.114 104.025 404.416 91.5238 421.463 91.5238C438.693 91.5238 448.994 104.025 448.994 118.716C448.994 133.408 438.693 146 421.463 146C404.416 146 394.114 133.408 394.114 118.716Z" />
                    <path d="M494.94 127.932V109.591C492.661 106.124 487.738 103.66 483.271 103.66C475.431 103.66 470.053 109.774 470.053 118.716C470.053 127.75 475.431 133.864 483.271 133.864C487.738 133.864 492.661 131.4 494.94 127.932ZM494.94 146V138.061C490.838 143.263 485.277 146 478.895 146C465.859 146 455.922 136.145 455.922 118.716C455.922 101.835 465.677 91.5238 478.895 91.5238C485.003 91.5238 490.838 94.0788 494.94 99.4625V73H508.705V146H494.94Z" />
                    <path d="M557.204 146V138.152C553.648 141.985 547.449 146 538.971 146C527.576 146 522.197 139.795 522.197 129.666V92.8012H535.872V124.282C535.872 131.491 539.609 133.864 545.444 133.864C550.731 133.864 554.925 130.944 557.295 127.932V92.8012H570.969V146H557.204Z" />
                    <path d="M581.088 118.716C581.088 102.839 592.666 91.5238 608.619 91.5238C619.285 91.5238 625.667 96.1775 629.131 100.923L620.197 109.318C617.736 105.668 613.998 103.751 609.258 103.751C600.962 103.751 595.219 109.774 595.219 118.808C595.219 127.841 601.053 133.955 609.258 133.955C613.998 133.955 617.736 131.765 620.197 128.298L629.131 136.693C625.667 141.438 619.285 146.183 608.619 146.183C592.666 146 581.088 134.685 581.088 118.716Z" />
                    <path d="M640.891 131.674V104.664H632.322V92.71H640.891V78.5663H654.565V92.8013H665.049V104.755H654.565V128.115C654.565 131.491 656.297 133.955 659.306 133.955C661.311 133.955 663.317 133.225 664.046 132.313L666.964 142.715C664.958 144.54 661.311 146.091 655.568 146.091C645.905 146 640.891 141.073 640.891 131.674Z" />
                    <path d="M752.383 146V114.519H718.562V146H703.337V73H718.562V101.196H752.383V73H767.789V146H752.383Z" />
                    <path d="M816.561 146V138.152C813.006 141.985 806.807 146 798.329 146C786.933 146 781.555 139.795 781.555 129.666V92.8012H795.229V124.282C795.229 131.491 798.967 133.864 804.801 133.864C810.089 133.864 814.282 130.944 816.652 127.932V92.8012H830.327V146H816.561Z" />
                    <path d="M878.734 146V113.333C878.734 106.124 874.996 103.66 869.162 103.66C863.783 103.66 859.681 106.671 857.311 109.683V146H843.636V92.8013H857.311V99.4625C860.684 95.63 867.065 91.5238 875.452 91.5238C886.938 91.5238 892.408 98.0025 892.408 108.04V146H878.734Z" />
                    <path d="M908.817 131.674V104.664H900.248V92.71H908.817V78.5663H922.492V92.8013H932.975V104.755H922.492V128.115C922.492 131.491 924.224 133.955 927.232 133.955C929.238 133.955 931.243 133.225 931.973 132.313L934.89 142.715C932.884 144.54 929.238 146.091 923.494 146.091C913.831 146 908.817 141.073 908.817 131.674Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_176_3">
                      <rect width={935} height={219} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://twitter.com/marc_louvion/status/1697165875957449084?s=20" target="_blank" rel="noreferrer" title="Featured on X.com">
                <svg className="w-8 md:w-9 fill-base-content saturate-0 contrast-50 opacity-80 hover:opacity-100 hover:saturate-100 hover:contrast-100 duration-100 cursor-pointer" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_177_29)">
                    <path d="M126 250.793C195.036 250.793 251 194.875 251 125.897C251 56.9181 195.036 1 126 1C56.9644 1 1 56.9181 1 125.897C1 194.875 56.9644 250.793 126 250.793Z" fill="black" stroke="white" strokeMiterlimit={10} />
                    <path d="M48.9999 53.5352L108.748 133.357L48.6233 198.256H62.1561L114.797 141.435L157.327 198.256H203.377L140.265 113.945L196.23 53.5352H182.697L134.219 105.865L95.0494 53.5352H48.9999ZM68.9004 63.4941H90.0554L183.474 188.297H162.319L68.9004 63.4941Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_177_29">
                      <rect width={252} height={252} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.reddit.com/r/SideProject/comments/1664vqe/i_made_a_code_boilerplate_to_ship_projects_in/" target="_blank" rel="noreferrer" title="Featured on Reddit">
                <svg className="w-[5.5rem] md:w-24 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer" viewBox="0 0 644 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_180_2)">
                    <path d="M627.075 157.051V97.6266H633.795C634.727 97.7109 635.666 97.5995 636.552 97.2996C637.439 96.9997 638.253 96.518 638.942 95.8851C639.631 95.2523 640.181 94.4824 640.556 93.6247C640.931 92.767 641.123 91.8405 641.119 90.9044V90.7028C641.231 89.7931 641.155 88.8701 640.897 87.9906C640.639 87.1111 640.204 86.2937 639.619 85.5886C639.034 84.8834 638.311 84.3055 637.494 83.8902C636.677 83.475 635.784 83.2312 634.87 83.1739H627.075V72.0822C627.084 70.0116 626.315 68.0133 624.922 66.4822C623.528 64.9512 621.611 63.999 619.55 63.8139C617.432 63.6844 615.349 64.395 613.752 65.7918C612.154 67.1885 611.172 69.1588 611.016 71.2755V83.3083H604.297C603.365 83.2241 602.426 83.3354 601.54 83.6353C600.653 83.9352 599.839 84.417 599.15 85.0498C598.46 85.6826 597.911 86.4525 597.536 87.3102C597.161 88.1679 596.969 89.0945 596.973 90.0305V90.5011C596.861 91.4108 596.937 92.3337 597.195 93.2132C597.452 94.0927 597.887 94.9101 598.473 95.6153C599.058 96.3204 599.781 96.8984 600.598 97.3136C601.415 97.7289 602.308 97.9727 603.222 98.03H610.815V157.253C610.815 159.374 611.657 161.409 613.157 162.909C614.656 164.409 616.69 165.252 618.811 165.252C620.921 165.362 622.989 164.632 624.563 163.221C626.137 161.811 627.088 159.834 627.21 157.723C627.235 157.491 627.188 157.256 627.075 157.051Z" fill="#D7DADC" />
                    <path d="M577.554 83.3755C585.422 83.3755 591.799 76.9951 591.799 69.1244C591.799 61.2537 585.422 54.8733 577.554 54.8733C569.687 54.8733 563.31 61.2537 563.31 69.1244C563.31 76.9951 569.687 83.3755 577.554 83.3755Z" fill="#FF4500" />
                    <path d="M585.483 98.5005C585.483 96.379 584.641 94.3443 583.141 92.8441C581.642 91.3439 579.608 90.5011 577.487 90.5011C575.367 90.5011 573.333 91.3439 571.833 92.8441C570.334 94.3443 569.491 96.379 569.491 98.5005V157.051C569.491 159.173 570.334 161.207 571.833 162.708C573.333 164.208 575.367 165.051 577.487 165.051C579.608 165.051 581.642 164.208 583.141 162.708C584.641 161.207 585.483 159.173 585.483 157.051V98.5005Z" fill="#D7DADC" />
                    <path d="M467.223 53.9994C467.223 51.8779 466.381 49.8432 464.881 48.343C463.382 46.8428 461.348 46 459.227 46C457.107 46 455.073 46.8428 453.573 48.343C452.074 49.8432 451.232 51.8779 451.232 53.9994V89.7617C448.596 87.1123 445.451 85.0254 441.986 83.6273C438.521 82.2292 434.809 81.5489 431.074 81.6278C410.244 81.6278 392.841 100.786 392.841 124.314C392.841 147.842 409.706 167 430.805 167C434.654 167.094 438.483 166.411 442.062 164.99C445.641 163.569 448.897 161.441 451.635 158.732C451.92 159.74 452.403 160.682 453.057 161.501C453.711 162.32 454.522 163 455.442 163.501C456.362 164.002 457.373 164.314 458.416 164.418C459.458 164.523 460.511 164.418 461.512 164.109C463.062 163.643 464.436 162.72 465.455 161.461C466.474 160.202 467.09 158.665 467.223 157.051V53.9994ZM430.738 151.136C418.441 151.136 408.43 139.237 408.43 124.247C408.43 109.256 418.374 97.3578 430.738 97.3578C443.101 97.3578 452.979 109.323 452.979 124.247C452.979 139.17 443.101 150.799 430.805 150.799L430.738 151.136Z" fill="#D7DADC" />
                    <path d="M550.812 53.9994C550.812 51.8779 549.969 49.8432 548.47 48.343C546.97 46.8428 544.936 46 542.816 46C541.769 46 540.732 46.2073 539.766 46.6102C538.799 47.013 537.922 47.6033 537.185 48.347C536.448 49.0907 535.865 49.9731 535.471 50.9433C535.076 51.9134 534.878 52.9521 534.887 53.9994V89.7617C532.242 87.1248 529.095 85.0461 525.633 83.6489C522.17 82.2517 518.462 81.5644 514.729 81.6278C493.899 81.6278 476.496 100.786 476.496 124.314C476.496 147.842 493.294 167 514.393 167C518.287 167.131 522.167 166.465 525.795 165.043C529.423 163.622 532.722 161.474 535.492 158.732C535.776 159.74 536.26 160.682 536.914 161.501C537.568 162.32 538.379 163 539.299 163.501C540.219 164.002 541.23 164.314 542.272 164.418C543.315 164.523 544.368 164.418 545.369 164.109C546.924 163.651 548.303 162.73 549.323 161.47C550.343 160.209 550.956 158.668 551.08 157.051L550.812 53.9994ZM514.326 151.136C502.029 151.136 492.085 139.237 492.085 124.247C492.085 109.256 501.962 97.3578 514.326 97.3578C526.689 97.3578 536.567 109.323 536.567 124.247C536.567 139.17 526.689 150.799 514.393 150.799L514.326 151.136Z" fill="#D7DADC" />
                    <path d="M376.043 129.624C378.689 129.809 381.3 128.936 383.303 127.197C385.306 125.458 386.537 122.994 386.726 120.348V119.339C386.673 117.419 386.448 115.506 386.054 113.626C384.429 104.88 379.878 96.9483 373.15 91.1333C366.422 85.3183 357.916 81.9662 349.031 81.6278C328.201 81.6278 310.798 100.786 310.798 124.314C310.798 147.842 327.933 167 349.031 167C354.551 167.205 360.049 166.205 365.143 164.069C370.237 161.933 374.805 158.712 378.529 154.631C379.263 153.828 379.831 152.889 380.201 151.866C380.571 150.843 380.736 149.758 380.686 148.671C380.636 147.585 380.372 146.519 379.91 145.534C379.448 144.55 378.796 143.666 377.991 142.934L377.252 142.329C375.609 141.307 373.671 140.864 371.747 141.071C369.823 141.278 368.024 142.124 366.636 143.472C361.923 148.108 355.637 150.796 349.031 151.001C343.462 150.571 338.221 148.193 334.228 144.284C330.235 140.376 327.745 135.186 327.193 129.624H376.043ZM349.166 97.6267C354.072 97.964 358.739 99.8715 362.478 103.067C366.217 106.263 368.829 110.578 369.928 115.373H328.134C329.236 110.567 331.858 106.245 335.611 103.048C339.363 99.8513 344.046 97.95 348.964 97.6267H349.166Z" fill="#D7DADC" />
                    <path d="M311.604 89.8962C311.613 87.9899 310.94 86.1433 309.709 84.689C308.477 83.2347 306.766 82.2683 304.885 81.9639C299.583 81.0237 294.127 81.4979 289.066 83.3389C284.005 85.18 279.519 88.3227 276.059 92.4506V91.3751C275.876 89.3714 274.951 87.5086 273.465 86.1523C271.979 84.796 270.041 84.044 268.03 84.044C266.018 84.044 264.08 84.796 262.594 86.1523C261.109 87.5086 260.184 89.3714 260 91.3751V157.051C259.975 159.133 260.736 161.148 262.131 162.694C263.526 164.239 265.453 165.201 267.526 165.387C269.625 165.516 271.692 164.813 273.276 163.429C274.861 162.044 275.837 160.091 275.992 157.992C276.025 157.679 276.025 157.364 275.992 157.051V123.44C275.811 120.238 276.264 117.032 277.326 114.005C278.387 110.979 280.037 108.193 282.178 105.806C284.32 103.42 286.912 101.48 289.806 100.1C292.7 98.7192 295.838 97.9244 299.039 97.7612C300.248 97.694 301.459 97.694 302.668 97.7612H304.28C306.265 97.6093 308.12 96.7161 309.477 95.259C310.834 93.802 311.593 91.8876 311.604 89.8962Z" fill="#D7DADC" />
                  </g>
                  <path d="M105.5 211C163.766 211 211 163.766 211 105.5C211 47.234 163.766 0 105.5 0C47.234 0 0 47.234 0 105.5C0 163.766 47.234 211 105.5 211Z" fill="#FF4500" />
                  <path d="M175.869 105.5C175.761 102.53 174.796 99.6555 173.09 97.2221C171.384 94.7887 169.011 92.9006 166.257 91.7855C163.503 90.6703 160.484 90.3757 157.566 90.9372C154.648 91.4987 151.955 92.8923 149.811 94.95C137.809 86.7918 123.702 82.2847 109.193 81.9735L116.051 49.0575L138.628 53.805C138.896 56.2999 140.045 58.6174 141.868 60.3416C143.691 62.0658 146.069 63.0837 148.575 63.2126C151.081 63.3416 153.551 62.5731 155.542 61.0451C157.532 59.5171 158.913 57.3297 159.436 54.8755C159.959 52.4214 159.59 49.8611 158.395 47.6544C157.201 45.4477 155.259 43.7389 152.918 42.835C150.577 41.931 147.991 41.8909 145.623 42.722C143.256 43.553 141.262 45.2008 139.999 47.3695L114.152 42.2C113.729 42.1073 113.292 42.0993 112.866 42.1767C112.441 42.2541 112.034 42.4152 111.671 42.6507C111.308 42.8862 110.995 43.1915 110.751 43.5487C110.507 43.906 110.336 44.3082 110.248 44.732L102.441 81.3405C87.7545 81.5619 73.4529 86.0724 61.2964 94.317C59.67 92.7867 57.7303 91.6284 55.6118 90.9223C53.4933 90.2162 51.2465 89.9792 49.0273 90.2277C46.8081 90.4762 44.6694 91.2043 42.7595 92.3615C40.8496 93.5187 39.2142 95.0773 37.9666 96.9294C36.7189 98.7815 35.8889 100.883 35.5341 103.087C35.1792 105.292 35.308 107.548 35.9115 109.698C36.515 111.848 37.5788 113.841 39.0291 115.539C40.4795 117.237 42.2817 118.599 44.3109 119.531C44.1921 121.077 44.1921 122.628 44.3109 124.173C44.3109 147.805 71.8464 167.006 105.817 167.006C139.788 167.006 167.324 147.805 167.324 124.173C167.443 122.628 167.443 121.077 167.324 119.531C169.927 118.238 172.111 116.233 173.624 113.75C175.136 111.267 175.914 108.407 175.869 105.5ZM70.3694 116.05C70.3694 113.963 70.9881 111.924 72.1474 110.189C73.3066 108.454 74.9543 107.102 76.8821 106.303C78.8098 105.505 80.9311 105.296 82.9776 105.703C85.0241 106.11 86.9039 107.115 88.3794 108.59C89.8548 110.065 90.8596 111.945 91.2667 113.992C91.6737 116.038 91.4648 118.16 90.6663 120.087C89.8678 122.015 88.5156 123.663 86.7807 124.822C85.0457 125.981 83.006 126.6 80.9194 126.6C79.5339 126.6 78.1621 126.327 76.8821 125.797C75.6021 125.267 74.4391 124.49 73.4594 123.51C72.4798 122.53 71.7026 121.367 71.1725 120.087C70.6423 118.807 70.3694 117.435 70.3694 116.05ZM131.665 145.062C124.18 150.703 114.971 153.574 105.606 153.186C96.2421 153.574 87.0329 150.703 79.5479 145.062C79.0993 144.516 78.87 143.822 78.9047 143.116C78.9394 142.409 79.2355 141.741 79.7356 141.241C80.2356 140.741 80.9037 140.445 81.61 140.41C82.3163 140.376 83.0103 140.605 83.5569 141.053C89.8999 145.706 97.6424 148.051 105.501 147.7C113.369 148.128 121.148 145.858 127.55 141.265C128.11 140.719 128.863 140.418 129.645 140.428C130.032 140.433 130.414 140.514 130.77 140.666C131.125 140.819 131.447 141.04 131.718 141.317C131.988 141.594 132.201 141.922 132.344 142.281C132.488 142.641 132.559 143.025 132.554 143.412C132.549 143.799 132.468 144.181 132.316 144.537C132.163 144.892 131.942 145.214 131.665 145.484V145.062ZM129.766 127.022C127.679 127.022 125.64 126.403 123.905 125.244C122.17 124.085 120.817 122.437 120.019 120.509C119.22 118.582 119.012 116.46 119.419 114.414C119.826 112.367 120.83 110.487 122.306 109.012C123.781 107.537 125.661 106.532 127.708 106.125C129.754 105.718 131.875 105.927 133.803 106.725C135.731 107.524 137.379 108.876 138.538 110.611C139.697 112.346 140.316 114.385 140.316 116.472C140.373 117.901 140.139 119.328 139.628 120.664C139.117 122 138.339 123.218 137.343 124.245C136.346 125.271 135.151 126.084 133.83 126.634C132.51 127.184 131.091 127.459 129.66 127.444L129.766 127.022Z" fill="white" />
                  <defs>
                    <clipPath id="clip0_180_2">
                      <rect width={383} height={121} fill="white" transform="translate(260 46)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </section>
            <section className="relative py-24 px-8">
              <div className="relative bg-neutral text-neutral-content rounded-lg p-8 md:p-16 max-w-lg mx-auto text-center text-lg">
                <div className="leading-relaxed space-y-4 md:space-y-6">
                  <div className="text-neutral-content/80 space-y-1">
                    <p>
                      <span className="text-red-400 font-medium">4 hrs</span>
                      to set up emails
                    </p>
                    <p>
                      + <span className="text-red-400 font-medium">6 hrs</span>
                      {/* */}
                      designing a landing page
                    </p>
                    <p>
                      + <span className="text-red-400 font-medium">4 hrs</span>
                      to handle Stripe webhooks
                    </p>
                    <p>
                      + <span className="text-red-400 font-medium">2 hrs</span>
                      for SEO tags
                    </p>
                    <p>
                      + <span className="text-red-400 font-medium">1 hr</span>
                      {/* */}
                      applying for Google Oauth
                    </p>
                    <p>
                      + <span className="text-red-400 font-medium">3 hrs</span>
                      for DNS records
                    </p>
                    <p>
                      + <span className="text-red-400 font-medium">2 hrs</span>
                      for protected API routes
                    </p>
                    <p>
                      + <span className="text-red-400 font-medium">∞ hrs</span>
                      {/* */}
                      overthinking...
                    </p>
                  </div>
                  <div className="text-xl font-semibold flex flex-col md:flex-row items-center justify-center gap-3">
                    <p>
                      = <span className="text-red-400 font-medium">22+ hours</span>
                      {/* */}
                      of headaches
                    </p>
                    <svg className="w-8 h-8 fill-neutral-content shrink-0" viewBox="0 0 154 150">
                      <g clipPath="url(#clip0_8_2918)">
                        <path d="M106.196 29.7328C107.476 28.8795 108.577 28.1164 109.707 27.3977C117.858 22.2126 126.71 21.138 135.917 23.4732C151.578 27.446 157.044 43.7028 152.161 56.1824C150.637 60.081 148.164 63.6849 145.705 67.1253C142.997 70.9156 138.859 72.8301 134.427 74.0109C132.051 74.6436 129.63 75.1096 126.995 75.7036C126.724 76.7242 126.426 77.7789 126.162 78.8429C124.755 84.5333 121.634 89.278 117.877 93.6518C115.055 96.9335 111.257 98.7338 107.151 99.5818C101.558 100.736 95.8973 101.66 90.2233 102.32C75.247 104.063 60.1757 103.771 45.1331 104.057C38.1644 104.292 31.1994 103.488 24.4674 101.672C12.2924 98.2193 4.94677 90.2106 1.95517 78.1373C-0.00242049 70.4929 0.21227 62.4541 2.5753 54.9255C6.52383 42.3022 15.3503 34.1364 27.0489 28.7374C28.9725 27.9224 30.5254 26.4225 31.4064 24.5282C37.939 11.6548 48.2539 3.0142 62.5575 0.785936C76.8419 -1.43971 89.1154 3.46842 98.3993 14.8684C101.369 18.5366 103.66 22.705 105.165 27.1779C105.446 28.0029 105.815 28.7975 106.196 29.7328ZM50.3463 95.8144C53.2637 95.8144 56.1877 95.9542 59.0966 95.7901C71.1993 95.1056 83.2924 94.2281 95.3998 93.6452C99.3293 93.5245 103.191 92.5853 106.737 90.8886C114.986 86.8456 118.859 80.1522 118.157 71.041C117.612 63.9775 113.2 58.5378 106.284 56.8753C97.6425 54.7973 89.7724 56.4289 83.0797 62.483C81.2551 64.133 79.6503 66.0239 77.9347 67.7941C76.1547 69.6318 74.5158 70.0643 72.8723 69.1579C71.2847 68.2824 70.5968 66.4998 71.2971 64.1917C72.3355 60.7788 71.7841 57.5625 70.541 54.3576C69.1004 50.7 67.0533 47.3117 64.4864 44.3343C56.5966 35.0412 42.4592 30.9744 31.459 35.3706C16.8332 41.212 6.45622 53.5513 8.26376 71.5706C9.84947 87.3838 17.5254 92.4907 28.8676 94.9842C29.1958 95.0564 29.5319 95.0984 29.862 95.164C36.642 96.5029 43.4941 96.3231 50.3463 95.8144ZM79.1233 55.1344C79.2959 55.1002 79.4659 55.0502 79.63 54.9857C80.0133 54.7566 80.4071 54.5388 80.7642 54.2736C87.4641 49.2933 95.027 47.3526 103.286 48.0384C114.415 48.9573 122.532 54.5832 125.952 65.5204C126.172 66.2234 126.496 66.8942 126.94 68.0021C129.405 67.0209 131.731 66.2576 133.915 65.1968C141.922 61.3067 145.669 54.7899 145.144 45.9162C144.707 38.5147 140.214 32.9471 132.996 31.2794C124.328 29.2742 116.489 31.012 109.85 37.114C108.04 38.7785 106.449 40.6801 104.721 42.4378C103.084 44.1035 101.481 44.4843 99.9076 43.6665C98.2884 42.8244 97.5356 41.0018 98.2332 38.7401C99.3228 35.2096 98.7636 31.8865 97.3938 28.6008C96.9632 27.5678 96.5136 26.5398 96.0096 25.5415C87.1733 8.04421 66.4593 4.0915 53.303 12.152C48.4799 15.0372 44.2502 18.8141 40.8393 23.2809C40.3847 24.0111 39.984 24.7733 39.6408 25.5621C59.8809 26.3871 72.8756 36.4281 79.1233 55.1344Z" />
                        <path d="M95.939 122.676C96.3426 121.375 96.827 120.103 97.3895 118.863C99.0303 115.827 100.762 112.839 102.5 109.857C102.943 109.096 103.4 108.15 104.107 107.783C105.057 107.296 106.133 107.111 107.192 107.252C108.466 107.469 108.758 108.706 108.73 109.889C108.74 110.446 108.645 111 108.452 111.522C106.786 115.407 105.105 119.284 103.358 123.132C102.995 123.824 102.505 124.441 101.914 124.95C100.767 126.033 99.2581 126.597 97.9552 125.672C97.0114 124.998 96.5553 123.637 95.939 122.676Z" />
                        <path d="M36.9705 111.129C36.5688 112.319 36.3142 113.164 35.9991 113.99C34.7619 117.206 33.4806 120.409 32.2579 123.634C31.0515 126.822 29.0616 128.163 26.8549 127.204C24.9857 126.389 24.4717 124.242 25.7528 121.358C27.2434 118.004 28.9216 114.729 30.5814 111.453C30.913 110.622 31.4692 109.9 32.1877 109.367C33.0744 108.879 34.3875 108.448 35.2172 108.769C36.0231 109.078 36.4474 110.369 36.9705 111.129Z" />
                        <path d="M59.2449 124.396C59.8402 122.81 60.2143 121.526 60.7899 120.338C62.1977 117.433 63.6962 114.57 65.1657 111.694C65.4003 111.19 65.6774 110.707 65.9945 110.25C66.7381 109.261 67.8782 108.694 68.9185 109.288C69.7921 109.892 70.457 110.751 70.8219 111.748C70.9991 112.512 70.919 113.314 70.5941 114.028C69.3957 117.376 68.1841 120.73 66.8169 124.013C66.4087 125.054 65.6837 125.939 64.7443 126.543C63.7814 127.068 62.3001 127.4 61.3661 127.024C60.4321 126.648 59.9189 125.29 59.2449 124.396Z" />
                        <path d="M127.026 127.614C126.877 128.401 126.679 129.176 126.432 129.937C125.325 132.618 124.301 135.347 122.977 137.92C122.268 139.304 121.251 140.506 120.005 141.435C117.998 142.879 115.898 141.737 115.794 139.248C115.726 138.133 115.937 137.02 116.408 136.008C117.998 132.936 119.765 129.953 121.504 126.959C121.745 126.45 122.154 126.039 122.662 125.794C123.581 125.54 124.722 125.221 125.49 125.561C126.228 125.888 126.608 127.015 127.026 127.614Z" />
                        <path d="M48.1399 135.399C46.5706 140.064 45.038 144.239 42.4008 147.869C41.1695 149.563 39.3664 149.823 37.992 148.911C36.7181 148.066 36.3466 146.574 36.9767 144.759C37.1048 144.334 37.2812 143.923 37.502 143.538C39.4618 140.441 41.4162 137.34 43.4305 134.277C44.1426 133.196 45.2297 132.308 46.5023 133.121C47.2938 133.62 47.6897 134.738 48.1399 135.399Z" />
                        <path d="M84.6108 136.308C82.773 139.941 81.1079 143.462 79.2183 146.861C78.8639 147.523 78.2633 148.018 77.5459 148.239C76.8286 148.46 76.0534 148.389 75.3879 148.043C73.8783 147.373 73.8698 145.913 74.1225 144.564C74.3089 143.463 74.6646 142.398 75.1772 141.406C76.461 139.051 77.8249 136.733 79.2872 134.485C80.1017 133.233 81.524 132.693 82.8085 133.484C83.5954 133.969 83.9301 135.185 84.6108 136.308Z" />
                        <path d="M141.948 87.6658C140.242 91.7351 138.791 95.6075 136.982 99.3092C136.817 99.6735 136.576 99.9984 136.275 100.262C135.974 100.525 135.619 100.72 135.235 100.834C134.852 100.948 134.448 100.978 134.053 100.922C133.656 100.865 133.277 100.725 132.94 100.509C132.606 100.348 132.309 100.12 132.067 99.8408C131.824 99.5612 131.64 99.235 131.528 98.8819C131.415 98.5295 131.376 98.1573 131.412 97.7885C131.448 97.4203 131.559 97.0632 131.738 96.739C133.51 93.1344 135.504 89.6309 137.543 86.1654C138.122 85.1809 139.343 84.5337 140.443 85.3122C141.142 85.8077 141.452 86.85 141.948 87.6658Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 inset-x-0 text-center flex gap-1 justify-center items-center text-sm opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clipRule="evenodd" />
                </svg>
                <p className="s">There 's an easier way</p>
              </div>
            </section>
            <section className="py-24" id="features">
              <div className="max-w-3xl mx-auto">
                <div className="bg-base-100 max-md:px-8 max-w-3xl">
                  <p className="text-accent font-medium text-sm font-mono mb-3">const launch_time = "
                    {/* */}
                    Today
                    {/* */}
                    ";</p>
                  <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8">Supercharge your app instantly, launch faster, make $</h2>
                  <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs. ShipFast provides you with the boilerplate code you need to launch, FAST.</div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
                  <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-primary">
                    <span className>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm">Emails</span>
                  </span>
                  <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-base-content/50">
                    <span className>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm">Payments</span>
                  </span>
                  <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-base-content/50">
                    <span className>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm">Login</span>
                  </span>
                  <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-base-content/50">
                    <span className>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm">Database</span>
                  </span>
                  <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-base-content/50">
                    <span className>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm">SEO</span>
                  </span>
                  <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-base-content/50">
                    <span className>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm">Style</span>
                  </span>
                  <span className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 text-base-content/50">
                    <span className>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm">More</span>
                  </span>
                </div>
                <div className="bg-base-200">
                  <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
                    <div className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
                      <p className="font-medium text-base-content text-lg">Emails</p>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] inline shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Send transactional emails
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] inline shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] inline shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Webhook to receive &amp;forward emails
                        </li>
                        <li className="flex items-center gap-2 text-accent font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] inline shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Time saved: 3 hours
                        </li>
                        <li className="flex items-center gap-2 text-accent font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] inline shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Headaches: 0
                        </li>
                      </ul>
                      <div className="pt-3 flex items-center gap-2 text-sm font-semibold">
                        <img alt="Mailgun" loading="lazy" width={250} height={256} decoding="async" data-nimg={1} className="w-8 h-8" style={{"color":"transparent"}} srcSet="/mailgun.459dea11.png 1x, /mailgun.459dea11.png 2x" src="/mailgun.459dea11.png" />
                        <span>
                          with
                          {/* */}
                          <a className="link" href="https://www.mailgun.com/" target="_blank">Mailgun</a>
                        </span>
                      </div>
                    </div>
                    <div className="hidden aspect-square max-md:w-full md:h-[28rem] bg-neutral md:order-first" />
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-base-100" id="demo">
              <div className="py-24 max-md:px-8 max-w-3xl mx-auto">
                <div className="leading-relaxed text-base-content/80 mb-12 max-w-xl mx-auto">
                  <img alt="Marc Lou — Product Hunt Maker of the Year 2023" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} className="w-32 h-32 md:w-52 md:h-52 rounded-lg float-left mr-8 mb-8 object-center object-cover" style={{"color":"transparent","background-size":"cover","background-position":"50% 50%","background-repeat":"no-repeat"}} srcSet="/maker-of-the-year-2023.285fe739.png 1x, /maker-of-the-year-2023.285fe739.png 2x" src="/maker-of-the-year-2023.285fe739.png" />
                  <p className="mb-4 text-base-content md:text-lg font-medium">Hey, it 's Marc 👋</p>
                  <p className="mb-5">In 2018, I believed I was Mark Zuckerberg, built a startup for 1 year, and got 0 users...</p>
                  <p className="mb-5">
                    A few years after my burnout, I restarted the journey differently: I shipped like a madman—<a className="link text-base-content font-medium hover:link-accent whitespace-nowrap" target="_blank" href="https://marclou.com?ref=shipfast_intro">16 startups in 2 years.</a>
                    {/* */}
                    Now I 'm happy and earn $45,000 a month.
                  </p>
                  <p className="mb-5">I realized I was doing the same thing over and over: set up DNS records, listen to Stripe webhooks, design pricing section... So I built ShipFast for 3 reasons:</p>
                  <ul className="list-inside list-decimal space-y-1.5 ml-5 mb-5">
                    <li>
                      <span className="text-base-content font-medium">Save time</span>
                      {/* */}
                      and focus on what matters: building a business
                    </li>
                    <li>
                      <span className="text-base-content font-medium">Avoid headaches</span>
                      {/* */}
                      like emails ending in spam or handling Stripe subscriptions
                    </li>
                    <li>
                      <span className="text-base-content font-medium">Get profitable fast</span>
                      —the more you ship, the more you learn, the more you earn
                    </li>
                  </ul>
                  <p>
                    <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" target="_blank" href="https://twitter.com/marc_louvion">135,000+ people</a>
                    {/* */}
                    trust me on Twitter, Product Hunt awarded me
                    {/* */}
                    <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" target="_blank" href="https://www.producthunt.com/golden-kitty-awards/hall-of-fame#maker-of-the-year">Maker of the Year 2023</a>
                    , and
                    {/* */}
                    <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" href="/#testimonials">6187
                      {/* */}
                      indie makers</a>
                    {/* */}
                    are using ShipFast to launch startups quickly, scroll to see what they say.
                  </p>
                </div>
                <div className="relative max-sm:-mx-8 mb-16">
                  <div className="max-lg:hidden absolute top-1/4 -left-4 -translate-x-full text-sm flex flex-col gap-1 items-center">
                    <p className="text-base-content/80">The code in 3 minutes</p>
                    <svg className="w-12 h-12 fill-base-content/80" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M60.9866 102.011C75.5791 112.188 92.2457 119.614 108.76 118.142C114.825 117.601 120.44 115.34 126.202 113.089C126.708 112.891 126.959 112.318 126.761 111.813C126.564 111.307 125.991 111.055 125.486 111.253C119.899 113.436 114.463 115.655 108.587 116.178C92.3221 117.629 75.9409 110.146 61.6177 100.05C61.6659 99.904 61.7161 99.7581 61.7664 99.6122C62.8717 96.4058 62.1703 91.7303 60.3636 86.8178C57.7429 79.686 52.8573 72.0229 48.4641 67.7902C46.4383 65.8366 44.4768 64.6098 42.8751 64.3519C41.5406 64.1357 40.3951 64.5004 39.5108 65.5345C38.7833 66.3888 38.3673 67.4776 38.2447 68.7539C38.0819 70.4574 38.4477 72.5256 39.2174 74.7761C42.0652 83.1034 50.4316 94.0615 54.9675 97.5779C56.3884 98.6797 57.8334 99.7607 59.3045 100.818C59.0111 101.74 58.7277 102.621 58.38 103.433C57.8696 104.626 57.2244 105.663 56.1352 106.411C54.1255 107.791 51.7158 108.026 49.2519 107.666C45.3068 107.093 41.2271 105.009 38.2186 103.222C21.2968 93.1733 12.9424 75.7346 8.44871 58.2386C3.90274 40.5446 3.30786 22.7699 1.96336 12.2859C1.89302 11.7467 1.39863 11.3638 0.860028 11.4341C0.321425 11.5018 -0.0604183 11.9968 0.00791197 12.5359C1.36045 23.0773 1.9714 40.9432 6.53948 58.7283C11.1598 76.7114 19.8197 94.5877 37.2137 104.918C40.4152 106.817 44.7703 109.005 48.9685 109.617C51.9369 110.047 54.8289 109.698 57.2486 108.036C58.6594 107.067 59.5316 105.749 60.1908 104.21C60.4862 103.519 60.7394 102.78 60.9866 102.011ZM59.9436 98.8516C60.8761 95.976 60.1144 91.8475 58.5147 87.4976C55.9965 80.6445 51.3179 73.2757 47.0975 69.2071C45.6827 67.8449 44.3382 66.8577 43.1504 66.4487C42.2923 66.1518 41.5426 66.1883 41.0101 66.8134C40.3971 67.5323 40.166 68.5143 40.176 69.6604C40.1861 70.981 40.5217 72.5048 41.0824 74.1405C43.8136 82.1266 51.8243 92.6498 56.1734 96.0203C57.4113 96.9788 58.6694 97.9244 59.9436 98.8516Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M127.814 110.052C127.747 110.502 127.522 111.075 127.263 111.677C126.678 113.039 125.846 114.493 125.476 115.196C125.225 115.678 125.41 116.274 125.892 116.527C126.375 116.78 126.97 116.592 127.223 116.11C127.673 115.251 128.774 113.323 129.365 111.727C129.669 110.906 129.832 110.151 129.799 109.606C129.765 109.072 129.548 108.713 129.239 108.458C128.913 108.189 128.409 108.03 127.735 108.051C126.996 108.075 125.941 108.309 124.781 108.395C123.808 108.468 122.745 108.437 121.779 107.952C121.292 107.707 120.699 107.903 120.456 108.39C120.213 108.874 120.408 109.468 120.894 109.71C122.707 110.622 124.765 110.424 126.391 110.19C126.875 110.119 127.476 110.073 127.814 110.052Z" />
                    </svg>
                  </div>
                  <div className="relative w-full aspect-video overflow-hidden sm:rounded-lg">
                    <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/W3Pb3v_GpoE" title="ShipFast tutorial" frameBorder={0} allow="accelerometer; autoplay; clipboard-wri; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                </div>
                <div className="space-y-4 max-w-md mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-accent" viewBox="0 0 35 30" fill="none">
                    <path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z" />
                  </svg>
                  <p className="md:text-lg leading-relaxed">It 's a game changer. Comes with an easy-to-follow tutorial, and saves a ton of time.</p>
                  <div className="flex items-center gap-2">
                    <img alt="Yifan testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/yifan.d4b261ef.jpeg 1x, /yifan.d4b261ef.jpeg 2x" src="/yifan.d4b261ef.jpeg" />
                    <p>Yifan Goh</p>
                    <span className="badge badge-accent badge-outline">Built an AI tool</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-base-200 overflow-hidden" id="pricing">
              <div className="py-24 pb-0 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <p className="font-medium text-primary mb-8">Pricing</p>
                  <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">Save hours of repetitive code, ship fast, get profitable!</h2>
                  <p className="text-sm md:text-base flex justify-center items-center gap-2 ">
                    <svg className="w-5 h-5 fill-accent animate-pulse" viewBox="0 0 161 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_8_2399)">
                        <path d="M13.9653 26.3929C13.3454 26.4007 12.7254 26.3891 12.1055 26.3781C10.9378 26.3371 9.76879 26.3561 8.60306 26.4349C4.24676 26.7979 2.47252 28.6135 2.27301 32.9093C1.97374 39.3929 1.71523 45.9857 1.46519 52.3619L1.1867 59.4195C1.16791 59.8841 1.17111 60.3506 1.19508 60.8093C1.5086 66.7514 3.74024 69.1992 9.72176 70.1639C10.2316 70.2455 10.7491 70.3031 11.2692 70.3581C13.0383 70.5522 14.7127 70.7392 16.2382 71.9142C16.2777 72.7101 16.3245 73.5092 16.3679 74.3083C16.4787 76.2165 16.594 78.1907 16.6115 80.1286C16.6931 89.1674 16.7656 98.2062 16.8291 107.245C16.9042 117.237 16.9858 127.229 17.0739 137.221C17.0748 140.34 17.2411 143.457 17.5721 146.559C18.0754 150.852 19.3133 152.078 23.5912 152.525L25.146 152.69C29.2657 153.198 33.4084 153.499 37.5585 153.589C41.9111 153.609 46.2512 153.619 50.5788 153.62C61.9284 153.62 73.155 153.55 84.092 153.41C89.9673 153.335 95.9359 153.127 101.708 152.925C105.951 152.777 110.339 152.623 114.654 152.525C118.836 152.428 123.092 152.404 127.209 152.38C130.275 152.362 133.446 152.344 136.565 152.296C140.119 152.242 142.072 150.598 142.703 147.119C142.868 146.065 142.953 145 142.954 143.934C142.969 143.427 142.982 142.921 143.015 142.416C143.274 138.382 143.541 134.348 143.817 130.316C144.41 121.479 145.023 112.341 145.517 103.346C145.675 100.462 145.978 97.5183 146.271 94.6752C147.139 86.244 148.036 77.5339 145.415 68.7281C145.632 68.6809 145.841 68.6336 146.042 68.5884C146.744 68.4156 147.456 68.2855 148.174 68.2001C149.057 68.1166 149.968 68.0707 150.848 68.0286C152.152 67.9639 153.501 67.8992 154.825 67.7051C158.372 67.1875 160.401 64.9635 160.693 61.2785C160.74 60.4115 160.722 59.5422 160.639 58.6779L160.629 58.5291C160.051 50.3348 159.463 42.1416 158.874 33.8521L158.372 26.8148C158.361 26.6623 158.298 26.5183 158.193 26.4068C158.089 26.2954 157.949 26.2233 157.798 26.2028C157.404 26.1497 157.025 26.0913 156.657 26.0337C155.871 25.912 155.129 25.7975 154.369 25.7509C151.924 25.6016 149.478 25.4588 147.032 25.3225C142.701 25.0747 138.222 24.8192 133.824 24.5118C133.078 24.4103 132.351 24.2007 131.666 23.8894C131.51 23.8286 131.352 23.7672 131.194 23.7071C131.392 23.2748 131.587 22.8627 131.777 22.4661C132.341 21.3419 132.83 20.1817 133.24 18.9932C133.855 17.1872 134.099 15.2759 133.958 13.3737C133.816 11.4715 133.292 9.61755 132.418 7.92206C131.488 6.22992 130.227 4.742 128.709 3.54746C127.192 2.35292 125.448 1.47617 123.584 0.969338C120.508 0.0439655 117.257 -0.145334 114.094 0.416744C105.064 2.00139 96.9276 6.12259 89.2191 13.0176C88.2474 13.8873 87.2758 14.7957 86.2549 15.7572C85.931 16.0633 85.5942 16.3783 85.2463 16.7032C85.0053 16.3149 84.7767 15.9475 84.5564 15.5936C83.8562 14.4638 83.2512 13.4886 82.6079 12.5232C80.6044 9.44497 77.8584 6.91879 74.6228 5.17648C65.7671 0.465246 56.2985 0.0518385 46.4808 3.94713C43.6793 5.10813 41.2785 7.0614 39.5731 9.56688C35.9624 14.6256 36.1081 18.8347 40.0615 23.6404C40.6022 24.2666 41.1769 24.8624 41.7832 25.4255C41.9724 25.6099 42.1791 25.8137 42.4078 26.035L37.0124 26.1035C28.8563 26.2057 21.4108 26.3036 13.9653 26.3929ZM27.2699 78.0781C27.1857 76.5834 27.051 75.1016 26.9091 73.5403C26.8625 73.0324 26.816 72.516 26.7698 71.9912C26.9453 71.9589 27.1138 71.9265 27.2764 71.8948C27.8156 71.768 28.3657 71.6936 28.9192 71.6703C42.4641 71.6515 56.0103 71.6515 70.0489 71.6528H78.1409C78.1376 75.3741 78.1046 79.0539 78.0729 82.6192C77.9964 91.2594 77.9239 99.4194 78.2432 107.673C78.5626 115.945 79.2622 124.015 80.0026 132.56C80.3025 136.023 80.6121 139.599 80.892 143.165C80.5474 143.265 80.2196 143.368 79.9054 143.467C79.1566 143.75 78.3715 143.924 77.5734 143.984C62.42 144.096 47.4888 144.144 29.7327 144.178H29.7249C29.1714 144.153 28.6218 144.074 28.0841 143.94C27.8801 143.896 27.667 143.852 27.4416 143.81C27.4086 143.469 27.3735 143.133 27.3385 142.8C27.2166 141.822 27.1487 140.838 27.1351 139.852C27.1917 130.616 27.2565 121.38 27.3295 112.144C27.3951 103.234 27.4571 94.3245 27.5154 85.4145C27.5297 82.9278 27.4 80.4295 27.2705 78.0781H27.2699ZM66.5289 35.6309C67.713 35.6212 68.8984 35.5831 70.0806 35.5449C72.3653 35.4725 74.7213 35.3968 76.9801 35.5449C77.7237 40.2083 78.0586 53.6179 77.5838 60.0975C74.2886 60.9096 70.81 60.8552 67.4403 60.7983C65.6408 60.7705 63.7784 60.7394 61.9452 60.8391C56.9515 61.1089 51.8535 61.1465 46.9233 61.1834L42.9532 61.2169C38.3294 61.2602 33.5475 61.3056 28.8661 61.0915C27.5919 61.0332 26.2912 61.0117 25.0338 60.9916C20.9833 60.9269 16.7993 60.8579 12.4618 59.5541L11.3768 36.0255C13.7352 35.7968 16.112 35.8364 18.4615 36.1433C19.6534 36.2559 20.886 36.3732 22.1019 36.4062C25.6594 36.502 29.3512 36.5523 33.3887 36.5588C36.9645 36.5633 40.811 36.5531 44.6821 36.4334C46.5775 36.3745 48.4988 36.26 50.3559 36.15C51.9708 36.0536 53.6407 35.9556 55.2789 35.8909C59.0691 35.7479 62.8533 35.6613 66.5289 35.6315V35.6309ZM50.6169 25.2539L46.5095 19.5205C46.8333 15.9849 48.548 13.9338 52.0512 12.8856C57.2333 11.3326 62.0133 11.3053 66.6533 12.7962C71.9171 14.4882 75.2771 18.0373 77.7684 24.5933L50.6169 25.2539ZM90.3637 23.7886C96.2908 16.8719 104.393 12.1696 113.343 10.4519C116.571 9.78863 120.24 9.57186 123.072 12.9443C123.694 19.2603 123.692 19.4647 121.892 23.5289C121.708 23.5599 121.52 23.5938 121.329 23.6293C120.645 23.7755 119.95 23.8646 119.251 23.8954C110.16 24.0248 100.595 24.1242 90.8139 24.1902C90.7161 24.1163 90.6235 24.0361 90.5367 23.9497C90.4803 23.896 90.422 23.8416 90.3637 23.7892V23.7886ZM87.3438 107.324C87.5692 99.0609 87.5174 90.9682 87.463 82.3998C87.4397 78.8721 87.4176 75.321 87.415 71.7369C94.0223 70.9456 133.713 69.1293 140.326 69.3066C140.197 69.9155 140.063 70.5237 139.929 71.13C139.514 73.0026 139.087 74.9379 138.839 76.8772C137.936 83.9948 137.235 89.9736 136.742 96.0211C136.172 103.036 135.727 110.175 135.297 117.08C135.171 119.109 135.043 121.139 134.914 123.169C134.731 126.049 134.557 128.93 134.392 131.811C134.198 135.111 134.004 138.407 133.789 141.703C133.73 142.066 133.616 142.418 133.448 142.746C133.398 142.864 133.346 142.983 133.295 143.109H85.4814C85.6758 139.563 85.8882 136.042 86.0994 132.539C86.5988 124.263 87.1151 115.705 87.3438 107.325V107.324ZM149.252 32.2648C149.299 32.3329 149.33 32.4108 149.343 32.4926C149.165 40.0276 148.979 47.5629 148.786 55.3179L148.738 57.2726C148.391 57.3412 148.051 57.4128 147.715 57.484C146.745 57.7143 145.759 57.8765 144.766 57.9693C125.98 59.2433 107.1 59.9189 88.638 59.9752C87.6975 54.7748 87.4105 41.4195 88.1198 35.5488C91.9676 34.6914 96.0227 34.602 99.954 34.5134C101.02 34.4901 102.086 34.4669 103.149 34.4281C105.584 34.3421 108.067 34.3276 110.469 34.314C113.07 34.2992 115.76 34.2837 118.406 34.1763C123.742 33.9608 128.973 33.5647 134.308 33.1409C137.82 32.864 141.33 32.5249 144.723 32.1969C146.094 32.0649 147.445 31.9357 148.777 31.8089C148.861 31.8872 148.933 31.9532 148.998 32.0108C149.089 32.0883 149.174 32.1725 149.252 32.2629V32.2648Z" />
                      </g>
                    </svg>
                    <span>
                      <span className="text-accent">$100
                        {/* */}
                        off</span>
                      for the first 
                      {/* */}
                      6200
                      {/* */}
                      customers (
                      {/* */}
                      13
                      {/* */}
                      left)
                    </span>
                  </p>
                </div>
                <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                  <div className="relative w-full">
                    <div className="h-full relative flex flex-col gap-5 lg:gap-8 z-10 p-8 rounded-lg bg-base-100">
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <p className="text-lg lg:text-xl font-bold ">Starter</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex flex-col justify-end mb-[4px] text-lg ">
                          <p className="relative opacity-80">
                            <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]" />
                            <span className="text-base-content">$
                              {/* */}
                              299</span>
                          </p>
                        </div>
                        <p className="text-5xl tracking-tight font-extrabold">$
                          {/* */}
                          199</p>
                        <div className="flex flex-col justify-end mb-[4px]">
                          <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
                        </div>
                      </div>
                      <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>NextJS boilerplate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>SEO &amp;Blog</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Mailgun emails</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Stripe / Lemon Squeezy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>MongoDB / Supabase</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Google Oauth &amp;Magic Links</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Components &amp;animations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>ChatGPT prompts for terms &amp;privacy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-base-content/30 shrink-0">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                          <span className="text-base-content/30">
                            <span className data-tooltip-html="<div class=&quot;space-y-2&quot;><p class=&quot;text-base font-bold&quot;>🧑‍💻 Build with 5,000+ makers</p><div class=&quot;text-base-content/90 leading-relaxed&quot;>Join us on Discord, make friends, and grow together!</div><img alt=&quot;Discord&quot; loading=&quot;lazy&quot; width=&quot;794&quot; height=&quot;427&quot; decoding=&quot;async&quot; data-nimg=&quot;1&quot; class=&quot;rounded&quot; style=&quot;color:transparent&quot; srcSet=&quot;/discordSuccess.7e624b13.jpg 1x, /discordSuccess.7e624b13.jpg 2x&quot; src=&quot;/discordSuccess.7e624b13.jpg&quot;/></div>">Discord community</span>
                            {/* */}
                            &amp;
                            {/* */}
                            <span className data-tooltip-html="<div class=&quot;space-y-2&quot;><p class=&quot;text-base font-bold&quot;>🏆 Showcase your startup</p><div class=&quot;text-base-content/90 leading-relaxed&quot;>List your startup on the Leaderboards to have fun and get exposure.</div><div class=&quot;text-base-content/90 leading-relaxed&quot;>Who&#x27;ll get the most revenue in January?</div><img alt=&quot;Revenue Leaderboard&quot; loading=&quot;lazy&quot; width=&quot;1200&quot; height=&quot;660&quot; decoding=&quot;async&quot; data-nimg=&quot;1&quot; class=&quot;rounded&quot; style=&quot;color:transparent&quot; srcSet=&quot;/shareLeaderboard.f0299870.jpeg 1x, /shareLeaderboard.f0299870.jpeg 2x&quot; src=&quot;/shareLeaderboard.f0299870.jpeg&quot;/></div>">Leaderboard</span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-base-content/30 shrink-0">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                          <span className="text-base-content/30">
                            <span className data-tooltip-html="<div class=&quot;space-y-2&quot;><p class=&quot;text-base font-bold&quot;>🤑 Unique discounts for ShipFast members</p><ul class=&quot;space-y-0 list list-disc list-inside opacity-90&quot;><li class=&quot;list-item&quot;>Rewardful — 30% OFF for 3 months</li><li class=&quot;list-item&quot;>There&#x27;s An AI For That — $200 ads credit</li><li class=&quot;list-item&quot;>daisyUI — 50% OFF</li><li class=&quot;list-item&quot;>DataFast — 30% OFF on all plans</li><li class=&quot;list-item&quot;>Typefully — 30% OFF for 1 year</li><li class=&quot;list-item&quot;>Vercel — $100/mo off for 6 months<span class=&quot;text-xs opacity-75 whitespace-nowrap&quot;> (10 winners/month)</span></li><li class=&quot;list-item&quot;>Resend — $100/mo off for 6 months<span class=&quot;text-xs opacity-75 whitespace-nowrap&quot;> (10 winners/month)</span></li><li class=&quot;list-item&quot;>MakerAdsGuide — 60% OFF</li><li class=&quot;list-item&quot;>SEO Course — 20% OFF</li></ul><img alt=&quot;Perks list&quot; loading=&quot;lazy&quot; width=&quot;2138&quot; height=&quot;1556&quot; decoding=&quot;async&quot; data-nimg=&quot;1&quot; style=&quot;color:transparent&quot; srcSet=&quot;/perks.edecf20b.jpg 1x&quot; src=&quot;/perks.edecf20b.jpg&quot;/></div>">$1,210</span>
                            {/* */}
                            worth of discounts
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-base-content/30 shrink-0">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                          <span className="text-base-content/30">Lifetime updates</span>
                        </li>
                      </ul>
                      <div className="space-y-2">
                        <button className="btn btn-primary group btn-block btn-primary plausible-event-name=Checkout" title="Go to ShipFast Checkout">
                          <svg className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg">
                            <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
                          </svg>
                          Get ShipFast
                        </button>
                        <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">Pay once. Build unlimited projects!</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <div className="h-full relative flex flex-col gap-5 lg:gap-8 z-10 p-8 rounded-lg bg-base-100">
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <p className="text-lg lg:text-xl font-bold ">All-in</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex flex-col justify-end mb-[4px] text-lg ">
                          <p className="relative opacity-80">
                            <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]" />
                            <span className="text-base-content">$
                              {/* */}
                              349</span>
                          </p>
                        </div>
                        <p className="text-5xl tracking-tight font-extrabold">$
                          {/* */}
                          249</p>
                        <div className="flex flex-col justify-end mb-[4px]">
                          <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
                        </div>
                      </div>
                      <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>NextJS boilerplate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>SEO &amp;Blog</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Mailgun emails</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Stripe / Lemon Squeezy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>MongoDB / Supabase</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Google Oauth &amp;Magic Links</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>Components &amp;animations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>ChatGPT prompts for terms &amp;privacy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>
                            <span className="font-medium text-base-content hover:cursor-help hover:bg-accent hover:text-accent-content hover:decoration-0 underline decoration-wavy decoration-accent" data-tooltip-id="tooltip" data-tooltip-html="<div class=&quot;space-y-2&quot;><p class=&quot;text-base font-bold&quot;>🧑‍💻 Build with 5,000+ makers</p><div class=&quot;text-base-content/90 leading-relaxed&quot;>Join us on Discord, make friends, and grow together!</div><img alt=&quot;Discord&quot; loading=&quot;lazy&quot; width=&quot;794&quot; height=&quot;427&quot; decoding=&quot;async&quot; data-nimg=&quot;1&quot; class=&quot;rounded&quot; style=&quot;color:transparent&quot; srcSet=&quot;/discordSuccess.7e624b13.jpg 1x, /discordSuccess.7e624b13.jpg 2x&quot; src=&quot;/discordSuccess.7e624b13.jpg&quot;/></div>">Discord community</span>
                            {/* */}
                            &amp;
                            {/* */}
                            <span className="font-medium text-base-content hover:cursor-help hover:bg-accent hover:text-accent-content hover:decoration-0 underline decoration-wavy decoration-accent" data-tooltip-id="tooltip" data-tooltip-html="<div class=&quot;space-y-2&quot;><p class=&quot;text-base font-bold&quot;>🏆 Showcase your startup</p><div class=&quot;text-base-content/90 leading-relaxed&quot;>List your startup on the Leaderboards to have fun and get exposure.</div><div class=&quot;text-base-content/90 leading-relaxed&quot;>Who&#x27;ll get the most revenue in January?</div><img alt=&quot;Revenue Leaderboard&quot; loading=&quot;lazy&quot; width=&quot;1200&quot; height=&quot;660&quot; decoding=&quot;async&quot; data-nimg=&quot;1&quot; class=&quot;rounded&quot; style=&quot;color:transparent&quot; srcSet=&quot;/shareLeaderboard.f0299870.jpeg 1x, /shareLeaderboard.f0299870.jpeg 2x&quot; src=&quot;/shareLeaderboard.f0299870.jpeg&quot;/></div>">Leaderboard</span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>
                            <span className="font-medium text-base-content hover:cursor-help hover:bg-accent hover:text-accent-content hover:decoration-0 underline decoration-wavy decoration-accent" data-tooltip-id="tooltip" data-tooltip-html="<div class=&quot;space-y-2&quot;><p class=&quot;text-base font-bold&quot;>🤑 Unique discounts for ShipFast members</p><ul class=&quot;space-y-0 list list-disc list-inside opacity-90&quot;><li class=&quot;list-item&quot;>Rewardful — 30% OFF for 3 months</li><li class=&quot;list-item&quot;>There&#x27;s An AI For That — $200 ads credit</li><li class=&quot;list-item&quot;>daisyUI — 50% OFF</li><li class=&quot;list-item&quot;>DataFast — 30% OFF on all plans</li><li class=&quot;list-item&quot;>Typefully — 30% OFF for 1 year</li><li class=&quot;list-item&quot;>Vercel — $100/mo off for 6 months<span class=&quot;text-xs opacity-75 whitespace-nowrap&quot;> (10 winners/month)</span></li><li class=&quot;list-item&quot;>Resend — $100/mo off for 6 months<span class=&quot;text-xs opacity-75 whitespace-nowrap&quot;> (10 winners/month)</span></li><li class=&quot;list-item&quot;>MakerAdsGuide — 60% OFF</li><li class=&quot;list-item&quot;>SEO Course — 20% OFF</li></ul><img alt=&quot;Perks list&quot; loading=&quot;lazy&quot; width=&quot;2138&quot; height=&quot;1556&quot; decoding=&quot;async&quot; data-nimg=&quot;1&quot; style=&quot;color:transparent&quot; srcSet=&quot;/perks.edecf20b.jpg 1x&quot; src=&quot;/perks.edecf20b.jpg&quot;/></div>">$1,210</span>
                            {/* */}
                            worth of discounts
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className>
                            Lifetime updates<span className="badge badge-accent select-none cursor-pointer ml-1" data-tooltip-id="tooltip" data-tooltip-html="<div class=&quot;text-gray-300&quot;><div class=&quot;mb-1.5 &quot;>Latest updates on ShipFast:</div><ul><li>- <span class=&quot;text-gray-50 font-medium&quot;>(better with a GIF)</span> <span class=&quot;badge badge-sm&quot;>4 days ago</span></li><li>- <span class=&quot;text-gray-50 font-medium&quot;>misc</span> <span class=&quot;badge badge-sm&quot;>4 days ago</span></li><li>- <span class=&quot;text-gray-50 font-medium&quot;>feat: add 1 perk 💰</span> <span class=&quot;badge badge-sm&quot;>2 weeks ago</span></li></ul></div>">Updated 
                              {/* */}
                              4 days ago</span>
                          </span>
                        </li>
                      </ul>
                      <div className="space-y-2">
                        <button className="btn btn-primary group btn-block btn-primary plausible-event-name=Checkout" title="Go to ShipFast Checkout">
                          <svg className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg">
                            <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
                          </svg>
                          Get ShipFast
                        </button>
                        <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">Pay once. Build unlimited projects!</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <span className="badge text-xs text-accent-content font-semibold border-0 bg-accent">BUNDLE</span>
                    </div>
                    <div className="absolute -inset-[1px] rounded-[8px] bg-accent z-10" />
                    <div className="h-full relative flex flex-col gap-5 lg:gap-8 z-10 p-8 rounded-lg bg-base-100">
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <p className="text-lg lg:text-xl font-bold ">
                            ShipFast <span className="text-accent">+ CodeFast</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex flex-col justify-end mb-[4px] text-lg ">
                          <p className="relative opacity-80">
                            <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]" />
                            <span className="text-base-content">$
                              {/* */}
                              648</span>
                          </p>
                        </div>
                        <p className="text-5xl tracking-tight font-extrabold">$
                          {/* */}
                          299</p>
                        <div className="flex flex-col justify-end mb-[4px]">
                          <p className="text-xs opacity-60 uppercase font-semibold">USD</p>
                        </div>
                      </div>
                      <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                        <li className="h-full">
                          <div className="space-y-6 flex-1 h-full">
                            <div className=" flex items-center gap-2">
                              <span className>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 rotate-90 md:rotate-0">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                              </span>
                              <span className="italic flex items-center gap-2 lg:text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 max-lg:rotate-90">
                                  <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                                </svg>
                                Everything in All-in, and...
                              </span>
                            </div>
                            <div className="bg-base-300 border border-base-content/10 hover:border-base-content/30 duration-100 hover:shadow-2xl shadow-lg rounded-lg">
                              <a href="https://codefa.st?ref=shipfast_pricing" target="_blank" className="group block p-4 sm:p-6 space-y-2 duration-200">
                                <div className="flex gap-2.5 items-center ">
                                  <svg className="w-6 h-6" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2218_419)">
                                      <rect width={1080} height={1080} rx={300} fill="#4EA800" />
                                      <path d="M343.488 361.883C343.488 361.883 165.362 493.07 165.361 540.009C165.361 586.948 343.488 718.134 343.488 718.134" stroke="black" strokeWidth="92.4556" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d="M736.135 719.034C736.135 719.034 914.261 587.846 914.262 540.907C914.262 493.968 736.135 362.782 736.135 362.782" stroke="black" strokeWidth="92.4556" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d="M451.26 856.229L628.477 223.301" stroke="black" strokeWidth="92.4556" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2218_419">
                                        <rect width={1080} height={1080} fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span className="lg:text-lg font-semibold text-accent">CodeFast ($299 value)</span>
                                </div>
                                <div className="leading-relaxed pb-1">Learn to code in weeks, not months</div>
                                <ul className="list-disc list-inside leading-normal pb-2.5">
                                  <li>12 hours of content</li>
                                  <li>Build a SaaS from 0</li>
                                  <li>Entrepreneur mindset</li>
                                </ul>
                                <div>
                                  <div className="avatar-group justify-start -space-x-4">
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Charles" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/charles.418aa080.jpg 1x, /charles.418aa080.jpg 2x" src="/charles.418aa080.jpg" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Victor" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/victor.ab7256d3.jpg 1x, /victor.ab7256d3.jpg 2x" src="/victor.ab7256d3.jpg" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Tona" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/tona.feafd731.png 1x, /tona.feafd731.png 2x" src="/tona.feafd731.png" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Andrei" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/andrei.d24a0d94.jpg 1x, /andrei.d24a0d94.jpg 2x" src="/andrei.d24a0d94.jpg" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Bakir" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/bakir.ad67dfe9.webp 1x, /bakir.ad67dfe9.webp 2x" src="/bakir.ad67dfe9.webp" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Sallahudin" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/sallahudin.97e72cd0.webp 1x, /sallahudin.97e72cd0.webp 2x" src="/sallahudin.97e72cd0.webp" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Ascsei" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/adscei.0c47e137.jpeg 1x, /adscei.0c47e137.jpeg 2x" src="/adscei.0c47e137.jpeg" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Juan" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/juan.917896c8.jpeg 1x, /juan.917896c8.jpeg 2x" src="/juan.917896c8.jpeg" />
                                    </div>
                                    <div className="avatar  w-10 h-10 !border-[1.5px]">
                                      <img alt="Jainil" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className style={{"color":"transparent"}} srcSet="/jainil.5d15e99a.jpeg 1x, /jainil.5d15e99a.jpeg 2x" src="/jainil.5d15e99a.jpeg" />
                                    </div>
                                  </div>
                                  <div className="opacity-80 text-sm mt-2">1,000+ students love CodeFast</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="space-y-2">
                        <button className="btn btn-primary group btn-block btn-accent plausible-event-name=Checkout" title="Go to ShipFast Checkout">Get ShipFast + CodeFast</button>
                        <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">Pay once. Build unlimited projects!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mx-auto max-w-md mt-24">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-accent" viewBox="0 0 35 30" fill="none">
                    <path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z" />
                  </svg>
                  <p className="md:text-lg leading-relaxed">I was able to launch my project in just one day! I made 170$ already.</p>
                  <div className="flex items-center gap-2">
                    <img alt="Mateus testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/mateus.576bf51a.webp 1x, /mateus.576bf51a.webp 2x" src="/mateus.576bf51a.webp" />
                    <p>Mateus De Nardo</p>
                    <span className="badge badge-accent badge-outline">Built a SaaS</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-base-200" id="faq">
              <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                  <p className="sm:text-4xl text-3xl font-extrabold text-base-content mb-8">Frequently Asked Questions</p>
                  <div className="text-base-content/80">
                    Have another question? Contact me on
                    {/* */}
                    <a className="link text-base-content" target="_blank" href="https://twitter.com/marc_louvion">Twitter</a>
                    {/* */}
                    or by
                    {/* */}
                    <a href="mailto:hello@shipfa.st" target="_blank" className="link text-base-content">email</a>
                    .
                  </div>
                </div>
                <ul className="basis-1/2">
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=What+do+I+get+exactly?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">What do I get exactly?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-4 leading-relaxed">
                          <p>
                            1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more.<br />
                            The repo is available in:<br />
                            - Javascript and Typescript<br />- /app router and /pages router.
                          </p>
                          <p>2/ The documentation helps you set up your app from scratch, write copy that sells, and ship fast.</p>
                          <p>
                            3/ With the Premium plan, access to our Discord with 5,000+ makers, the
                            {/* */}
                            <a target="_blank" className="link link-primary" href="/leaderboard">Leaderboards</a>
                            {/* */}
                            to showcase your startup, and 
                            {/* */}
                            $1,210
                            {/* */}
                            worth of unique discounts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=What+are+the+ShipFast+Leaderboards?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">What are the ShipFast Leaderboards?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-4 leading-relaxed">
                          <p>
                            The
                            {/* */}
                            <a target="_blank" className="link link-primary" href="/leaderboard">Leaderboards</a>
                            {/* */}
                            are a fun way to showcase your startup.
                          </p>
                          <p>Startups are ranked by revenue (verified by Stripe), so you can see who 's making the most money.</p>
                          <p>Leaderboards also help you gain exposure by showing your startup to thousands of entrepreneurs who visit the leaderboards page every month.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=What+are+the+ShipFast+Discounts?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">What are the ShipFast Discounts?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-4 leading-relaxed">
                          <p>$1,210
                            {/* */}
                            worth of unique discounts for ShipFast members. I partner with the following companies to give you discounts on their products:</p>
                          <ul className="list-inside list-disc">
                            <li>Rewardful
                              {/* */}
                              — 
                              {/* */}
                              30% OFF for 3 months</li>
                            <li>There 's An AI For That
                              {/* */}
                              — 
                              {/* */}
                              $200 ads credit</li>
                            <li>daisyUI
                              {/* */}
                              — 
                              {/* */}
                              50% OFF</li>
                            <li>DataFast
                              {/* */}
                              — 
                              {/* */}
                              30% OFF on all plans</li>
                            <li>Typefully
                              {/* */}
                              — 
                              {/* */}
                              30% OFF for 1 year</li>
                            <li>
                              Vercel
                              {/* */}
                              — 
                              {/* */}
                              $100/mo off for 6 months<span className="text-sm text-base-content/80">
                                {/* */}
                                (
                                {/* */}
                                10 winners/month
                                {/* */}
                                )</span>
                            </li>
                            <li>
                              Resend
                              {/* */}
                              — 
                              {/* */}
                              $100/mo off for 6 months<span className="text-sm text-base-content/80">
                                {/* */}
                                (
                                {/* */}
                                10 winners/month
                                {/* */}
                                )</span>
                            </li>
                            <li>MakerAdsGuide
                              {/* */}
                              — 
                              {/* */}
                              60% OFF</li>
                            <li>SEO Course
                              {/* */}
                              — 
                              {/* */}
                              20% OFF</li>
                          </ul>
                          <img alt="Perks list" loading="lazy" width={360} height={238} decoding="async" data-nimg={1} className="rounded w-full max-w-[30rem]" style={{"color":"transparent"}} srcSet="/perks.edecf20b.jpg 1x, /perks.edecf20b.jpg 2x" src="/perks.edecf20b.jpg" />
                          <p>Most of these discounts are for marketing tools and services to help you acquire customers and generate revenue faster.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=Javascript+or+Typescript?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">Javascript or Typescript?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <p>Both! You can choose once you get access</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=/app+router+or+/pages+router?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">/app router or /pages router?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <p>Both! You can choose once you get access</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=My+tech+stack+is+different,+can+I+still+use+it?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">My tech stack is different, can I still use it?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed">
                          <p>Yes, as long as you 're comfortable with React &amp;NextJS.</p>
                          <p>Libraries are independent. You can use SendGrid instead of Mailgun, LemonSqueezy instead of Stripe, or Postgres instead of MongoDB, for instance.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=Is+it+a+website+template?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">Is it a website template?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed">
                          <p>It 's more than just a template. You can copy/paste sections to build your site quickly, like a pricing section, an FAQ, and even an entire blog. You also get a bunch of UI components like buttons, modals, popovers, etc.</p>
                          <p>The NextJS starter also comes with handy tools you need to run an online business—payment processing, emails, SEO, etc.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=How+is+ShipFast+better+than+other+boilerplates?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">How is ShipFast better than other boilerplates?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed">
                          <p>Customers do NOT buy code.</p>
                          <p>Customers buy a life transformation.</p>
                          <p>
                            They ship startups. Every week. And they make $ from it (<a target="_blank" className="link link-primary" href="/leaderboard">see for yourself</a>
                            ).
                          </p>
                          <img alt="ShipFast Discord conversation of a maker sharing a success" loading="lazy" width={360} height={238} decoding="async" data-nimg={1} className="w-full max-w-md object-cover rounded" style={{"color":"transparent","background-size":"cover","background-position":"50% 50%","background-repeat":"no-repeat"}} srcSet="/discordSuccess.7e624b13.jpg 1x, /discordSuccess.7e624b13.jpg 2x" src="/discordSuccess.7e624b13.jpg" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=Are+there+any+other+costs+associated?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">Are there any other costs associated?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed">
                          <p>Many hosting platforms, like Vercel, let you host a project for free (front-end + back-end) and MongoDB/Supabase have free tiers — so you can launch for first app for $0/month.</p>
                          <p>If you use Magic Link sign-ups, you 'll spend $1 per 1,000 users.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=How+often+is+ShipFast+updated?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">How often is ShipFast updated?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed">
                          <p>
                            I
                            {/* */}
                            <a className="link" target="_blank" href="https://marclou.com?ref=shipfast_faq">ship like a madman</a>
                            {/* */}
                            &amp;use ShipFast for all my projects, so I 'm updating it regularly.
                            {/* */}
                            <span className="text-accent font-medium">Last update 
                              {/* */}
                              4 days ago
                              {/* */}
                              .</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=Can+I+get+a+refund?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">Can I get a refund?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2">
                          <p>After you 've got access to the repo, ShipFast is yours forever, so it can 't be refunded.</p>
                          <p>But rest assured, users of ShipFast ship startups in 7 days on average and make their first $ online in record time.</p>
                          <img alt="ShipFast Discord conversations of makers earning money with ShipFast" loading="lazy" width={491} height={760} decoding="async" data-nimg={1} className="w-full max-w-md object-cover rounded" style={{"color":"transparent","background-size":"cover","background-position":"50% 50%","background-repeat":"no-repeat"}} srcSet="/discord_testimonials.6ef28f93.png 1x, /discord_testimonials.6ef28f93.png 2x" src="/discord_testimonials.6ef28f93.png" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 plausible-event-name=Can+I+use+PayPal?" aria-expanded="false">
                      <span className="flex-1 text-base-content ">Can I use PayPal?</span>
                      <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center transition duration-200 ease-out false" />
                        <rect y={7} width={16} height={2} rx={1} className="transform origin-center rotate-90 transition duration-200 ease-out false" />
                      </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{"max-height":"0","opacity":"0"}}>
                      <div className="pb-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed">
                          <p>
                            Yes! You can send over the USD equivalent of the plan you want to purchase (
                            {/* */}
                            $199 or $249 or $299
                            {/* */}
                            ) to my PayPal account:
                            {/* */}
                            <a href="https://www.paypal.com/paypalme/marclouvion" target="_blank" className="link link-primary">paypal.me/marclouvion</a>
                          </p>
                          <p>
                            Once done, please
                            {/* */}
                            <a href="mailto:hello@shipfa.st?subject=PayPal%20payment%20for%20ShipFast" target="_blank" className="link link-primary">email me</a>
                            {/* */}
                            your GitHub username so I can give you access to the repo.
                          </p>
                          <p>Please allow a few hours to get access.</p>
                          <p>
                            135k people trust me on
                            {/* */}
                            <a href="https://twitter.com/marc_louvion" target="_blank" className="link">Twitter</a>
                            . I 'm not running away with the money 😊
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="bg-base-200" id="testimonials">
              <div className="py-24 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <div className="mb-8">
                    <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">6187 makers built AI tools, SaaS, and more</h2>
                  </div>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">They made their first $ online, and some even quit their 9-5!</p>
                </div>
                <ul role="list" className="max-w-7xl mx-auto md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6">
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <div className="max-w-[550px] border border-base-content/20 rounded-xl">
                      <div className="relative w-full overflow-hidden rounded-t-xl">
                        <video className="w-full" poster="https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.jpg" preload="metadata" playsInline>
                          <source src="https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.mp4" type="video/mp4" />Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity" />
                        <div className="absolute w-full bottom-0 z-50">
                          <div className="flex justify-between items-end p-4">
                            <button className="group" type="button" title="Play video">
                              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </button>
                            <div className="animate-opacity text-right">
                              <p className="text-gray-50 font-medium drop-shadow">Jack F.</p>
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                        <div>"
                          {/* */}
                          I shipped in 6 days as a noob coder... This is awesome
                          {/* */}
                          "</div>
                      </div>
                    </div>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-[#2d1e1a] ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!</div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Sergiu Chiriac's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/sergiu.9d908463.jpeg 1x, /sergiu.9d908463.jpeg 2x" src="/sergiu.9d908463.jpeg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Sergiu Chiriac</div>
                            <div className="mt-0.5 text-sm text-base-content/60">@
                              {/* */}
                              sergiu</div>
                          </div>
                          <a href="https://www.producthunt.com/posts/shipfast-2?comment=2707228" target="_blank" className="shrink-0 " aria-label="See user review on Product Hunt">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.245 26.256" className="w-6 h-6">
                              <path d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128" fill="#da552f" />
                              <path d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595" fill="#fff" />
                            </svg>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid bg-transparent justify-center h-full  max-md:flex" data-theme="dark" data-conversation="none" data-cards="hidden" data-align="center">
                    <blockquote className="twitter-tweet" data-conversation="none" data-theme="dark">
                      <p lang="en" dir="ltr">
                        Marc, I got your boilerplate and having the payments setup with Stripe + user auth is a blessing. This will save me like a week of work for each new side project I spin up.<br />
                        <br />
                        I appreciate that is well documented, as well.<br />
                        <br />100% worth it 🚀🚀🚀
                      </p>
                      — ⚡️ Victor Abeledo (@VicPivots)
                      {/* */}
                      <a href="https://twitter.com/VicPivots/status/1697352442986250413?ref_src=twsrc%5Etfw">August 31, 2023</a>
                    </blockquote>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <div className="max-w-[550px] border border-base-content/20 rounded-xl">
                      <div className="relative w-full overflow-hidden rounded-t-xl">
                        <video className="w-full" poster="https://d1wkquwg5s1b04.cloudfront.net/landing/alex.jpg" preload="metadata" playsInline>
                          <source src="https://d1wkquwg5s1b04.cloudfront.net/landing/alex.mp4" type="video/mp4" />Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity" />
                        <div className="absolute w-full bottom-0 z-50">
                          <div className="flex justify-between items-end p-4">
                            <button className="group" type="button" title="Play video">
                              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </button>
                            <div className="animate-opacity text-right">
                              <p className="text-gray-50 font-medium drop-shadow">Álex Martinez</p>
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                        <div>"
                          {/* */}
                          Everything you need to ship your SaaS ASAP
                          {/* */}
                          "</div>
                      </div>
                    </div>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          Even though it 's Christmas, I 'm shipping anyway! shipfa.st was
                          {/* */}
                          <span className="bg-primary text-primary-content px-0.5">my best purchase in 2023! 🚀</span>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Silvestro's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/silvestro.6ca9fe35.jpg 1x, /silvestro.6ca9fe35.jpg 2x" src="/silvestro.6ca9fe35.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Silvestro</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <span className="bg-primary text-primary-content px-0.5">I launched a week and a half ago and I 'm at $450 MRR</span>
                          {/* */}
                          which is a new, awesome experience for me. I 'd still be pre-launch if it wasn 't for you and ShipFast!
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Christian Hatch's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/christian.165e0f47.png 1x, /christian.165e0f47.png 2x" src="/christian.165e0f47.png" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Christian Hatch</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <div className="max-w-[550px] border border-base-content/20 rounded-xl">
                      <div className="relative w-full overflow-hidden rounded-t-xl">
                        <video className="w-full" poster="https://d1wkquwg5s1b04.cloudfront.net/landing/mateuszPoster.jpg" preload="metadata" playsInline>
                          <source src="https://d1wkquwg5s1b04.cloudfront.net/landing/mateuszTestimonial.mp4" type="video/mp4" />Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity" />
                        <div className="absolute w-full bottom-0 z-50">
                          <div className="flex justify-between items-end p-4">
                            <button className="group" type="button" title="Play video">
                              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </button>
                            <div className="animate-opacity text-right">
                              <p className="text-gray-50 font-medium drop-shadow">Mateusz Siatrak</p>
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                        <div>"
                          {/* */}
                          Yesterday I 've made a first sale !! 🎉🎊🍾
                          {/* */}
                          "</div>
                      </div>
                    </div>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <div className="space-y-2">
                            <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden ">
                              <img alt="Juanjo's testimonial for ShipFast" loading="lazy" width={250} height={500} decoding="async" data-nimg={1} className="w-full object-cover mb-6" style={{"color":"transparent"}} srcSet="/juanjomrr.c149586f.jpeg 1x, /juanjomrr.c149586f.jpeg 2x" src="/juanjomrr.c149586f.jpeg" />
                            </div>
                            <p>
                              <span className="bg-primary text-primary-content px-0.5">I made more in 6 days than the minimum wage here in Spain.</span>
                              {/* */}
                              I wanna cry 🥲 It would have taken me months to do the website without the boilerplate.
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Juanjo Valiño's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/juanjo.da6ad787.png 1x, /juanjo.da6ad787.png 2x" src="/juanjo.da6ad787.png" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Juanjo Valiño</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          I transitioned
                          {/* */}
                          <span className="bg-primary text-primary-content px-0.5">from using no-code tools to launching a fully-coded saas</span>
                          {/* */}
                          — Explorify — in two weeks, all while having a full-time job
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Gabriel's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/grabriel.5bc4a207.jpg 1x, /grabriel.5bc4a207.jpg 2x" src="/grabriel.5bc4a207.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Gabriel</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid bg-transparent justify-center h-full  max-md:flex" data-theme="dark" data-conversation="none" data-cards="hidden" data-align="center">
                    <blockquote className="twitter-tweet" data-theme="dark" data-cards="hidden">
                      <p lang="en" dir="ltr">
                        I wanted to build a new startup with Next.js, and saw
                        {/* */}
                        <a href="https://twitter.com/marc_louvion?ref_src=twsrc%5Etfw">@marc_louvion</a>
                        {/* */}
                        launched <a href="https://t.co/Uoai6fpAh6">https://t.co/Uoai6fpAh6</a>
                        {/* */}
                        as a boilerplate for it 🔥<br />
                        <br />
                        Tried it for myself, and I have to say it 's a game changer 🚀<br />
                        <br />Comes with easy to follow tutorial, and saves you a ton of time. What 's not to love?
                      </p>
                      — Yifan Goh (@imgyf)
                      {/* */}
                      <a href="https://twitter.com/imgyf/status/1697549891080532236?ref_src=twsrc%5Etfw">September 1, 2023</a>
                    </blockquote>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <div className="space-y-2">
                            <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                              <img alt="Stripe chart" loading="lazy" width={250} height={200} decoding="async" data-nimg={1} className="w-full object-cover mb-6" style={{"color":"transparent"}} srcSet="/plmrr.a04d83df.jpg 1x, /plmrr.a04d83df.jpg 2x" src="/plmrr.a04d83df.jpg" />
                            </div>
                            <p>
                              Getting <span className="underline">shipfa.st</span>
                              from
                              {/* */}
                              <span className>@marc_louvion</span>
                              is one of
                              {/* */}
                              <span className="bg-primary text-primary-content px-0.5">the best decision I 've made</span>
                              {/* */}
                              since I started indie hacking.
                            </p>
                            <p>
                              It helped me actually getting started instead of procrastinating and it made me release <span className="underline">snowball.club</span>
                              so much faster than if I tried without it.
                            </p>
                            <p>Oh and the included access to the community of builders is so underrated 🔥</p>
                          </div>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="PL Bombard's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/plpfp.8782e18a.jpg 1x, /plpfp.8782e18a.jpg 2x" src="/plpfp.8782e18a.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">PL Bombard</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          That was the best decision I could 've ever made, delivered the product within days and
                          {/* */}
                          <span className="bg-primary text-primary-content px-0.5">made 8x the boilerplate cost 🤑 </span>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Deepak's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/deepak.d097c675.jpg 1x, /deepak.d097c675.jpg 2x" src="/deepak.d097c675.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Deepak</div>
                            <div className="mt-0.5 text-sm text-base-content/60">@
                              {/* */}
                              peepakkhatri_01</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <div className="max-w-[550px] border border-base-content/20 rounded-xl">
                      <div className="relative w-full overflow-hidden rounded-t-xl">
                        <video className="w-full" poster="https://d1wkquwg5s1b04.cloudfront.net/landing/larry.jpg" preload="metadata" playsInline>
                          <source src="https://d1wkquwg5s1b04.cloudfront.net/landing/larry.mp4" type="video/mp4" />Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity" />
                        <div className="absolute w-full bottom-0 z-50">
                          <div className="flex justify-between items-end p-4">
                            <button className="group" type="button" title="Play video">
                              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </button>
                            <div className="animate-opacity text-right">
                              <p className="text-gray-50 font-medium drop-shadow">Larry</p>
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                        <div>"
                          {/* */}
                          I 've already made back the money I spent '
                          {/* */}
                          "</div>
                      </div>
                    </div>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          I managed to
                          {/* */}
                          <span className="bg-primary text-primary-content px-0.5">exit &amp;sell for 5 figures in a few weeks.</span>
                          {/* */}
                          Best investment I 've made in so long.
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Jaya B.'s testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/jaya.378a189f.jpg 1x, /jaya.378a189f.jpg 2x" src="/jaya.378a189f.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Jaya B.</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <div className="space-y-2">
                            <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                              <img alt="Jack's $800 MRR" loading="lazy" width={250} height={200} decoding="async" data-nimg={1} className="w-full object-cover mb-6" style={{"color":"transparent"}} srcSet="/jackrrr.413f6831.png 1x, /jackrrr.413f6831.png 2x" src="/jackrrr.413f6831.png" />
                            </div>
                            <p>No ShipFast (left) VS. ShipFast (right)</p>
                            <p>I wouldn 't have done it without the boilerplate. Thanks Marc ♥️🫂</p>
                          </div>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Jack Friks's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/jackpfp.38e84582.jpg 1x, /jackpfp.38e84582.jpg 2x" src="/jackpfp.38e84582.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Jack Friks</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">It 's an amazing minimalist, lightweight boilerplate with well-organized code. It has almost all the core features you would want in a SaaS boilerplate. As a new team last year it actually took us months to build a similar set of features at a stable level.</div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Zawwad Ul Sami's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/zawwad.c710afb5.jpg 1x, /zawwad.c710afb5.jpg 2x" src="/zawwad.c710afb5.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Zawwad Ul Sami</div>
                            <div className="mt-0.5 text-sm text-base-content/60">@
                              {/* */}
                              zawwadx</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will
                          {/* */}
                          <span className="bg-primary text-primary-content px-0.5">save you a lot of time</span>
                          .
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Naveen's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/naveen.311d3eb1.jpeg 1x, /naveen.311d3eb1.jpeg 2x" src="/naveen.311d3eb1.jpeg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Naveen</div>
                            <div className="mt-0.5 text-sm text-base-content/60">@
                              {/* */}
                              the_mcnaveen</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <div className="space-y-2">
                            <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                              <img alt="Shivam's testimonial for ShipFast" loading="lazy" width={250} height={200} decoding="async" data-nimg={1} className="w-full object-cover mb-6" style={{"color":"transparent"}} srcSet="/shivam.63e398e3.jpeg 1x, /shivam.63e398e3.jpeg 2x" src="/shivam.63e398e3.jpeg" />
                            </div>
                            <p>
                              Today’s a good day!
                              {/* */}
                              <span className="bg-primary text-primary-content px-0.5">Made my first internet dollar.</span>
                              {/* */}
                              First subscription for https://www.vairflow.ai/insights-ai
                            </p>
                            <p>Thanks for the motivation shipfast community. And thanks @marclou 😄😄😄</p>
                          </div>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">S</span>
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Shivam Srivastava</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <span className="bg-primary text-primary-content px-0.5">0 =&gt;1 First paying customer.</span>
                          {/* */}
                          Thanks @marclou for the great product.
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">S</span>
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Shving90</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <div className="space-y-2">
                            <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden ">
                              <img alt="Matt's testimonial for ShipFast" loading="lazy" width={500} height={250} decoding="async" data-nimg={1} className="w-full object-cover mb-6" style={{"color":"transparent"}} srcSet="/mattmrr.60bc9b57.jpg 1x, /mattmrr.60bc9b57.jpg 2x" src="/mattmrr.60bc9b57.jpg" />
                            </div>
                            <p>
                              I launched with ShipFast boilerplate and have
                              {/* */}
                              <span className="bg-primary text-primary-content px-0.5">earned 1k in a weekend.</span>
                              Thanks @marclou
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Matt Merrick's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/mattpfp.e0db8ea0.jpg 1x, /mattpfp.e0db8ea0.jpg 2x" src="/mattpfp.e0db8ea0.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Matt Merrick</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-[#2d1e1a] ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          Easily saves 15+ hrs for me setting up trivial stuff. Now, I can focus on shipping features rather than hours of setting up the same technologies from scratch.
                          {/* */}
                          <span className="bg-primary text-primary-content px-0.5">Feels like a super power!</span>
                          :D
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Wahab Shaikh's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/wahab.c0419676.jpeg 1x, /wahab.c0419676.jpeg 2x" src="/wahab.c0419676.jpeg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Wahab Shaikh</div>
                            <div className="mt-0.5 text-sm text-base-content/60">@
                              {/* */}
                              wahab</div>
                          </div>
                          <a href="https://www.producthunt.com/products/shipfast-2/reviews?review=667971" target="_blank" className="shrink-0 " aria-label="See user review on Product Hunt">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.245 26.256" className="w-6 h-6">
                              <path d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128" fill="#da552f" />
                              <path d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595" fill="#fff" />
                            </svg>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <div className="max-w-[550px] border border-base-content/20 rounded-xl">
                      <div className="relative w-full overflow-hidden rounded-t-xl">
                        <video className="w-full" poster="https://d1wkquwg5s1b04.cloudfront.net/landing/tam.jpg" preload="metadata" playsInline>
                          <source src="https://d1wkquwg5s1b04.cloudfront.net/landing/tam.mp4" type="video/mp4" />Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity" />
                        <div className="absolute w-full bottom-0 z-50">
                          <div className="flex justify-between items-end p-4">
                            <button className="group" type="button" title="Play video">
                              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </button>
                            <div className="animate-opacity text-right">
                              <p className="text-gray-50 font-medium drop-shadow">Tam Finlay</p>
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary drop-shadow">
                                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                        <div>"
                          {/* */}
                          Just got my first customer, I 've 4x my investment.
                          {/* */}
                          "</div>
                      </div>
                    </div>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <div className="space-y-2">
                            <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden ">
                              <img alt="Vladislav's testimonial for ShipFast" loading="lazy" width={500} height={250} decoding="async" data-nimg={1} className="w-full object-cover mb-6" style={{"color":"transparent"}} srcSet="/vladislackmrr.ab2d8ecb.jpg 1x, /vladislackmrr.ab2d8ecb.jpg 2x" src="/vladislackmrr.ab2d8ecb.jpg" />
                            </div>
                            <p>
                              Hey Marc! I wanted to say how grateful I am for ShipFast. It was INCREDIBLY helpful.
                              {/* */}
                              <span className="bg-primary text-primary-content px-0.5">Just hit 3k in Revenue today!</span>
                              {/* */}
                              🤩
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Vladislav Smolyanoy's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/vladislackpfp.fe8b00af.jpg 1x, /vladislackpfp.fe8b00af.jpg 2x" src="/vladislackpfp.fe8b00af.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Vladislav Smolyanoy</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">Just purchased and cloned and *holy shit!* I realllyyy like what I 'm seeing here!</div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">S</span>
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Sean</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          I was able to
                          {/* */}
                          <span className="bg-primary text-primary-content px-0.5">launch my project in just one day!</span>
                          {/* */}
                          I made 170$ already.
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Mateus De Nardo's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/mateus.576bf51a.webp 1x, /mateus.576bf51a.webp 2x" src="/mateus.576bf51a.webp" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Mateus De Nardo</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="break-inside-avoid max-md:flex justify-center">
                    <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100 ">
                      <blockquote className="relative">
                        <div className="text-base xl:text-sm text-base-content">
                          <div className="space-y-2">
                            <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                              <img alt="Carlos's testimonial for ShipFast" loading="lazy" width={250} height={200} decoding="async" data-nimg={1} className="w-full object-cover mb-6" style={{"color":"transparent"}} srcSet="/carlosmrr.0b9a58a0.jpg 1x, /carlosmrr.0b9a58a0.jpg 2x" src="/carlosmrr.0b9a58a0.jpg" />
                            </div>
                            <p>
                              I 've shipped my first product ever,
                              {/* */}
                              <span className="bg-primary text-primary-content px-0.5">without an audience</span>
                              i 've reached $109 MRR in 4 days.
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                        <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                          <img alt="Carlos Arthur's testimonial for ShipFast" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="w-10 h-10 rounded-full object-cover" style={{"color":"transparent"}} srcSet="/carlos.157c6bf4.jpg 1x, /carlos.157c6bf4.jpg 2x" src="/carlos.157c6bf4.jpg" />
                        </div>
                        <div className="w-full flex items-end justify-between gap-2">
                          <div>
                            <div className="text-sm font-medium text-base-content">Carlos Arthur</div>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </section>
            <section className="bg-base-200">
              <div className="pb-32 pt-16 px-8 max-w-3xl mx-auto flex flex-col items-center gap-8 md:gap-12">
                <div className="text-center">
                  <svg className="fill-base-content w-8 h-8 md:w-12 md:h-12 rotate-12 ml-auto md:-mr-8" viewBox="0 0 154 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_8_2867)">
                      <path d="M127.902 44.3342C125.623 44.3703 124.281 43.7653 123.466 42.1855C122.69 40.6838 123.198 39.3362 124.022 38.0938C124.455 37.4383 125.018 36.8796 125.678 36.4529C129.18 34.2536 132.67 32.0219 136.285 30.0208C137.482 29.4368 138.822 29.2089 140.145 29.3644C140.758 29.4343 141.346 29.6482 141.86 29.9886C142.375 30.329 142.801 30.7863 143.106 31.3231C143.41 31.8598 143.582 32.4609 143.61 33.0772C143.637 33.6935 143.519 34.3075 143.263 34.8691C142.619 36.2881 141.598 37.503 140.31 38.3813C137.073 40.345 133.647 42.0049 130.25 43.6937C129.497 44.0034 128.708 44.2187 127.902 44.3342Z" />
                      <path d="M21.6685 49.0745C20.9465 48.6676 19.311 48.0954 18.1598 47.0071C16.3063 45.218 14.6241 43.2597 13.1348 41.1578C12.3408 40.0882 11.8856 38.8053 11.828 37.4746C11.8549 35.0461 14.4127 33.2943 17.0006 34.16C19.1481 34.8232 21.1433 35.9043 22.8714 37.3414C24.5996 38.7784 26.0265 40.5431 27.0702 42.5336C28.8154 45.9413 26.4105 49.1848 21.6685 49.0745Z" />
                      <path d="M114.501 0.366583C117.943 0.34558 120.014 2.92035 119.334 5.62578C119.145 6.50263 118.742 7.31858 118.158 7.99973C115.827 10.4072 113.475 12.8134 110.939 14.997C109.707 16.0563 108.152 16.8478 106.282 16.2177C104.105 15.484 103.055 13.6935 103.761 11.5256C103.943 10.8763 104.25 10.2683 104.663 9.73509C106.852 7.19703 109.013 4.62155 111.374 2.24955C112.345 1.27423 113.795 0.776793 114.501 0.366583Z" />
                      <path d="M53.3557 13.062C53.1588 15.0507 52.3273 16.5229 50.5335 17.3886C48.8559 18.1972 47.404 17.6419 46.2384 16.488C43.7066 14.0883 41.8036 11.1029 40.697 7.79478C39.9586 5.45625 40.653 3.50178 42.347 2.45098C44.1486 1.33521 46.1072 1.49196 47.8182 3.3238C50.4285 6.12242 52.618 9.22763 53.3557 13.062Z" />
                      <path d="M152.875 64.8372C152.824 63.1477 152.525 61.4751 151.985 59.8733C151.203 57.7487 149.793 56.3054 148.026 55.8204C146.239 55.3275 144.269 55.8604 142.482 57.3103C141.133 58.4031 139.812 59.597 138.537 60.7501C138.012 61.222 137.487 61.7011 136.962 62.1664L129.961 68.391C124.248 73.4697 118.532 78.5484 112.81 83.6265C112.4 83.9698 111.968 84.2855 111.516 84.5703C111.333 84.6918 111.145 84.8132 110.956 84.9484C110.828 85.0357 110.682 85.0928 110.529 85.1151C110.376 85.1381 110.22 85.1263 110.072 85.0797C109.923 85.0337 109.788 84.9536 109.675 84.846C109.563 84.7384 109.477 84.6058 109.424 84.4594C108.15 80.9723 106.909 77.5022 105.668 74.046C102.912 66.3668 100.057 58.4201 97.0702 50.7318C92.9083 40.0335 88.4439 29.6554 84.2493 20.0315C83.1545 17.7057 81.6672 15.5862 79.8518 13.7662C78.2195 12.0597 76.4323 11.9317 74.0649 13.3684C72.1365 14.5282 71.3135 16.5379 70.4432 18.6625L70.3625 18.8594C69.4928 20.9636 68.6324 23.0723 67.7798 25.1857C65.1695 31.5929 62.4719 38.2291 59.6057 44.6632C55.2738 54.3947 50.5883 64.1676 46.1573 73.345C44.6536 76.4606 43.0148 79.4548 41.2814 82.625C40.4938 84.0689 39.6898 85.5384 38.8871 87.0493C38.8223 87.1727 38.7329 87.281 38.6244 87.3677C38.5158 87.4543 38.3905 87.518 38.2563 87.5541C38.1221 87.5902 37.9818 87.598 37.8444 87.5777C37.707 87.5567 37.5752 87.5081 37.4576 87.4339L34.611 85.6461C32.8035 84.5198 31.158 83.4953 29.5192 82.4563C27.2128 80.9999 24.9062 79.5408 22.5994 78.0792C18.0812 75.2129 13.5581 72.3579 9.03026 69.514C8.01503 68.771 6.81172 68.3266 5.55691 68.2328C4.63274 68.2623 3.75076 68.6266 3.0753 69.258C1.08528 70.8896 0.525441 72.9066 1.36883 75.4276C1.90834 77.0526 2.63688 78.6718 3.33785 80.2431L3.37198 80.3087C3.9384 81.584 4.55862 82.8717 5.15195 84.1194C6.27166 86.4731 7.43864 88.9107 8.37589 91.4048C8.97618 92.9826 9.57876 94.5631 10.1834 96.1462C14.048 106.269 18.0405 116.736 20.6507 127.513C21.5342 131.169 23.6449 133.145 27.1045 133.556C28.0555 133.671 29.0079 133.792 29.951 133.914C33.8317 134.498 37.7484 134.812 41.6726 134.851C50.5883 134.737 59.6523 134.406 68.4204 134.089C72.2777 133.947 76.133 133.813 79.9864 133.685C86.3128 133.482 92.6392 133.288 98.965 133.105L106.229 132.882C106.815 132.868 107.402 132.848 107.996 132.835C108.636 132.821 109.284 132.801 109.931 132.781C112.177 132.715 114.423 132.625 116.668 132.545C122.182 132.343 127.871 132.133 133.482 132.1C136.072 132.086 137.9 131.181 139.242 129.26C140.167 127.85 140.87 126.306 141.326 124.681L142.054 122.293C145.028 112.555 148.097 102.479 149.904 92.2817C150.08 91.2899 150.262 90.3054 150.437 89.3137C151.877 81.3471 153.374 73.0916 152.875 64.8372ZM130.396 120.403C130.332 120.581 130.219 120.737 130.07 120.853C129.921 120.969 129.741 121.04 129.554 121.059C128.744 121.147 127.908 121.248 127.065 121.35C125.136 121.586 123.133 121.829 121.11 121.916C117.791 122.058 114.42 122.159 111.162 122.244C106.819 122.375 102.327 122.5 97.9228 122.743C92.7908 123.033 87.5703 123.458 82.5257 123.869C79.626 124.106 76.7257 124.342 73.826 124.55C69.5906 124.861 66.0562 125.11 62.3741 125.225C53.3029 125.515 44.0833 125.75 35.1676 125.981L30.7504 126.095H30.6487C30.2384 126.086 29.8299 126.038 29.4286 125.953C29.2934 125.926 29.1588 125.899 29.0302 125.887C28.8387 125.861 28.6589 125.78 28.5119 125.655C28.3649 125.529 28.2569 125.364 28.2006 125.179L16.4863 87.0743C16.424 86.878 16.4238 86.6667 16.4855 86.4698C16.5472 86.2729 16.668 86.1003 16.8314 85.9743C16.9947 85.8482 17.1929 85.7754 17.399 85.7662C17.605 85.7563 17.809 85.8102 17.9834 85.9204L19.5008 86.8583C20.5057 87.4786 21.4298 88.045 22.3401 88.6252C23.6348 89.4482 24.9298 90.2667 26.225 91.0799C29.4351 93.1099 32.7602 95.201 35.9637 97.3722C38.0135 98.7617 39.8079 99.2946 41.2847 98.9573C42.7286 98.6291 44.0026 97.4871 45.1695 95.4708L46.2197 93.6698C48.2025 90.2706 50.2529 86.75 51.9587 83.1684C57.6032 71.2716 63.2621 59.1323 68.7321 47.3904C70.8902 42.757 73.0528 38.1237 75.22 33.4905C75.4018 33.0966 75.5909 32.7145 75.8606 32.1822L76.3798 31.1367C76.4631 30.9612 76.597 30.8144 76.7637 30.7148C76.9311 30.6152 77.1234 30.5673 77.3177 30.577C77.5113 30.5817 77.6997 30.642 77.8598 30.7508C78.02 30.8597 78.1453 31.0123 78.2208 31.1905C79.0169 33.0657 79.8196 34.8798 80.6086 36.6604C82.3216 40.5328 83.9401 44.1868 85.323 47.9837C88.4859 56.6907 91.5812 65.5735 94.5826 74.1713C96.3022 79.0952 98.0291 84.021 99.7625 88.9481C100.619 91.4606 101.619 93.9218 102.757 96.3194C103.131 97.1943 103.705 97.9688 104.434 98.5805C105.163 99.1922 106.025 99.6234 106.952 99.84C108.766 100.198 110.681 99.5703 112.354 98.0797C114.896 95.8141 117.426 93.5274 119.955 91.2479C122.174 89.2448 124.392 87.2462 126.611 85.2523C129.437 82.7306 132.272 80.2142 135.115 77.7044L138.922 74.3387C139.063 74.2146 139.234 74.1313 139.418 74.0985C139.603 74.065 139.793 74.0834 139.968 74.1503L140.669 74.4266C140.883 74.5106 141.064 74.6649 141.179 74.8651C141.294 75.0653 141.338 75.2983 141.303 75.526C139.231 88.7453 136.318 104.419 130.396 120.403Z" />
                    </g>
                  </svg>
                  <h2 className="relative font-bold text-3xl md:text-5xl tracking-tight mt-4 mb-4 md:mb-8 ">Boost your app, launch, earn</h2>
                  <p className="relative text-lg text-base-content/80">Don 't waste time on Stripe subscriptions or designing a pricing section...</p>
                </div>
                <button className="btn btn-primary group btn-wide plausible-event-name=Checkout" title="Go to ShipFast Checkout">
                  <svg className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg">
                    <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
                  </svg>
                  Get ShipFast
                </button>
              </div>
            </section>
          </main>
          <footer className="bg-base-200 border-t border-base-content/10">
            <div className="max-w-7xl mx-auto px-8 py-24">
              <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                  <a aria-current="page" className="flex gap-2 justify-center md:justify-start items-center" href="/#">
                    <img alt="ShipFast logo" fetchpriority="high" width={24} height={24} decoding="async" data-nimg={1} className="w-6 h-6" style={{"color":"transparent"}} srcSet="/logo_transparent.2aa1e5a5.png 1x, /logo_transparent.2aa1e5a5.png 2x" src="/logo_transparent.2aa1e5a5.png" />
                    <strong className="font-extrabold tracking-tight text-base md:text-lg">ShipFast</strong>
                  </a>
                  <p className="mt-3 text-sm text-base-content/80 leading-relaxed">
                    Ship your startup in days, not weeks<br />Copyright © 
                    {/* */}
                    2025
                    {/* */}
                    - All rights reserved
                  </p>
                  <a className="inline-block mt-4 text-sm border border-base-content/20 hover:border-base-content/40 hover:text-base-content/90 hover:bg-base-300 duration-200 cursor-pointer rounded text-base-content/80 px-2 py-1" href="/">
                    <div className="flex gap-1 items-center">
                      <span>Built with</span>
                      <span className="font-bold text-base-content flex gap-0.5 items-center tracking-tight">
                        <img alt="ShipFast logo" fetchpriority="high" width={20} height={20} decoding="async" data-nimg={1} className="w-5 h-5" style={{"color":"transparent"}} srcSet="/logo_transparent.2aa1e5a5.png 1x, /logo_transparent.2aa1e5a5.png 2x" src="/logo_transparent.2aa1e5a5.png" />ShipFast
                      </span>
                    </div>
                  </a>
                  <div className="mt-8 space-y-2 md:hidden">
                    <p className="font-medium text-sm">We build together on Discord!</p>
                    <div>
                      <button className="btn text-white border-[#7289da] bg-[#7289da] hover:bg-[#596dac] active:bg-[#596dac] hover:border-[#596dac] active:border-[#596dac] btn-sm" title="Join Discord community">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                        </svg>
                        Join us
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
                  <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                    <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">LINKS</div>
                    <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                      <a className="link link-hover" href="/api/auth/signin">Login</a>
                      <a className="link link-hover" href="/index#pricing">Pricing</a>
                      <a href="mailto:hello@shipfa.st" target="_blank" className="link link-hover">Support</a>
                      <a className="link link-hover" href="/leaderboard">Leaderboard</a>
                      <a className="link link-hover" href="/docs">Documentation</a>
                      <a className="link link-hover" href="/affiliates">Affiliates — Earn up to $
                        {/* */}
                        124
                        {/* */}
                        per sale</a>
                      <div>
                        <button className="btn text-white border-[#7289da] bg-[#7289da] hover:bg-[#596dac] active:bg-[#596dac] hover:border-[#596dac] active:border-[#596dac] btn-sm max-md:hidden" title="Join Discord community">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                          </svg>
                          Join us
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                    <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">LEGAL</div>
                    <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                      <a className="link link-hover" href="/tos">Terms of services</a>
                      <a className="link link-hover" href="/privacy-policy">Privacy policy</a>
                      <a className="link link-hover" href="/license">Licenses</a>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                    <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">By the maker of ShipFast</div>
                    <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                      <a href="https://marclou.beehiiv.com/" target="_blank" className="link link-hover">Newsletter for makers</a>
                      <a href="https://byedispute.com/" target="_blank" className="link link-hover">ByeDispute</a>
                      <a href="https://indiepa.ge/" target="_blank" className="link link-hover">IndiePage</a>
                      <a href="https://zenvoice.io/" target="_blank" className="link link-hover">ZenVoice</a>
                      <a href="https://gamifylist.com/" target="_blank" className="link link-hover">GamifyList</a>
                      <a href="https://workbookpdf.com/" target="_blank" className="link link-hover">WorkbookPDF</a>
                      <a href="https://habitsgarden.com/" target="_blank" className="link link-hover">HabitsGarden</a>
                      <a href="https://poopup.co/" target="_blank" className="link link-hover">PoopUp</a>
                      <a className="link link-hover" href="/tools/fake-it-till-you-make-it">Fake It Till You Make It</a>
                      <a className="link link-hover" href="/tools/logo-fast">LogoFast</a>
                      <a className="link link-hover" href="/logo-idea">Logo inspiration</a>
                      <a href="https://codefa.st" target="_blank" className="link link-hover">CodeFast</a>
                      <a href="https://datafa.st" target="_blank" className="link link-hover">DataFast</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
            
export default HI;