import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";
import React, { useRef } from "react";

export const About: NextPage = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const image = imageRef.current;
    if (image) {
      const { clientX, clientY } = event;
      const { top, left, width, height } = image.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;

      const rotationX = -(y / height - 0.5) * 30;
      const rotationY = (x / width - 0.5) * 30;

      image.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
  };
  return (
    <>
      <div onMouseMove={handleMouseMove} className="about_right">
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          ref={imageRef}
          className="about_right_profilePic"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="about_left"
      >
        <h1 className="about_left_head">Hi, I&apos;m Akash Viswakarma</h1>
        <p className="about_left_text">
          Hi! I am Akash Vishwakarma From Rewa, Madhya Pradesh. I am Computer Science Engineering
          Graduate (2024) .
        </p>
        <div className="about_left_socialMedia">
        
        </div>
      
      </div>
    </>
  );
};
