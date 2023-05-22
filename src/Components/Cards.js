import { useState, useEffect } from "react";
import { Row, Image, Card } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../URL";
const Cards = () => {
  const [apiData, setAPIData] = useState([]);
  const GetMethod = async (data) => {
    try {
      let bodyData = {
        query: `query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
        getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
          size
          profiles {
            id
            first_name
            last_name
            email
            is_verified
            image_url
            description
          }
        }
      }`,
        variables: {
          orderBy: { key: "is_verified", sort: "desc" },
          rows: 10,
          page: 0,
          searchString: "",
        },
      };

      const res = await axios.post(API_URL, bodyData);
      console.log("Correct Header Status:", res);

      setAPIData(bodyData);
    } catch (error) {
      console.log(error, "h");
    }
  };
  useEffect((data) => {
    GetMethod();
  }, []);

  return (
    <>
      <Row>
        {apiData.map((data) => (
          <Card style={{ margin: "6px", width: "300px" }}>
            <Card.Header>
              <Card.Title>
                {" "}
                <Image
                  src={data.image_url}
                  style={{ height: "50px", width: "50px" }}
                  roundedCircle
                ></Image>
                {data.first_name} {data.last_name} {data.is_verifed}{" "}
              </Card.Title>
              <Card.Text> {data.email} </Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>{data.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
};
export default Cards;
