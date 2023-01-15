import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

const PaperInformation = (props) => {
  const { userState } = props;
  const {
    public_repos,
    followers,
    following,
  } = userState;

  return (
    <Paper elevation={2}>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-around"
        sx={{ padding: '1rem' }}
      >
        <Stack alignItems="center">
          <Typography>
            Repositórios:
          </Typography>
          <Typography sx={{ color: 'green' }}>
            {public_repos}
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography>
            Followers:
          </Typography>
          <Typography sx={{ color: 'green' }}>
            {followers}
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography>
            Following:
          </Typography>
          <Typography sx={{ color: 'green' }}>
            {following}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
};

export { PaperInformation };
