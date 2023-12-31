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
import {
  useMutation,
  useQueryClient,
} from 'react-query'
import { createCat } from '../api/cats';

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

const availableColors = ['black', 'calico', 'tux', 'tabby'];

export default function AddCatForm() {
  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(createCat, {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
  });

  const [name, setName] = useState<string | null>('');
  const [hygiene_score, setHygieneScore] = useState<number | null>(0);
  const [happiness, setHappiness] = useState<number | null>(0);
  const [colorSelected, setColorSelected] = useState<string | null>('black');
  const [age, setAge] = useState<number | null>(0);
  const router = useRouter();

  const handleColor = (
    event: React.MouseEvent<HTMLElement>,
    newColor: string | null,
  ) => {
    if (availableColors.find((colour) => colour === newColor))
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
    const name = event.currentTarget.value;
    setName(name);
  };

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const age = event.currentTarget.valueAsNumber;
    setAge(age);
  };

  const clearFormValues = () => {
    setName('');
    setHygieneScore(0);
    setHappiness(0);
    setAge(0);
    setColorSelected('black');
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutation.mutate({
      name,
      hygiene_score,
      happiness,
      colour: colorSelected,
      age
    });

    clearFormValues();
    // router.push('/');
  };

  return (
    <div className={styles.container}>
      <Box
        component="form"
        sx={{
          verticalAlign: 'center',
          '& .MuiTextField-root': { marginTop: 2 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '20px',
          maxWidth: '910px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h2"
          noWrap
          sx={{
            mr: 2,
            display: { md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
            fontSize: { xs: '2rem', md: '3.75rem' }
          }}
        >
          Cat Create Form
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: '20px', width: '100%' }}>
          <Grid item xs={12} >
            <TextField
              required
              id="name"
              label="Name"
              placeholder="Roberta"
              value={name}
              onChange={handleName}
              sx={textFieldStyle}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              required
              id="age"
              label="Age"
              value={age}
              type="number"
              placeholder="15"
              onChange={handleAge}
              sx={textFieldStyle}
            />
          </Grid>
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
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
            display: { md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem'
          }}
        >
          Select a colour:
        </Typography>
        <ToggleButtonGroup
          value={colorSelected}
          exclusive
          onChange={handleColor}
          aria-label="cat colour"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <ToggleButton value="black" aria-label="black colour"
            sx={{ marginLeft: '1px !important', borderLeftColor: 'rgba(0, 0, 0, 0.12) !important' }}>
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
          <ToggleButton value="calico" aria-label="calico colour"
            sx={{ marginLeft: '1px !important', borderLeftColor: 'rgba(0, 0, 0, 0.12) !important' }}>
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
          <ToggleButton value="tux" aria-label="tux colour"
            sx={{ marginLeft: '1px !important', borderLeftColor: 'rgba(0, 0, 0, 0.12) !important' }}>
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
          <ToggleButton value="tabby" aria-label="tabby colour"
            sx={{ marginLeft: '1px !important', borderLeftColor: 'rgba(0, 0, 0, 0.12) !important' }}>
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