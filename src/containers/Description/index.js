import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { PaperInformation } from '../../components/PaperInformation';
import { LocationInformation } from '../../components/LocationInformation';

const Description = (props) => {
  const bioStyles = {
    marginTop: 1,
    [ '@media (min-height: 768px)' ]: {
      marginTop: 2,
      marginBottom: 2,
    },
    [ '@media (min-height: 900px)' ]: {
      marginTop: 3,
      marginBottom: 3,
    },
  };
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack>
        <Typography variant='body1' sx={bioStyles}>{bio}</Typography>
      </Stack>
      <Stack sx={{ marginTop: '1rem !important' }}>
        <PaperInformation userState={userState} />
        <LocationInformation userState={userState} />
      </Stack>
    </>
  );
};

export { Description };
