import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { uniqueClasses } from './utils';

const SwiperSlide = forwardRef(
  ({ tag: Tag = 'div', children, className = '', swiper, zoom, ...rest } = {}, externalRef) => {
    const slideElRef = useRef(null);
    const [slideClasses, setSlideClasses] = useState('swiper-slide');

    function updateClasses(swiper, el, classNames) {
      if (el === slideElRef.current) {
        setSlideClasses(classNames);
      }
    }

    useEffect(() => {
      if (externalRef) {
        externalRef.current = slideElRef.current;
      }
      if (!slideElRef.current || !swiper) return;
      if (swiper.destroyed) {
        if (slideClasses !== 'swiper-slide') {
          setSlideClasses('swiper-slide');
        }
        return;
      }
      swiper.on('_slideClass', updateClasses);
      // eslint-disable-next-line
      return () => {
        if (!swiper) return;
        swiper.off('_slideClass', updateClasses);
      };
    });

    return (
      <Tag
        ref={slideElRef}
        className={uniqueClasses(`${slideClasses}${className ? ` ${className}` : ''}`)}
        {...rest}
      >
        {zoom ? (
          <div
            className="swiper-zoom-container"
            data-swiper-zoom={typeof zoom === 'number' ? zoom : undefined}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </Tag>
    );
  },
);

SwiperSlide.displayName = 'SwiperSlide';

export { SwiperSlide };
