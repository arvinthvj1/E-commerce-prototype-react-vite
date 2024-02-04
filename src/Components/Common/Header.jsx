import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { Badge, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LeftNav } from "./LeftNav";
import MainMenu from "./MainMenu";
import useHeaderDataFetch from "../../customHooks/Common/headerDataFetching";
const Header = () => {
  const [age, setAge] = React.useState(10);
  const {isLoading} = useHeaderDataFetch();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Row className="w-100">
            <Col xs={3}>
              <Navbar.Brand href="#">Black Dwag</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
            </Col>

            <Col xs={6}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Col>

            <Col
              xs={3}
              className="d-flex justify-content-around align-items-center col-3"
            >
              <Box>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  className=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  // label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
              <Box>
                <Badge badgeContent={4} color="error">
                  <PersonIcon />
                </Badge>
              </Box>
              <Box>
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Box>
              <Box>
                <Badge badgeContent={4} color="error">
                  {" "}
                  <FavoriteIcon />
                </Badge>
              </Box>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Row>
        <LeftNav />
        <MainMenu />
      </Row>
    </div>
  );
};

export default Header;
