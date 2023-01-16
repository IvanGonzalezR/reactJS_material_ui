import React from 'react'
import { Grid, Typography, Link } from '@mui/material';
import { Stack } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';

const LocationInformation = (props) => {
  const generalStackStyles = {
    height: '6rem',
    justifyContent: 'space-around',
    marginTop: '2.5rem',
    [ '@media (min-height: 768px)' ]: {

    },
  };
  const itemStackStyles = {
    [ '@media (min-height: 768px)' ]: {
      // marginTop: '2.5rem',
    },
  };
  const { userState } = props;
  const {
    location,
    html_url,
    blog,
    company,
  } = userState;

  return (
    <Grid container >
      <Grid item xs={6}>
        <Stack spacing={2} sx={generalStackStyles} >
          <Stack direction="row" spacing={2} sx={itemStackStyles}>
            <GitHubIcon fontSize='medium' />
            <Typography noWrap={true}>
              <Link
                href={`${html_url}`}
                target="_blank"
                rel="noopener noreferrer"
                underline='hover'
              >{html_url}</Link>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={itemStackStyles}>
            <WebIcon fontSize='medium' />
            <Typography>
              {blog ?
                <Link
                  href={`${blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline='hover'
                >{blog}</Link> :
                'Not Available'
              }
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={2} sx={generalStackStyles}>
          <Stack direction="row" spacing={2} sx={itemStackStyles}>
            <LocationOnIcon fontSize='medium' />
            <Typography >
              {location ?
                location : 'Not Available'}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={itemStackStyles}>
            <ApartmentIcon fontSize='medium' />
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
