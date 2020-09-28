import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Material UI
import Pagination from '@material-ui/lab/Pagination';
// Reducer
import { selectors, operations } from '../../reducers/movie';
// Style
import s from './Paginator.module.css';

const Paginator = () => {
  const count = useSelector(selectors.getCountPages);
  const page = useSelector(selectors.getCurrentPage);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (value === page) {
      return;
    }
    
    dispatch(operations.selectPage(value));

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={s.container}>
      <Pagination
        count={(count as number) || 0}
        page={page || 1}
        onChange={handleChange}
        className={s.paginator}
      />
    </div>
  );
};

export default Paginator;
