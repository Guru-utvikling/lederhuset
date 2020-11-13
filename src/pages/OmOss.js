import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  lol: {
    color: theme.palette.secondary.main,
  },
}))

const OmOss = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div>
      <p className={classes.lol}>Hello om oss</p>
    </div>
  )
}
export default OmOss
