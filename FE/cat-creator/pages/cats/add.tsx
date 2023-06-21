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

const defaultValues = {
  name: "",
  age: 0,
  hygiene_score: 0,
  happiness: 0,
  color: "black",
};

export default function AddCatForm() {
  const [colorSelected, setColorSelected] = useState<string | null>('black');
  const [formValues, setFormValues] = useState(defaultValues)

  const handleColor = (
    event: React.MouseEvent<HTMLElement>,
    newColor: string | null,
  ) => {
    setColorSelected(newColor);
  };

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
      >
        <TextField
          required
          id="name"
          label="Name"
          placeholder="Roberta"
          value={formValues.name}
          onChange={() => { }}
          sx={{
            ".autofit > :only-child": {
              gridColumn: "1/-1"
            },
            "& label": {
              color: "white"
            },
            "& label.Mui-focused": {
              color: "#483248"
            },
            "& .MuiOutlinedInput-root": {
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
          }}
        />
        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          <Grid item xs={4} >
            <TextField
              required
              id="age"
              label="Age"
              type="number"
              placeholder="Hello World"
              sx={{
                width: '100%',
                "& label": {
                  color: "white"
                },
                "& label.Mui-focused": {
                  color: "#483248"
                },
                "& .MuiOutlinedInput-root": {
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
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="hygiene_score"
              label="Hygiene Score"
              type="number"
              placeholder="100"
              sx={{
                width: '100%',
                "& label": {
                  color: "white"
                },
                "& label.Mui-focused": {
                  color: "#483248"
                },
                "& .MuiOutlinedInput-root": {
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
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="happiness"
              label="Happiness Score"
              placeholder="100"
              type='number'
              sx={{
                width: '100%',
                "& label": {
                  color: "white"
                },
                "& label.Mui-focused": {
                  color: "#483248"
                },
                "& .MuiOutlinedInput-root": {
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
              }}
            />
          </Grid>
        </Grid>
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
      </Box>
    </div>
  );
}