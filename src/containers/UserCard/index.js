import React from 'react'
import { CardMedia, Grid } from '@mui/material';
import { PrincipalInformation } from '../../components/PrincipalInformation';
import { Description } from '../../containers/Description';
import Avatar from '@mui/material/Avatar';

const UserCard = (props) => {
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
      <Grid item xs={3}>
        <CardMedia
          component="img"
          image={avatar_url}
          alt="GitHub User Avatar"
          sx={{ borderRadius: '50%' }}
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
        <Description userState={userState}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </Description>
      </Grid>
    </Grid>
  )
}

export { UserCard };
