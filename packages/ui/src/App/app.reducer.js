import {
  LOADING,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE
} from './app.constants'

const initialState = {
  loading: false,
  mazes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.loading }
    case UPLOAD_SUCCESS:
      return { ...state, mazes: [ ...state.mazes, action.maze ]}
    case UPLOAD_FAILURE:
    default:
      return state
  }
}
