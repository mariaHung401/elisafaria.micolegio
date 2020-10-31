import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import Carousel from "react-slick";

import Card from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import NavPills from "components/NavPills/NavPills.js";
import Button from "components/CustomButtons/Button.js";

import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import ClassIcon from "@material-ui/icons/Class";
import HouseIcon from "@material-ui/icons/House";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WcIcon from '@material-ui/icons/Wc';
import Favorite from "@material-ui/icons/Favorite";
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";

import image1 from "assets/img/colegio/facahda-entrada.jpg";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <div className={classes.typo}>
            <h3>Reseña Histórica</h3>
          </div>
          <br />
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <NavPills
              color="info"
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 },
              }}
              tabs={[
                {
                  tabButton: "Historia",
                  tabIcon: HouseIcon,
                  tabContent: (
                    <span>
                      <h4>
                        La Unida Educativa Elisa Faria está situada en la avenida 7, calle N, Nº 7-11, sector 18 de octubre, Fue creada para el año 1960,  siendo siempre una dependencia privada, ubicada en una zona urbana del municipio Maracaibo, parroquia Coquivacoa; siendo su población estudiantil de la zona.
                      </h4>
                      <h4>
                        “Elisa Faria”, Oriunda de Maracaibo, desde temprana edad dio demostración de talento claro. Hoy en día su meta es seguir la labor de esa ilustre maestra, que solamente dejo en el mundo sus ganas de brindar educación y no dejar que nuestros niños se hundan en la ignorancia. Esta escuela funcionaba primera años en la inmediaciones de valle frío, dirigida por la Señora Carmen Cegarra, amiga de siempre de la maestra Elisa, está en honor a su maravillosa labor dio el nombre es este colegio, luego pasando a manos de la señora Aura  de Sulbarán.
                      </h4>
                    </span>
                  ),
                },
                {
                  tabButton: "Leer más",
                  tabIcon: MenuBookIcon,
                  tabContent: (
                    <span>
                      <h4>
                        Para el año 1995, la señora Aura Sulbarán, pone en manos de su hija la licenciada Ingrid Sulbarán, la dirección y  administración de la Unidad Educativa Elisa Faria. A partir del año 1996, comienza a funcionar la tercera etapa de educación básica (hoy Educación Media), y en el periodo 2001-2002 la educación diversificada (hoy Educación Media General).
                      </h4>
                      <h4>
                        En la actualidad el plantel consta de Once (6) secciones de Educación Primaria comprendidas de 1º a 6º grado; nueve (06) secciones de Educación Media (1º a 3er.Año) y Seis (04) de Educación Media General Mención Ciencias; el plantel cuenta con 17 aulas; una  Dirección, Subdirección, Administración, Tres (03) Coordinaciones, orientación, biblioteca, laboratorio, baños (hembras y varones y personal docente), cantina, comedor y una cancha techada. 
                      </h4>
                    </span>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
        <br />
        <GridContainer justify="center" xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} lg={6}>
            <span>
              <h3 className={classes.title}>Misión</h3>
              <br />
              <h4>
                Facilitar el desarrollo integral de los niños y jóvenes en nuestro plantel, preparándolos pedagógicamente, social y moralmente para que se desempeñe en los diferentes campos laborales.                      
              </h4>
            </span>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6}>
            <span>
              <h3 className={classes.title}>Visión</h3>
              <h4>
                Dirigida hacia la búsqueda constante de nuevas estrategias, herramientas, metas que nos permitan avanzar en los procesos educativos, contribuyendo a todos los procesos de enseñanza-aprendizaje incorporándolos a la tecnología de punta que nos permita competir a nivel regional y nacional.                      
              </h4>
              <br />
            </span>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={8}>
            <h2 className={classes.title}>Valores</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Respeto"
                icon={FavoriteBorderIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={125} sm={5} md={3}>
              <InfoArea
                title="Compromiso"
                icon={LocalLibraryIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Responsabilidad"
                icon={EmojiPeopleIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Confianza"
                icon={InsertEmoticonIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Solidaridad"
                icon={SupervisorAccountIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Tolerancia"
                icon={SportsKabaddiIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Trabajo en equipo"
                icon={GroupAddIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Dedicación y esfuerzo"
                icon={MenuBookIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Espíritu crítico"
                icon={RecordVoiceOverIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Gusto por el trabajo bien hecho"
                icon={FontDownloadIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Compañerismo"
                icon={ThumbUpIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Integración familiar"
                icon={WcIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={3}>
              <InfoArea
                title="Innovación"
                icon={StarBorderIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <div className={classes.typo}>
              <h3>Actividades que la institución ofrece</h3>
            </div>
            <br />
            <GridItem xs={12} sm={12} md={10}>
              <h4>
                <strong>La Unidad Educativa Elisa Faria</strong> tiene como  finalidad contribuir al desarrollo integral de los niños, niñas y jóvenes; colaborando en su proceso de integración a la vida social, habilitándolos para la participación responsable en la vida ciudadana y protagonismo en el desarrollo de su propio proyecto de vida, considerando la influencia evidente del estudio en el modo de entender el mundo y el hombre, en la forma de buscar el bien, la verdad y la belleza real. La formación intelectual que proporciona la institución supone un verdadero desarrollo de la inteligencia, en el que cada área de formación contribuye, con su saber específico y propio, a la formación de personalidades maduras. Esta misión cobra cada día más importancia ya que la vida social está en permanente transformación y, por tanto, las formas de participación y de vivir en sociedad varían y se hacen más diversas.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
