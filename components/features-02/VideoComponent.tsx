"use client";

import { useEffect, useState } from "react";

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: string;
  ariaHidden?: boolean;
}

const VideoComponent = ({
  src,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
  ariaHidden = true,
}: VideoProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={className} aria-hidden={ariaHidden}>
        {/* Placeholder or loading state */}
      </div>
    );
  }

  return (
    <video
      className={className}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      aria-hidden={ariaHidden}
      suppressHydrationWarning
    />
  );
};

export default VideoComponent;