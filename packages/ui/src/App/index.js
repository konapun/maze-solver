import { connect } from 'react-redux'
import { upload } from './app.actions'
import App from './App'

const mapStateToProps = ({ loading, mazes }) => ({
  loading,
  mazes
})

const mapDispatchToProps = {
  onUploadMaze: upload
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
