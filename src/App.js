import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";
import React from 'react'
import { getGithubUser } from "./services/users";

function App() {

  const container1Styles = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "95vh",
    width: "95vw",
  };
  const container2Styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "whitesmoke",
    width: "80vw",
    height: "70vh",
    borderRadius: '16px',
  };

  const [ inputUser, setInputUser ] = React.useState('IvanGonzalezR');
  const [ userState, setUserState ] = React.useState('inputUser');

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);
    setUserState(userResponse);
    console.log(userResponse);
  }

  React.useEffect(() => {
    gettingUser(inputUser);
  }, [ inputUser ]);

  return (
    <Container sx={container1Styles}>
      <Container sx={container2Styles}>
        <Searcher setInputUser={setInputUser} />
      </Container>
    </Container>
  );
}

export default App;
