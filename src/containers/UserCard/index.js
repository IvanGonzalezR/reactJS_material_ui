import React from 'react'
import { CardMedia, Grid } from '@mui/material';
import { PrincipalInformation } from '../../components/PrincipalInformation';
import { Description } from '../../containers/Description';
import { Stack } from '@mui/system';

const UserCard = (props) => {
  const imageGridStyles = {
    marginTop: '1.2rem',
  };
  const imageCardStyles = {
    borderRadius: '50%'
  };
  const { userState } = props;
  const {
    avatar_url
  } = userState;

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ padding: 3 }}
    >
      <Grid item xs={3} sx={imageGridStyles}>
        <CardMedia
          component="img"
          image={avatar_url}
          alt="GitHub User Avatar"
          sx={imageCardStyles}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction='column'
          spacing={1}
          sx={{ padding: 2 }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export { UserCard };
