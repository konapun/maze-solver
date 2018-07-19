import {
  LOADING,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE
} from './app.constants'
import api from './Maze/maze.api'

/**
 * Dispatching this action will show/hide site-wide loading
 */
export const setLoading = isLoading => ({
  isLoading,
  type: LOADING
})

export const uploadSuccess = maze => ({
  maze,
  type: UPLOAD_SUCCESS
})

export const uploadFailure = error => ({
  error,
  type: UPLOAD_FAILURE
})

export const upload = file => {
  return async dispatch => {
    dispatch(setLoading(true))
    try {
      const maze = await api.uploadMaze(file)
      dispatch(uploadSuccess(maze))
    } catch (error) {
      dispatch(uploadFailure(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
