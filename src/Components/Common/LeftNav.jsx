import Col from "react-bootstrap/esm/Col";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import useLeftNavDataHandler from "../../customHooks/Common/leftNavDataHandling";

export const LeftNav = () => {

  const {data} = useLeftNavDataHandler();

  return (
    <Col xs={3}>
      <Dropdown
        menu={{
          items: data,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Categories
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Col>
  );
};
