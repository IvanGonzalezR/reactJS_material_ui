import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";
import React from 'react'
import { getGithubUser } from "./services/users";
import { UserCard } from "./containers/UserCard";

function App() {

  const container1Styles = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    background: "#F8F8F8",
    fontFamily: 'Poppins',
  };
  const container2Styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#E9E9E9",
    width: "80vw",
    height: "70vh",
    borderRadius: '16px',
    fontFamily: 'Poppins',
    boxShadow: '16px 18px 28px -4px rgba(150, 150, 150, 0.24), 0px 15px 25px -4px rgba(150, 150, 150, 0.24)',
    [ '@media (min-height: 830px)' ]: {
      height: '60vh',
      width: '80vw',
    },
  };

  const [ inputUser, setInputUser ] = React.useState('IvanGonzalezR');
  const [ userState, setUserState ] = React.useState(inputUser);
  const [ notFound, setNotFound ] = React.useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);

    if (userState === 'IvanGonzalezR') {
      localStorage.setItem('IvanGonzalezR', JSON.stringify(userResponse));
    };

    if (userResponse.message === 'Not Found') {
      const { IvanGonzalezR } = localStorage;
      setUserState(JSON.parse(IvanGonzalezR));
      setNotFound(true);
    } else {
      setUserState(userResponse);
      setNotFound(false);
    }

  }

  console.log(userState);

  React.useEffect(() => {
    gettingUser(inputUser);
  }, [ inputUser ]);

  return (
    <Container sx={container1Styles} >
      <Container sx={container2Styles}>
        <Searcher setInputUser={setInputUser} notFound={notFound} />
        <UserCard userState={userState} />
      </Container>
    </Container>
  );
}

export default App;
