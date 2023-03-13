import React from 'react';
import SendIcon from '@mui/icons-material/Send';

function NewsLetter() {
  return (
    <div className="max-w-sm mx-auto my-10 bg-white rounded p-6 shadow-md">
      <h1 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h1>
      <p className="text-gray-600 mb-4">Receive the latest news, updates, and more every week.</p>
      <div className="flex items-center">
        <input type="text" placeholder='Enter your email address' className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-4 mr-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
