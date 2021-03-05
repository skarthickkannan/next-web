import React from 'react';
import Card from './Card';
import slide from './Slider.module.css';

export default function Slider() {
  return (
    <div className={slide.container}>
      <div className={slide.mySlides}>
        <Card
          img="https://source.unsplash.com/random"
          h1="BRANDING"
          p="There are endless benefits of building and maintaining a strong brand. Having a strong brand works to build customer recognition."
        />
      </div>
      <div className={slide.mySlides}>
        <Card
          img="https://source.unsplash.com/random"
          h1="ILLUSTRATIONS"
          p="You can develop a style for your business which complements your branding. The illustration can convey our idea better then words."
        />
      </div>
      <div className={slide.mySlides}>
        <Card
          img="https://source.unsplash.com/random"
          h1="MARKETING"
          p="Service based businesses live or die on their expertise and how well they can communicate that to their audience."
        />
      </div>
      <div className={slide.mySlides}>
        <Card
          img="https://source.unsplash.com/random"
          h1="SEO STRATEGY"
          p="If you’re a business owner you need to know about SEO. That’s because today, it’s an essential part of any successful marketing strategy."
        />
      </div>
      <div className={slide.mySlides}>
        <Card
          img="https://source.unsplash.com/random"
          h1="UX & UI"
          p="Successful user experience and design provide a competitive advantage. They will likely overtake price as key brand differentiation that attract new customers."
        />
      </div>
      <div className={slide.mySlides}>
        <Card
          img="https://source.unsplash.com/random"
          h1="MOBILE APP DEVELOPMENT"
          p="Mobile apps are becoming increasingly popular among businesses. Mobile apps have proven to be quick and effective in engaging customer interest."
        />
      </div>
    </div>
  );
}
