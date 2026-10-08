import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './Lanyard.jsx';

const badges = [
  ['aboutLanyardMountOne', 'lanyard.jpeg', 0.40, 1.7, 0.01, -0.04],
  ['aboutLanyardMountTwo', 'lanyard1.jpeg', 0.40, 2, 0.035, -0.2]
];

for (const [mountId, image, size, imageZoom, imageOffsetX, imageOffsetY] of badges) {
  const mount = document.getElementById(mountId);
  if (!mount) continue;

  createRoot(mount).render(
    <Lanyard
      frontImage={image}
      backImage={image}
      imageFit="cover"
      imageZoom={imageZoom}
      imageOffsetX={imageOffsetX}
      imageOffsetY={imageOffsetY}
      orientation="portrait"
      finish="glossy"
      cardColor="#e9f1fa"
      strapColor="#314861"
      strapWidth={0.62}
      strapLength={0.6}
      size={size}
      gravity={0.9}
      damping={0.52}
      elasticity={0.5}
      breeze={0.15}
      interactive
      intro
    />
  );
}
