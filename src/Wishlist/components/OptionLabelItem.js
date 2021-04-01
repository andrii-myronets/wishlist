import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

const OptionLabelItem = ({ item }) => {
  return (
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Box display="flex" alignItems="center">
            <Avatar alt={item.name} src={item.avatar} />
            <Typography component="span">{item.name}</Typography>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box display="flex" alignItems="center">
            <Avatar alt={item.author.firstName + ' ' + item.author.lastName} src={item.author.avatar} />
            <Typography component="span">{item.author.firstName + ' ' + item.author.lastName}</Typography>
          </Box>
        </Grid>
      </Grid >
  )
}

export default OptionLabelItem;