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
import styles from '../styles/Home.module.css'

export default function SpacingGrid(props: any) {

  return (
    <div className={styles.container}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '910px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop:'20px',
        paddingBottom:'20px',
      }}>
        <Typography
          variant="h2"
          sx={{
            textAlign:'center',
            margin: 2,
            padding: 0,
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
            fontSize:{xs:'2rem', md:'3.75rem'}
          }}
        >
          Welcome to the Kittyndex!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign:'center',
            margin: 2,
            padding: 0,
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          ...if Pokémon have one, why can't I?
        </Typography>
        <Grid container spacing={1} sx={{marginLeft:'auto', marginRight:'auto'}}>
          <Grid item xs={12} md={6}>
            <ClickableItem specifier={"add"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ClickableItem specifier={'list'} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}