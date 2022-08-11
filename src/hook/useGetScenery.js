import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { visitInstance } from "../API/visit_api.js";

export default function useGetScenery(pathUrl, params, city) {
  const [scenery, setScenery] = useState([]);
  const {
    token: {
      tokenData: { data: { access_token, token_type } = {} },
    },
  } = useSelector((state) => state);
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
          setScenery(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [params, cityPath, pathUrl, access_token, token_type]);
  return scenery;
}
