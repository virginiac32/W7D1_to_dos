
import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../actions/error_actions";
import merge from 'lodash/merge';

const initialState=[];

const errorsReducer = ( state=initialState,action) =>{
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default: return [];
  }
};

export default errorsReducer;
