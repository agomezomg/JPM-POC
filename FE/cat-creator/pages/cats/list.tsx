import styles from '../../styles/Home.module.css'
import { getCats } from '../api/cats'
import Cat from '../../cats';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import EditCatForm from '../../components/edit';
import { Grid, IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query'
import { deleteCat } from '../api/cats';
import { useState } from 'react';

export default function ListCatForm() {
  // Access the client
  const queryClient = useQueryClient();
  const [selectedCat, setSelectedCat] = useState<Cat>({
    id: undefined,
    name: "",
    age: 0,
    happiness: 0,
    hygiene_score: 0,
    colour: "black"
  })

  // Queries
  const query = useQuery('cats', getCats);

  // Mutations
  const mutation = useMutation(deleteCat, {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
    onError: () => {
      console.log('Something went wrong.');
    }
  });

  const handleDelete = (catId: number) => {
    mutation.mutate(catId);
  };

  const setCatValues = (cat: Cat) => {
    setSelectedCat(cat);
    console.log(selectedCat);
  }

  return (
    <div className={styles.container}>
      <Box
        sx={{
          width: '100%',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Grid container sx={{ marginBottom: '20px', border: '2px solid #bda3bf', marginLeft: '0px !important' }}>
          <Grid item xs={12} md={4}>
            <List dense
              sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: 580, height: '100%', overflow: 'auto' }}>
              {query.data?.map((cat: Cat) => {
                const labelId = `checkbox-list-secondary-label-${cat.name}`;
                return (
                  <ListItem
                    key={cat.id}
                    disablePadding
                    onClick={() => { setCatValues(cat) }}
                    secondaryAction={
                      <Tooltip title={`Delete ${cat.name}`} placement='right-end'>
                        <IconButton edge="end" aria-label="delete" onClick={() => {
                          if (cat.id) handleDelete(cat.id)
                        }
                        }>
                          <Box
                            sx={{
                              width: 30,
                              height: 20
                            }}
                          >
                            <div className='relativePosition'>
                              <Image
                                alt='tabby'
                                fill={true}
                                style={{ objectFit: "cover" }}
                                src='/deleteCat.svg'
                              />
                            </div>
                          </Box>
                        </IconButton>
                      </Tooltip>
                    }
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={cat?.colour || 'black'}
                          src={`/${cat.colour}.png`}
                        />
                      </ListItemAvatar>
                      <ListItemText id={labelId} primary={cat.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} md={8}>
            <EditCatForm {...selectedCat} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}