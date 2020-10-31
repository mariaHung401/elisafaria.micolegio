import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ListIcon from '@material-ui/icons/List';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import horario from "assets/img/colegio/horario.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>La Unidad Educativa Elisa Faria</h3>
            <h4 className={classes.description}>
              <strong>Materias ofertadas según la etapa educativa:</strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={10}>
            <NavPills
              color="primary"
              tabs={[
                {
                  tabButton: "Educación Básica Primaria",
                  tabIcon: ListIcon,
                  tabContent: (
                    <span>
                      <h4>
                        <strong>Lenguaje</strong>
                      </h4>
                      <h4>
                        <strong>Matemáticas</strong>
                      </h4>
                      <h4>
                        <strong>Ciencias Naturales</strong>
                      </h4>
                      <h4>
                        <strong>Ciencias Sociales</strong>
                      </h4>
                      <h4>
                        <strong>Educación Artísticas</strong>
                      </h4>
                      <h4>
                        <strong>Lengua extranjera</strong>
                      </h4>
                      <h4>
                        <strong>Educación Física y Deporte </strong>
                      </h4>
                      <h4>
                        <strong>Formación Moral y Cívica</strong>
                      </h4>
                      <h4>
                        <strong>Educación Religiosa</strong>
                      </h4>
                    </span>
                  ),
                },
                {
                  tabButton: "Educación Media General",
                  tabIcon: ListIcon,
                  tabContent: (
                    <span>
                      <img src={horario} />
                    </span>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}