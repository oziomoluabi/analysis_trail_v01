'use client';

import React from 'react';

/**
 * A placeholder component demonstrating the secure use of an environment variable for an API key.
 * This component shows how to access the key without hardcoding it.
 */
const MapComponent = () => {
  // SECURELY access the API key from environment variables.
  // Next.js automatically loads variables from .env.local into process.env.
  // The NEXT_PUBLIC_ prefix makes it available in the browser.
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // This is a simple check to see if the API key is loaded.
  // In a real application, you would pass this key to a mapping library
  // (e.g., Google Maps JavaScript API, @react-google-maps/api).
  const isApiKeyAvailable = apiKey && apiKey !== "PASTE_YOUR_NEW_VALID_GOOGLE_API_KEY_HERE";

  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-none">
      <h4 className="text-lg font-semibold text-teal-400 mb-4">State Location Analysis (Map Integration)</h4>
      {isApiKeyAvailable ? (
        <div className="aspect-w-16 aspect-h-9 bg-slate-700 text-slate-400 flex items-center justify-center">
          {/* 
            In a real application, this is where you would render your map.
            For example, you might have an iframe or a div that a script targets.
            Example of what the Google Maps embed URL would look like:
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Osogbo,Osun,Nigeria`}>
            </iframe>
          */}
          <div className="text-center p-4">
            <p className="text-green-400 font-bold">[SUCCESS] Google Maps API Key Loaded.</p>
            <p>Map would render here using the key from `.env.local`.</p>
            <p className="text-xs mt-2 text-slate-500">Key loaded: {`${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}`}</p>
          </div>
        </div>
      ) : (
        <div className="aspect-w-16 aspect-h-9 bg-red-900/50 border border-red-500 text-red-300 flex items-center justify-center p-4">
          <div className="text-center">
            <p className="font-bold">[ERROR] Google Maps API Key Not Found or Invalid.</p>
            <p className="mt-2 text-sm">Please make sure you have created a `.env.local` file in the project root and added your `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to it.</p>
            <p className="mt-2 text-xs">This is a security feature to prevent leaking secret keys.</p>
          </div>
        </div>
      )}
      <p className="text-xs text-slate-500 mt-4">
        This component demonstrates how to securely handle API keys. The key is stored in a local, un-committed `.env.local` file and accessed via `process.env`. It is never hard-coded in the source, preventing the security vulnerability you encountered.
      </p>
    </div>
  );
};

export default MapComponent;
