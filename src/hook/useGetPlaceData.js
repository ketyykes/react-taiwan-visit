import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { visitInstance } from "../API/visit_api.js";

function pageTurnToQueryString(page) {
  const pageQueryOjbect = {
    $top: page * 12,
  };
  return `&${new URLSearchParams(pageQueryOjbect).toString()}`;
}
export default function useGetPlaceData(pathUrl, params, city, page = "1") {
  const [palce, setPalce] = useState([]);
  const {
    token: {
      tokenData: { data: { access_token, token_type } = {} },
    },
  } = useSelector((state) => state);
  if (page !== "1") {
    params += pageTurnToQueryString(page);
  }
  params += "&$format=JSON";
  const cityPath = city ? "/" + city : "";
  useEffect(() => {
    if (access_token) {
      (async () => {
        const config = {
          method: "GET",
          url: `/Tourism/${pathUrl + cityPath}?${params}`,
          headers: {
            Accept: "application/json",
            Authorization: `${token_type} ${access_token}`,
          },
        };
        console.log(config);
        try {
          const { data } = await visitInstance(config);
          setPalce(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [params, cityPath, pathUrl, access_token, token_type]);
  return palce;
}
