import React from "react";
import { Card } from "antd";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { HeartOutlined ,ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;



const ProductCard = ({data}) => {
  const  {
  id,
  name,
  type,
  price,
  color,
  size,
  rating,
  reviews,
  category
 }  =  data;
  return (
    <Card
      key={id}
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt={name}
          src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" }
        />
      }
    >
      <Meta title={name} description={category} />
      Size <div>{size}</div>
      <Row>
        <Col>
           <HeartOutlined style={{fontSize : "20px"}}/>
        </Col>
        <Col>
        <ShoppingCartOutlined style={{fontSize : "20px"}} />
          </Col>
      </Row>
    </Card>
  )
};
export default ProductCard;
