import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import UploadIcon from '@material-ui/icons/CloudUpload'
import Dropzone from 'react-dropzone'

const styles = theme => ({
  container: {
    height: '150px',
    backgroundColor: grey[400],
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirecton: 'row',
    justifyContent: 'flex-start'
  },
  tile: {
    width: '200px',
    marginRight: theme.spacing.unit,
    cursor: 'pointer'
  }
})

const Tile = withStyles(styles)(({ children, classes }) => (
  <Paper className={classes.tile}>
    {children}
  </Paper>
))

const UploadButton = withStyles(styles)(({ onUpload, classes }) => (
  <Tile>
    <Dropzone
      className={classes.container}
      accept='text/plain'
      onDrop={(accepted, rejected) => {
        if (accepted) onUpload(accepted)
      }}>
      <UploadIcon />
    </Dropzone>
  </Tile>
))

const Selector = ({ mazes, onUploadMaze, classes }) => (
  <div className={classes.container}>
    {mazes.map((maze, index) => (
      <Tile key={index}>
        {maze}
      </Tile>
    ))}
    <UploadButton onUpload={onUploadMaze} />
  </div>
)

Selector.prototypes = {
  mazes: PropTypes.array.isRequired,
  onUploadMaze: PropTypes.func.isRequired
}

export default withStyles(styles)(Selector)
