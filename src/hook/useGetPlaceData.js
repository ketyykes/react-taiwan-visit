import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { visitInstance } from "../API/visit_api.js";

export default function useGetPlaceData(pathUrl, params, city = "all") {
  const [place, setPlace] = useState([]);
  const {
    token: {
      tokenData: { data: { access_token, token_type } = {} },
    },
  } = useSelector((state) => state);
  params += "&$format=JSON";
  const cityPath = city === "all" ? "" : "/" + city;
  useEffect(() => {
    if (access_token) {
      (async () => {
        const config = {
          method: "GET",
          url: `/Tourism/${pathUrl + cityPath}?${params}`,
          headers: {
            Authorization: `${token_type} ${access_token}`,
          },
        };
        console.log(config);
        try {
          const { data } = await visitInstance(config);
          console.log(data);
          setPlace(data);
        } catch (error) {
          console.log(error);
          return null;
        }
      })();
    }
  }, [params, cityPath, pathUrl, access_token, token_type]);
  return place;
}
