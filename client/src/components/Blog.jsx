import React, { useState } from "react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState({
    id: 1,
    title: "The Rise of Marvel and DC Comics in 2025",
    coverImage: "https://marvellunatics.com/wp-content/uploads/how-many-marvel-movies-are-there-deadpool-wolverine.jpg",
    content: [
      "The year 2025 marks an incredible journey for Marvel and DC Comics as they continue to redefine the superhero genre. With new storylines and unforgettable characters, these comic giants have captured the imagination of fans worldwide.",
      "Marvel's latest series, 'Multiverse Reimagined,' introduces bold narratives exploring alternate realities where beloved heroes face unimaginable challenges. Meanwhile, DC Comics’ 'Legacy of Justice' shines a spotlight on the next generation of superheroes.",
      "Not to be left behind, manga and anime comics have also gained tremendous traction globally. Series like 'Neo Samurai Chronicles' and 'Stellar Adventures' are setting benchmarks with their unique art styles and compelling storytelling.",
      "In conclusion, 2025 is a thrilling year for comic enthusiasts. Whether you are a fan of superhero epics or captivating manga, the comic world is brimming with excitement and creativity.",
    ],
  });

  const blogs = [
    {
      id: 1,
      title: "The Rise of Marvel and DC Comics in 2025",
      thumbnail: "https://marvellunatics.com/wp-content/uploads/how-many-marvel-movies-are-there-deadpool-wolverine.jpg",
      coverImage: "https://marvellunatics.com/wp-content/uploads/how-many-marvel-movies-are-there-deadpool-wolverine.jpg",
    },
    {
      id: 2,
      title: "Manga Comics Revolution: What to Expect in 2025",
      thumbnail: "https://www.romancing-japan.com/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx0c10dda%2Fproduction%2Fa9db777221e9bc1f2548a593ae22fd8c35a79db7-1900x1267.jpg&w=3840&q=75",
      coverImage: "https://www.romancing-japan.com/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fx0c10dda%2Fproduction%2Fa9db777221e9bc1f2548a593ae22fd8c35a79db7-1900x1267.jpg&w=3840&q=75",
    },
    {
      id: 3,
      title: "Anime-Inspired Comics: A Global Phenomenon",
      thumbnail: "https://jw-webmagazine.com/wp-content/uploads/2019/07/jw-5d1b565a3d9964.76324660.jpeg",
      coverImage: "https://jw-webmagazine.com/wp-content/uploads/2019/07/jw-5d1b565a3d9964.76324660.jpeg",
    },
    {
      id: 4,
      title: "Top 5 New Movies to Watch Out for in 2025",
      thumbnail: "https://preview.redd.it/what-do-you-think-was-marvels-best-year-for-movies-v0-0wl568renlo81.jpg?auto=webp&s=7c8327589c5035d62be550be6511285c2e5c08df",
      coverImage: "https://preview.redd.it/what-do-you-think-was-marvels-best-year-for-movies-v0-0wl568renlo81.jpg?auto=webp&s=7c8327589c5035d62be550be6511285c2e5c08df",
    },
  ];

  const handleBlogClick = (blog) => {
    const newContent = {
      1: {
        content: [
          "The year 2025 marks an incredible journey for Marvel and DC Comics as they continue to redefine the superhero genre. With new storylines and unforgettable characters, these comic giants have captured the imagination of fans worldwide.",
          "Marvel's latest series, 'Multiverse Reimagined,' introduces bold narratives exploring alternate realities where beloved heroes face unimaginable challenges. Meanwhile, DC Comics’ 'Legacy of Justice' shines a spotlight on the next generation of superheroes.",
          "Not to be left behind, manga and anime comics have also gained tremendous traction globally. Series like 'Neo Samurai Chronicles' and 'Stellar Adventures' are setting benchmarks with their unique art styles and compelling storytelling.",
          "In conclusion, 2025 is a thrilling year for comic enthusiasts. Whether you are a fan of superhero epics or captivating manga, the comic world is brimming with excitement and creativity.",
        ],
      },
      2: {
        content: [
          "The manga industry continues to dominate the global comic scene in 2025 with innovative storytelling and breathtaking artwork.",
          "Popular series such as 'Shogun Legacy' and 'Astro Warrior' have redefined manga's global appeal, blending traditional art with futuristic themes.",
          "As manga becomes more accessible, fans worldwide are falling in love with Japanese culture, with conventions dedicated to manga gaining popularity.",
          "Manga's rich history and boundless creativity ensure its future remains bright, with new artists stepping up to carry the torch forward.",
        ],
      },
      3: {
        content: [
          "Anime-inspired comics are breaking barriers in 2025, merging the worlds of anime and western-style graphic novels.",
          "'Kaze Chronicles' has become a fan favorite, combining emotional depth with breathtaking visuals.",
          "The fusion of anime and comics offers endless possibilities, with artists drawing inspiration from diverse cultures and genres.",
          "From space operas to slice-of-life stories, anime-inspired comics continue to expand their influence in the comic book world.",
        ],
      },
      4: {
        content: [
          "2025 is a year of innovation in comics, with several highly anticipated releases already making waves.",
          "Comics like 'Infinity Conquest' and 'Chronicles of the New Dawn' are pushing the boundaries of storytelling.",
          "From gripping superhero tales to emotionally resonant narratives, the top 5 new comics of 2025 promise to leave a lasting impact.",
          "Fans are eagerly awaiting these releases, and the buzz around them only continues to grow.",
        ],
      },
    };

    setSelectedBlog({ ...blog, content: newContent[blog.id].content });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start px-6 lg:px-12 py-8 gap-8">
      {/* Blog Content */}
      <div className="w-full lg:w-3/4 bg-white shadow-md rounded-lg p-6">
        <img
          src={selectedBlog.coverImage}
          alt={selectedBlog.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          {selectedBlog.title}
        </h1>
        <div className="text-gray-600 text-sm mt-2">
          <span>By Admin | </span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="mt-4 text-gray-700 space-y-4">
          {selectedBlog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-100 shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800">Other Blogs</h2>
        <ul className="space-y-4 mt-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="flex items-center space-x-4 cursor-pointer hover:bg-yellow-300 p-2 rounded-lg"
              onClick={() => handleBlogClick(blog)}
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <p className="text-gray-800">{blog.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
