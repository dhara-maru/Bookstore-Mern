import React from "react";

const Contact = () => {
  const imageUrls = [
    "https://fox5sandiego.com/wp-content/uploads/sites/15/2022/07/GettyImages-1242046127.jpg?w=900",
    "https://portsmouthcomiccon.com/wp-content/uploads/2024/05/Vernon-Nash_Comic-Con-2024_025-1.jpg",
    "https://i.ytimg.com/vi/f5CSDXm2rck/maxresdefault.jpg",
    "https://media.assettype.com/thenewsminute%2F2024-01%2F1057ebea-ec70-4241-94bb-6755287e2230%2FHyderabad_Comic_Con_2019.jpeg?w=480&auto=format%2Ccompress&fit=max",
    "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2017/11/01165934/01112017_comiccon_02.jpg",
    "https://staticg.sportskeeda.com/editor/2023/02/91fb9-16764113496732-1920.jpg",
    "https://mir-s3-cdn-cf.behance.net/projects/404/67fa33169991965.Y3JvcCwxMDQwLDgxNCwyNjUsMTY0.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicaJDeOyhH-8myXdnXCAsImUTQuLiSRO2ug&s",
    "https://nodwingaming.com/wp-content/uploads/2024/08/Stage-sessions.jpg",
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8 md:px-16 bg-gray-100">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
        {/* Google Map */}
        <div className="h-96 w-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8776215319156!2d72.83064831490133!3d18.92682668717624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7b4f663b97%3A0x1e7bd2cb68247c13!2sKala%20Ghoda%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1684190651541!5m2!1sen!2sin"
            className="w-full h-full rounded-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-2 h-96">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Grid Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-12 text-center">
        {/* Contact Info */}
        <div
          className="bg-white shadow-md border-3 border-black p-4"
          style={{
            boxShadow: "10px 6px 0px black",
          }}
        >
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600">Phone: +91 98765 43210</p>
          <p className="text-gray-600">Email: support@comiccon.com</p>
        </div>

        {/* Address */}
        <div
          className="bg-white shadow-md border-3 border-black p-4"
          style={{
            boxShadow: "10px 6px 0px black",
          }}
        >
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p className="text-gray-600">Kala Ghoda, Fort</p>
          <p className="text-gray-600">Churchgate, Mumbai 400001</p>
        </div>

        {/* Social Links */}
        <div
          className="bg-white shadow-md border-3 border-black p-4"
          style={{
            boxShadow: "10px 6px 0px black",
          }}
        >
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center space-x-4 text-yellow-500">
            <a href="#facebook" className="hover:text-blue-700">
              Facebook
            </a>
            <a href="#twitter" className="hover:text-blue-700">
              Twitter
            </a>
            <a href="#instagram" className="hover:text-blue-700">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
