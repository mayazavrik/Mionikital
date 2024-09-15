import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import type { Post, PostId } from './types/Post';
import './style/slider.css';
import type { RootState } from '../../redux/store';
// import NewsItem from './NewsItem';
import SliderItem from './SliderItem';

export default function SliderBlock(): JSX.Element {
  const posts = useSelector((store: RootState) => store.news.posts);

  const sliderRef = useRef<Slider | null>(null);
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   arrows: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   centerPadding: '10px',
  //   centerMode: true, 
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    centerMode: true,
    centerPadding: '0px', // Уменьшите значение до нужного вам отступа
    slidesToShow: 2, // Количество видимых слайдов
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px', // Установите отступы для маленьких экранов
        },
      },
    ],
  };
  
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   arrows: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   centerMode: true, // Включите центрирование, если нужно
  //   centerPadding: '10px', // Отступ по бокам
  //   // Другие настройки
  // };
  
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, // Количество слайдов для больших экранов
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768, // На экранах меньше 768px
  //       settings: {
  //         slidesToShow: 1, // Показывать 1 слайд на маленьких экранах
  //         slidesToScroll: 1,
  //         infinite: false,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };


  return (
    <div className='bigslider'>
      <Slider {...settings} ref={sliderRef}>
        {posts?.map((post) => <SliderItem key={post.id} post={post} />)}

  
      </Slider>

    </div>
  );
}
