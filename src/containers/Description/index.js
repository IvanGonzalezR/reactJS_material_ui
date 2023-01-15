import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { PaperInformation } from '../../components/PaperInformation';
import { LocationInformation } from '../../components/LocationInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack>
        <Typography variant='body1' sx={{ marginTop: 1 }}>{bio}</Typography>
      </Stack>
      <Stack sx={{ marginTop: '1rem !important' }}>
        <PaperInformation userState={userState} />
        <LocationInformation userState={userState} />
      </Stack>
    </>
  );
};

export { Description };
