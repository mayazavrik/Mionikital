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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const nextSlide = (): void => {
    sliderRef.current ? sliderRef.current.slickNext() : sliderRef;
  };

  const previousSlide = (): void => {
    sliderRef.current ? sliderRef.current.slickPrev() : sliderRef;
  };

  return (
    <div className='bigslider'>
      <Slider {...settings} ref={sliderRef}>
        {posts?.map((post) => <SliderItem key={post.id} post={post} />)}

        {/* {posts.map((post) => (
          <div className="posts_slide_container" key={post.id}>
            <div>
              <img src={post.img} alt="post" />
            </div>
            <div>{post.text}</div>
            <button type="button">
              <Link to={`/news/${post.id}`}>Посмотреть статью</Link>
            </button>
          </div>
        ))} */}
      </Slider>

      <button className='btn' onClick={previousSlide}>Previous</button>
      <button className='btn' onClick={nextSlide}>Next</button>
    </div>
  );
}
