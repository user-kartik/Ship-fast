import React from 'react';
import { BsPlay, BsStarFill } from 'react-icons/bs';

const videos = [
  "https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.mp4",
  "https://d1wkquwg5s1b04.cloudfront.net/landing/alex.mp4",
  "https://d1wkquwg5s1b04.cloudfront.net/landing/larry.mp4",
  "https://d1wkquwg5s1b04.cloudfront.net/landing/tam.mp4",
  "https://d1wkquwg5s1b04.cloudfront.net/landing/mateuszTestimonial.mp4",
];

const placeholderImages = [
  "https://www.shutterstock.com/image-photo/investor-analyzing-stock-market-investments-financial-540603541",
  "https://t4.ftcdn.net/jpg/10/34/52/43/360_F_1034524342_AqgOCECIkh4Gifhz7P42HsmBWDkn1Erm.jpg",
  "https://media.gettyimages.com/id/1170200174/vector/stock-market-price-chart.jpg?s=612x612&w=gi&k=20&c=mtKqw3zkFBVtxa8WxWeGFvKh8VOIWmziHG4uvqk_uWs=",
  "https://cdn.pixabay.com/photo/2013/07/18/10/59/pulse-trace-163708_1280.jpg",
  "https://www.orbitmedia.com/wp-content/uploads/2022/09/3-How-long-does-it-take-to-write-a-typical-blog-post_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWMuu8oriY1RISyA6C4wCuGP6aOA-Xy3pUQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqJSMY0wOhxtDh0E9SWnXk0DiZ_u9DhwMwA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9ItuQl5cFiWED1RUZ6CECE3aqL-Uv6-dXA&s",
  "https://d33v4339jhl8k0.cloudfront.net/docs/assets/588089eddd8c8e484b24e90a/images/5fa52df54cedfd001610a54b/file-tYdhwbUMhw.png",
  "https://forum.obsidian.md/uploads/default/original/3X/2/6/26693a96a519dac4292984e8601011e0e05e6dc6.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCjoFsj_cp-hJWj0JqwuL0eqb2lv9FJmVng&s",
];

// Shuffle function to randomize the order of items
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
};

const G = () => {
  // Create a combined array of videos and placeholder images
  const combinedItems = [...videos, ...placeholderImages];
  shuffleArray(combinedItems); // Shuffle the combined items

  return (
    <div className="bg-zinc-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-zinc-100 text-2xl font-bold">
            6187 makers built AI tools, SaaS, and more
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {combinedItems.map((item, i) => (
            <div key={i} className="bg-zinc-800/50 rounded-lg p-4 relative">
              {i % 2 === 0 && (
                <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                  <BsPlay className="text-white" />
                </div>
              )}

              {/* Render either a video or an image depending on the type */}
              {item.endsWith('.mp4') ? (
                <video
                  src={item}
                  controls
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
              ) : (
                <img
                  src={item}
                  alt="Placeholder"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
              )}

              <div className="flex items-start gap-2 mb-2">
                <img
                  src="/api/placeholder/40/40"
                  alt="Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-zinc-400 text-sm line-clamp-3">
                    Just launched my SaaS project using ShipFast! Amazing experience.
                  </p>
                </div>
              </div>

              {i % 4 === 0 && (
                <div className="flex gap-1 mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <BsStarFill key={i} className="text-yellow-400 text-xs" />
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default G;
