import React, { useState, useEffect, useRef } from 'react';

function Video({ url }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
},[])

  return (
    <div style={{ maxWidth: '100%', textAlign: 'center' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
        <iframe
          src='https://media.istockphoto.com/id/1301971858/video/the-wizard-prepares-for-a-magic-ritual-in-his-ancient-castle-the-animation-is-for-fantasy.jpg?s=640x640&k=20&c=4eThUji6wKwNLJTfPqAFc9wXl9O717t0yxJoeQ_qUwQ=' // Disable controls in iframe
          frameBorder="0"
          allowFullScreen
          title="Video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
