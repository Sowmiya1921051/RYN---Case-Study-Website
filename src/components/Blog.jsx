import React from 'react';
import Img1 from '../assets/Img1.png'; // Replace with actual image paths
import Img2 from '../assets/Img2.png';  // Replace with actual image paths
import Img3 from '../assets/Img3.png';  // Replace with actual image paths
const blogPosts = [
  {
    image: Img1,  // Replace with actual image paths        
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX'],
  },
  {
    image: Img2,
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT'],
  },
  {
    image: Img3,
    date: 'Feb 16, 2023',
    title: '3 ways to develop your skill',
    tags: ['FIGMA', 'WEB'],
  },
];

const Blog = () => {
  return (
    <section className="bg-[#0b0b0d] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            <span className="mr-2">✺</span>Blog
          </h2>
          <a href="#" className="text-sm underline hover:text-gray-400">
            view all
          </a>
        </div>

        {/* Blog List */}
        <div className="space-y-10">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-56 h-48 object-cover rounded-2xl"
              />

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-white text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Button */}
              <button className="bg-white text-black font-medium px-6 py-2 rounded-full">
                Read
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
