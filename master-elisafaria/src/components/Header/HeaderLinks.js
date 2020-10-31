/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from '@material-ui/icons/Home';

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/">
          <Button color="info" round>
            <HomeIcon className={classes.icons} /> Pagina de Inicio
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
