import { Typography, Stack } from "@mui/material";
// import { Stack } from "@mui/system";
import React, { Fragment } from "react";

const PrincipalInformation = (props) => {
  const { userState } = props;
  const {
    name,
    login,
    created_at,
  } = userState;

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography variant="subtitle2" sx={{ marginTop: '0 !important' }}>@{login}</Typography>
    </>
  )
}

export { PrincipalInformation };
