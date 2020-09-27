import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames';
// Styles
import noPoster from './no_poster.png';
import s from './Poster.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

type TProps = {
  url: string;
  title: string;
};

const Poster: React.FC<TProps> = ({ url, title }) => {
  const [isError, setErrorStatus] = useState(false);
  const posterClass = classNames(s.poster, { [s.placeholder]: isError });

  return (
    <div className={posterClass}>
      {!isError ? (
        <LazyLoadImage
          className={s.media}
          height="100%"
          effect="blur"
          placeholderSrc={noPoster}
          alt={title}
          src={url}
          onError={() => setErrorStatus(true)}
        />
      ) : null}
    </div>
  );
};

export default Poster;
