import React, { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";

export default function Index() {
  const [data, setData] = useState([]);

  const SERVICE_KEY = process.env.REACT_APP_HEALTH_PRICE_SERVICE_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/B551182/nonPaymentDamtInfoService/getNonPaymentItemClcdList?pageNo=1&numOfRows=2&ServiceKey=${SERVICE_KEY}`
        );
        const xmlResponse = await response.text();
        // XML to JSON
        const jsonObj = new XMLParser().parseFromString(xmlResponse);
        const tag = jsonObj.getElementsByTagName("npayKorNm");
        setData(tag);
      } catch (error) {
        console.error("API 요청 중 에러 발생:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {data && (
        <ol>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
