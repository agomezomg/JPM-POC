import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Tooltip } from '@mui/material';

interface Specifier {
  specifier: string
}

export default function BoxSx({ specifier }: Specifier) {
  const router = useRouter();
  return (
    <>
      <Tooltip title={specifier === "add" ?
        "Create a Cat" : "List Cats"} placement="bottom">
        <Box
          sx={{
            maxWidth: 600,
            width:'100%',
            height: 400,
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: '#a58ccc',
              opacity: [0.9, 0.8, 0.7],
            },
            border: '2px solid #bda3bf',
            borderRadius: '5px',
            padding: '5px',
            marginLeft:'auto',
            marginRight:'auto'
          }}
        >
          {specifier === "add" && (
            <div className='relativePosition'>
              <Link href={'/cats/add'}>
                <Image
                  alt='Add a Cat'
                  fill={true}
                  style={{ objectFit: "contain" }}
                  src='addCat.svg'
                  onClick={() => {
                    router.push('/cats/add');
                  }}
                />
              </Link>
            </div>
          )}
          {specifier === "list" && (
            <div className='relativePosition'>
              <Link href={'/cats/list'}>
                <Image
                  alt='listCat'
                  fill={true}
                  style={{ objectFit: "contain" }}
                  src='listCats.svg'
                  onClick={() => {
                    router.push('/cats/list');
                  }}
                />
              </Link>
            </div>
          )}
        </Box>
      </Tooltip>
    </>
  );
}