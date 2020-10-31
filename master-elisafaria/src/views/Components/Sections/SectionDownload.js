/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import Info from "components/Typography/Info";
import Danger from "components/Typography/Info";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <hr />
          <GridContainer justify="center">
            <h3>Contacta con nosotros!!</h3>
          </GridContainer>
          <Button 
            href="https://www.instagram.com/uep.elisafaria/"
            color="instagram">
            <i className={classes.socials + " fab fa-instagram"} />
            siguenos
          </Button>
          <br />
          <Info>
            <h5>TELEFONOS</h5>
            <h6>(0416) 6618652 <br />
              <strong> Prof. Julio Cuica / <br />
                Administrador
              </strong>
            </h6>
            <h6>(0412) 0702360 <br />
              <strong> Prof. Rosaura Romero / 
                <br />Coordinación Académica
              </strong>
            </h6>
            <h6>(0416) 6611627 <br />
              <strong> Prof. Amalia Romero / <br />
                Control de Estudio
              </strong>
            </h6>
          </Info>
          <br />
        </div>
      </div>
    </div>
  );
}
