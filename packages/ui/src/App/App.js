import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import MazeSelector from './Maze/Selector'

const theme = createMuiTheme()
const styles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  contentContainer: {
    padding: theme.spacing.unit * 2
  }
})

class App extends Component {
  static propTypes = {
    mazes: PropTypes.array.isRequired,
    onUploadMaze: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  }

  state = {
    selectionsVisible: false
  }

  handleLoadClick = () => {
    this.setState({
      selectionsVisible: !this.state.selectionsVisible
    })
  }

  render () {
    const { loading, classes, mazes, onUploadMaze, children } = this.props
    const { selectionsVisible } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position='static'>
          <Toolbar className={classes.toolbar}>
            <Typography variant='title'>
              Maze Solver
            </Typography>
            <div>
              <Button onClick={this.handleLoadClick}>Load Maze</Button>
            </div>
          </Toolbar>
        </AppBar>
        <Collapse in={selectionsVisible}>
          <MazeSelector
            mazes={mazes}
            onUploadMaze={onUploadMaze}/>
        </Collapse>
        <div className={classes.contentContainer}>
          {children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
