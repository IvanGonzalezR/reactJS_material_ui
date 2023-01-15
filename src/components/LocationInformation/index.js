import React from 'react'
import { Grid, Typography, Link } from '@mui/material';
import { Stack } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';

const LocationInformation = (props) => {
  const { userState } = props;
  const {
    location,
    html_url,
    blog,
    company,
  } = userState;

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Stack>
          <Stack direction="row" spacing={1}>
            <GitHubIcon fontSize='small' />
            <Typography noWrap={true}>
              <Link href={`${html_url}`}>{html_url}</Link>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <WebIcon fontSize='small' />
            <Typography>
              {blog ?
                <Link href={`${blog}`}>{blog}</Link> :
                'Not Available'
              }
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Stack direction="row" spacing={1}>
            <LocationOnIcon fontSize='small' />
            <Typography >
              {location ?
                location : 'Not Available'}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <ApartmentIcon fontSize='small' />
            <Typography>
              {company ?
                company : 'Not Available'}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
};

export { LocationInformation };
