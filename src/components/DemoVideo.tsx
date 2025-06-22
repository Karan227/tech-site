import React from 'react';

const DemoVideo = () => (
  <section id="demo-video" className="py-20 bg-white flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-8 text-gray-900">Watch Our Demo</h2>
    <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/nf0f-iZpqEc?si=nyG1Allp2VkNQ1Cg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default DemoVideo;