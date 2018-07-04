import { ConfigActions } from '../constants/action-types';

export const featchDataPending = () => ({ type: ConfigActions.CONFIG_PENDING });
export const featchDataFailure = () => ({ type: ConfigActions.CONFIG_FAILURE });
export const featchDataSuccess = (payload) => ({ type: ConfigActions.CONFIG_SUCCESS, payload });

export function featchData () {
    return function (dispatch) {
        dispatch(featchDataPending());
        setTimeout(() => {
            dispatch(featchDataSuccess({ name: 'foo' }));
        }, 2000);
    };
  }

