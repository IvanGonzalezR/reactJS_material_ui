import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

const PaperInformation = (props) => {
  const paperStyles = {
    display: 'flex',
    background: '#FDFDFD',
    height: '5rem',
    [ '@media (min-height: 768px)' ]: {
      height: '100px',
    },
  };
  const paperStackStyles = {
    width: '100%',
    height: '100%',
    [ '@media (min-height: 768px)' ]: {
      padding: 0,
    },
  };
  const infoStackStyles = {
    justifyContent: 'center',
  };
  const { userState } = props;
  const {
    public_repos,
    followers,
    following,
  } = userState;

  return (
    <Paper elevation={3} sx={paperStyles}>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-around"
        sx={paperStackStyles}
      >
        <Stack alignItems="center" sx={infoStackStyles}>
          <Typography variant='h6'>
            Repositories:
          </Typography>
          <Typography sx={{ color: 'green' }}>
            {public_repos}
          </Typography>
        </Stack >
        <Stack alignItems="center" sx={infoStackStyles}>
          <Typography variant='h6'>
            Followers:
          </Typography>
          <Typography sx={{ color: 'green' }}>
            {followers}
          </Typography>
        </Stack>
        <Stack alignItems="center" sx={infoStackStyles}>
          <Typography variant='h6'>
            Following:
          </Typography>
          <Typography sx={{ color: 'green' }}>
            {following}
          </Typography>
        </Stack>
      </Stack>
    </Paper >
  )
};

export { PaperInformation };
