import { combineReducers, Dispatch } from 'redux';
// Reducers
import movie from './movie/reducer';

const rootReducer = combineReducers({
  movie,
});

export type TAppStateType = ReturnType<typeof rootReducer>;

export type TThunk<Args = null> = (
  args: Args
) => (dispatch: Dispatch, getState: () => TAppStateType) => void;

export default rootReducer;
