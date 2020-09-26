import { combineReducers, Dispatch } from 'redux';
// Reducers
import movie from './movie/reducer';

const rootReducer = combineReducers({
  movie,
});

type TAppStateType = ReturnType<typeof rootReducer>;

export type TThunk<Args = null, P = {}> = (
  args: Args
) => (dispatch: Dispatch, getState: () => TAppStateType) => Promise<P>;

export default rootReducer;
