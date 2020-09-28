import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// Material UI
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
// Reducer
import { selectors } from '../../reducers/movie';

const SearchInfo = () => {
  const message = useSelector(selectors.getMessage);
  const error = useSelector(selectors.getErrorSearchStatus);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  return (
    <Collapse in={open}>
      <Alert
        severity={error ? 'error' : 'success'}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default SearchInfo;
