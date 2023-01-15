import { Typography, Stack } from "@mui/material";
// import { Stack } from "@mui/system";
import React from "react";

const PrincipalInformation = (props) => {
  const { userState } = props;
  const {
    name,
    login,
    created_at,
  } = userState;

  return (
    <>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>@{login}</Typography>
    </>
  )
}

export { PrincipalInformation };
