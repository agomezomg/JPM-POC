import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import ClickableItem from './ClickableItem';


export default function SpacingGrid(props: any) {

  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'top',
      minHeight: '20vh',
      padding: '10rem 2rem 2rem 0',
      height: '89vh'
    }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={3}>
          <ClickableItem specifier={"add"} />
        </Grid>
        <Grid item xs={3}>
          <ClickableItem specifier={'edit'} />
        </Grid>
        <Grid item xs={3}>
          <ClickableItem specifier={'list'} />
        </Grid>
        <Grid item xs={3}>
          <ClickableItem specifier={'delete'} />
        </Grid>
      </Grid>
    </Box>
  );
}