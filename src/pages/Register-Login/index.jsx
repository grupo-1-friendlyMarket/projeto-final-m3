import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Header } from "../../components/Header";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { StyledContainer } from "./style";

export const LoginOrRegister = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return value === index && children;
  };
  
  return (
    <>
      <Header />
      <StyledContainer>
        <Box className="formContainer">
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="tabs">
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab label="Login" />
              <Tab label="Cadastro" />
            </Tabs>
          </Box>
          <TabPanel value={selectedTab} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <Register />
          </TabPanel>
        </Box>
      </StyledContainer>
    </>
  );
};
