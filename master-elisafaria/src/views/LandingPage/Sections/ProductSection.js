import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BookIcon from '@material-ui/icons/Book';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3>La Unidad Educativa Elisa Faria</h3>
          <h4 className={classes.description}>
            <strong>
              Ofrece a las familias las siguientes etapas educativas:
            </strong>
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Educación Básica Primaria."
              icon={SentimentVerySatisfiedIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Educación Media General."
              icon={EmojiEmotionsIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <h4>
              <strong>
                En el área académica, los estudiantes egresados obtienen el Título de Bachiller en Ciencias, capacitados para optar a los estudios de grado superior en las diferentes ramas del saber humano, la ciencia o la tecnología.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.description}>
              <strong>
                La institución facilita el futuro académico y profesional gracias a:
              </strong>
            </h3>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Una continúa atención al desarrollo personal de cada estudiante y a su evolución madurativa."
              icon={HowToRegIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Un método de trabajo en el que se cultiva el esfuerzo, la voluntad, el afán de superación, la constancia y la dedicación."
              icon={AccessibilityNewIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Una enseñanza de calidad."
              icon={BookIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}