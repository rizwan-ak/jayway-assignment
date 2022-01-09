import React, { useEffect, useRef, useState } from "react";
import "../styles/avatar.css";

export default function JWAvatar({ src }) {
  const observerRef = useRef();
  const imageEl = useRef();

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting) {
        setIsIntersecting(true);
        observerRef.current.disconnect();
      }

      return () => {
        observerRef.current.disconnect();
      };
    });

    observerRef.current.observe(imageEl.current);
  }, []);

  return (
    <img
      ref={imageEl}
      src={isIntersecting ? src : ""}
      alt="user-profile"
      className="profile-picture"
    />
  );
}
