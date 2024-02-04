
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useMainDataHandler = () => {
    const [current, setCurrent] = useState("mail");
    const [data, setData] = useState([]);

    const mainNavItems = useSelector((state) => state.headerData.mainMenu);
  
    function generateDataForComponent(data) {
      let dataSet = data.map((e, index) => {
        return {
          label: e.name,
          key: index,
          // icon: <MailOutlined />,
          children: e.sub_categories.map((f, fIndex) => {
            return {
              label: f,
              key: index + "" + fIndex,
            };
          }),
        };
      });
      setData(dataSet);
    }
  
    useEffect(() => {
      if (mainNavItems.length) {
        generateDataForComponent(mainNavItems);
      }
    }, [mainNavItems]);

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
      };

    return {data, current, onClick}
};

export default useMainDataHandler;
