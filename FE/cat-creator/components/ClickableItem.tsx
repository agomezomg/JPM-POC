import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Specifier {
  specifier: string
}

export default function BoxSx({ specifier }: Specifier) {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: 600,
          height: 400,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: '#a58ccc',
            opacity: [0.9, 0.8, 0.7],
          },
          border: '2px solid #bda3bf',
          borderRadius: '5px',
          padding: '5px'
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
    </>
  );
}