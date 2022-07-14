import DataUser from "../../components/DataUser";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import MyProducts from "../../components/MyProducts/index"
import { Redirect } from "react-router-dom";

const Perfil = ({authenticated}) => {

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return value === index && children;
  };

  if(!authenticated){
    return <Redirect to="/login"/>
  };

  return (
    <>
      <Header />
      <Tabs value={tabValue} onChange={handleChange} centered sx={{marginTop: 5}}>
        <Tab label="Meus dados" />
        <Tab label="Meus produtos" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Container>
          <DataUser />
        </Container>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Container>
          <MyProducts/>
        </Container>
      </TabPanel>
    </>
  );
};
export default Perfil;
