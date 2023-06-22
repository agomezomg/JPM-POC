import styles from '../../styles/Home.module.css'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButton } from '@mui/material';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { color } from '@mui/system';

const textFieldStyle = {
  width: '100%',
  "& label": {
    color: "white"
  },
  "& label.Mui-focused": {
    color: "#483248"
  },
  "& .MuiOutlinedInput-input": {
    color: "white"
  },
  "& .MuiOutlinedInput-root": {
    "input": {
      color: "white"
    },
    "& fieldset": {
      borderColor: "white"
    },
    "&:hover fieldset": {
      borderColor: "#673147"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#483248"
    }
  }
}

const availableColors = ['black','calico','tux','tabby'];

export default function AddCatForm() {
  const [name, setName] = useState<string | null>('');
  const [hygiene_score, setHygieneScore] = useState<Number | null>(0);
  const [happiness, setHappiness] = useState<Number | null>(0);
  const [colorSelected, setColorSelected] = useState<string | null>('black');
  const router = useRouter();

  const handleColor = (
    event: React.MouseEvent<HTMLElement>,
    newColor: string | null,
  ) => {
    if (availableColors.find((colour)=> colour === newColor))
      setColorSelected(newColor);
  };

  const handleHygieneScore = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const score = event.currentTarget.valueAsNumber
    setHygieneScore(score);
  };

  const handleHappiness = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const happinessScore = event.currentTarget.valueAsNumber
    setHappiness(happinessScore);
  };

  const handleName = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const name = event.currentTarget.value
    setName(name);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cat = {
      name,
      hygiene_score,
      happiness,
      colour: colorSelected
    }

    // router.push('/');
  }

  return (
    <div className={styles.container}>
      <Typography
        variant="h2"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 200,
          letterSpacing: '.1rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Cat Create Form
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'grid',
          verticalAlign: 'center',
          '& .MuiTextField-root': { marginTop: 2 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="name"
          label="Name"
          placeholder="Roberta"
          value={name}
          onChange={handleName}
          sx={textFieldStyle}
        />
        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          <Grid item xs={4} >
            <TextField
              required
              id="age"
              label="Age"
              type="number"
              placeholder="Hello World"
              sx={textFieldStyle}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="hygiene_score"
              label="Hygiene Score"
              value={hygiene_score}
              type="number"
              placeholder="100"
              onChange={handleHygieneScore}
              sx={textFieldStyle}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="happiness"
              label="Happiness Score"
              value={happiness}
              placeholder="100"
              type='number'
              sx={textFieldStyle}
              onChange={handleHappiness}
            />
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          noWrap
          sx={{
            mr: 2,
            mb: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Select a colour:
        </Typography>
        <ToggleButtonGroup
          value={colorSelected}
          exclusive
          onChange={handleColor}
          aria-label="cat colour"
        >
          <ToggleButton value="black" aria-label="black colour">
            <Box
              sx={{
                width: 200,
                height: 100
              }}
            >
              <div className='relativePosition'>
                <Image
                  alt='Black Cat'
                  fill={true}
                  style={{ objectFit: "cover" }}
                  src='/black.png'
                />
              </div>
            </Box>
          </ToggleButton>
          <ToggleButton value="calico" aria-label="calico colour">
            <Box
              sx={{
                width: 200,
                height: 100
              }}
            >
              <div className='relativePosition'>
                <Image
                  alt='calico'
                  fill={true}
                  style={{ objectFit: "cover" }}
                  src='/calico.png'
                />
              </div>
            </Box>
          </ToggleButton>
          <ToggleButton value="tux" aria-label="tux colour">
            <Box
              sx={{
                width: 200,
                height: 100
              }}
            >
              <div className='relativePosition'>
                <Image
                  alt='tux'
                  fill={true}
                  style={{ objectFit: "cover" }}
                  src='/tux.png'
                />
              </div>
            </Box>
          </ToggleButton>
          <ToggleButton value="tabby" aria-label="tabby colour">
            <Box
              sx={{
                width: 200,
                height: 100
              }}
            >
              <div className='relativePosition'>
                <Image
                  alt='tabby'
                  fill={true}
                  style={{ objectFit: "cover" }}
                  src='/tabby.png'
                />
              </div>
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item container justifyContent={'center'} xs={12}>
            <Button variant="contained" color="secondary" type="submit">Save</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}