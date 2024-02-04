import { useEffect, useState } from "react";
import { storeBannerData, storeBestSellingData } from "../../redux-store/Home/homeSlice";
import { useDispatch } from "react-redux";
import { getData } from "../../Utilities/apiBase";

const useHomeDataFetch = () => {

 const dispatch= useDispatch();
 const [isLoading,setIsloading] = useState(false);
 const [isErrorMessage,setIsErrorMessage] = useState(false);


//  useDispatch

  const getHomeData = async () => {
   try{
    setIsloading(true);
    let apisToTrigger = [
      "home_banner_content",
      "product_items"
    ];
    let getBothDataFromApi = await getData(apisToTrigger);
    let [banner,product] = getBothDataFromApi;
    dispatch(storeBestSellingData(product));
    dispatch(storeBannerData(banner));
    setIsloading(false);
   }catch(err){
     setIsErrorMessage(err)
   }
  };



  useEffect(() => {
    getHomeData();
  }, []);




  return { isLoading , isErrorMessage};
};

export default useHomeDataFetch;
