import React from 'react';
import { Grid } from '@material-ui/core';
import Wishlist from './Wishlist/components/Wishlist';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';

function App() {
  return (
    <>
      <header>
        <MenuBookRoundedIcon color="primary" style={{ fontSize: 60 }} />
      </header>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Wishlist />
      </Grid>
      <footer>
        <CopyrightRoundedIcon fontSize="small" />Myronets test task 2021
      </footer>
    </>
  );
}

export default App;
