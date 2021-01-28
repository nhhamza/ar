import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
// import axios from 'axios';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/Header';
import Astronaut from '../../assets/models/Astronaut.glb';
// import NireekaLowPoly from '../../assets/models/Nireeka_lowPoly.gltf';
// import Bicycle from '../../assets/models/bicycle.gltf';
import Bicycle from '../../assets/models/bicycle.glb';

// import Logo from '../../assets/images/logo.png';
// import t from '../../constants/translates';
import styles from './style.jsx';
import './style.scss';

const Home = () => {
  const classes = makeStyles(styles)();
  const [isLoading, setIsLoading] = useState(false);

  // const fetchData = () => {
  //   if (isLoading) {
  //     return;
  //   }
  //   setIsLoading(true);
  //   setCurrentPage(currentPage + 1);
  //   axios
  //     .get()
  //     .then(response => {
  //       setIsLoading(false);
  //     });
  // };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const printLoader = () => {
    return (
      <div className="progress__container">
        <LinearProgress />
      </div>
    );
  };

  return (
    <>
      {isLoading && printLoader()}
      <Header />
      <Grid container spacing={2} className={classes.resultsContainer}>
        <Grid item xs={12}>
          <div>
            <model-viewer
               style={{width: "100%"}}
              src={Astronaut}
              alt="A 3D model of an astronaut"
              auto-rotate
              camera-controls
            ></model-viewer>
            <model-viewer
              src={Bicycle}
              alt="A 3D model of an Bicycle"
              auto-rotate
              camera-controls
            ></model-viewer>
            <model-viewer
              id="model-viewer"
              src={Bicycle}
              alt="Nireeka"
              auto-rotate-delay="0"
              auto-rotate
              camera-controls
              background-color="grey"
              shadow-intensity="1"
            >
              <div id="error" className="hide">
                AR is not supported on this device
              </div>
            </model-viewer>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(Home);
