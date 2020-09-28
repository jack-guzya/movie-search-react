import React from 'react';
// Style
import s from './Detail.module.css';

type TProps = {
  list: Array<[string, string]>;
};

const Details: React.FC<TProps> = ({ list }) => (
  <>
    {list.map(([name, detail]) => (
      <h3 key={name} className={s.container}>
        <span className={s.heading}>{name}: </span>
        {detail}
      </h3>
    ))}
  </>
);

export default Details;
