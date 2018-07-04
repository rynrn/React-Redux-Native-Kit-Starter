import { combineReducers } from 'redux';
import { sceneReducer } from './scene';
import { configReducer } from './config';
import { postReducer } from './post';
import { userReducer } from './user';

 const rootReducer = combineReducers({
    scene: sceneReducer,
    config: configReducer,
    post: postReducer,
    user: userReducer
});

export default rootReducer;