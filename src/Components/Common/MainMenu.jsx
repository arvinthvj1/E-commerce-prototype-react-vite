import React from "react";
import { Menu } from "antd";
import Col from "react-bootstrap/esm/Col";
import useMainDataHandler from "../../customHooks/Common/mainMenuDataHandling";



const MainMenu = () => {

 const {data, current, onClick} = useMainDataHandler();

  return (
    <Col xs={9}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={data}
      />
    </Col>
  );
};
export default MainMenu;
