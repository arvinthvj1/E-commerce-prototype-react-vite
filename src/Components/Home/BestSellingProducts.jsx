import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import { useSelector } from 'react-redux';
import ProductCard from '../Common/ProductCard';




export const BestSellingProducts = () => {

  const data = useSelector((state) => state.homeData.bestSellingData);
    
  return (data || []).map((e) => {
        return (
          <Col span={6}>
            <ProductCard data={e} />
          </Col>
        );
      })
}
