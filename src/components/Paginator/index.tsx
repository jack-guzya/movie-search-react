import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Material UI
import Pagination from '@material-ui/lab/Pagination';
// Reducer
import { selectors, operations } from '../../reducers/movie';
// Style
import s from './Painator.module.css';

const Paginator = () => {
  const count = useSelector(selectors.getCountPages);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (value === page) {
      return;
    }

    setPage(value);
    dispatch(operations.selectPage(value));

    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={s.paginator}>
      <Pagination count={(count as number) || 0} page={page} onChange={handleChange} />
    </div>
  );
};

export default Paginator;
