import DataUser from "../../components/DataUser";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import MyProducts from "../../components/MyProducts/index";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Perfil = ({ authenticated }) => {
  const [tabValue, setTabValue] = useState(0);

  const token = JSON.parse(localStorage.getItem("@Market:token"));

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return value === index && children;
  };

  if (!token) {
    toast.error("Você precisa estar logado!");
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Tabs
        value={tabValue}
        onChange={handleChange}
        centered
        sx={{ marginTop: 5 }}
      >
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
          <MyProducts />
        </Container>
      </TabPanel>
    </>
  );
};
export default Perfil;
