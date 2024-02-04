import React from "react";
import Header from "../Components/Common/Header";
import ProductBanner from "../Components/Home/BannerCarousel";
import ProductCard from "../Components/Common/ProductCard";
import { Grid } from "@mui/material";
import { Col, Row } from "antd";
import { BestSellingProducts } from "../Components/Home/BestSellingProducts";
import useHomeDataFetch from "../customHooks/Home/homeDataHandler";


export const Home = () => {
  useHomeDataFetch();
  return (
    <div>
      <Header />
      <ProductBanner />
      <Grid></Grid>
      <Row>
        <BestSellingProducts/>
      </Row>
    </div>
  );
};
