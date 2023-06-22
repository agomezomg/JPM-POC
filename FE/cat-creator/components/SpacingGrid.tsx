import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import ClickableItem from './ClickableItem';


export default function SpacingGrid(props: any) {

  return (
    <>
      <Box sx={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'top',
        minHeight: '20vh',
        padding: '10rem 2rem 2rem 0',
        height: '89vh'
      }}>
        <Typography
          variant="h2"
          noWrap
          sx={{
            margin: 2,
            padding: 0,
            justifyContent: 'center',
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Welcome to the Kittyndex!
        </Typography>
        <Typography
          variant="body1"
          noWrap
          sx={{
            margin: 2,
            padding: 0,
            justifyContent: 'center',
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          ...if Pokémon have one, why can't I?
        </Typography>
        <Grid sx={{ flexGrow: 1, flexWrap: 'wrap'}} container spacing={1}>
          <Grid item container xs={12} md={6} >
            <ClickableItem specifier={"add"} />
          </Grid>
          <Grid item container xs={12} md={6} >
            <ClickableItem specifier={'list'} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}