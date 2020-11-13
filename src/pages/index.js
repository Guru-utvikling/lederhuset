import React from "react"

import Layout from "../components/Layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"

import StarIcon from "@material-ui/icons/Star"
import InfoIcon from "@material-ui/icons/Info"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Done from "@material-ui/icons/Done"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch (id) {
      case "features":
        setFeatures(!features)
        break
      case "info":
        setInfo(!info)
        break
    }
  }

  return (
    <Layout>
      <SEO title='Home' />
      <Grid container spacing={3} justify='center'>
        <h1>MainPagegit </h1>
      </Grid>

    </Layout>
  )
}

export default IndexPage
