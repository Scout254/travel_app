import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-white font-bold text-xl mb-4">Resources</h1>
          <ul className="text-gray-400">
            <li className="mb-2">Download</li>
            <li className="mb-2">Helper Center</li>
            <li className="mb-2">Guide Book</li>
            <li className="mb-2">App Directory</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl mb-4">Travelers</h1>
          <ul className="text-gray-400">
            <li className="mb-2">Why Travelers</li>
            <li className="mb-2">Enterprise</li>
            <li className="mb-2">Customer Stories</li>
            <li className="mb-2">Instagram Posts</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl mb-4">Company</h1>
          <ul className="text-gray-400">
            <li className="mb-2">Traveling</li>
            <li className="mb-2">About Location</li>
            <li className="mb-2">Success</li>
            <li className="mb-2">Information</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl mb-4">Get in Touch</h1>
          <p className="text-gray-400 mb-2">Feel free to get in touch with us via email:</p>
          <h2 className="text-white font-bold text-lg">@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
