import { useState, useEffect } from "react";
import {
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsThreeDotsVertical,
  BsPatchCheckFill,
  BsFillGearFill,
} from "react-icons/bs";
import axios from "axios";
import { API_URL } from "../URL";
//import AddUser from './Components/Add'
const Cards = () => {
  const [apiData, setAPIData] = useState([]);
  const GetMethod = async () => {
    try {
      var bodyData = {
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
      console.log(
        "Correct Header Status:",
        res.data.data.getAllProfiles.profiles
      );

      setAPIData(res.data.data.getAllProfiles.profiles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetMethod();
  }, []);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <td>Name</td>
            <td>ID </td>
            <td>Email</td>
            <td>Description</td>
            <td>
              <BsFillGearFill />
            </td>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => (
            <tr>
              {" "}
              <td>
                {data.first_name} {data.last_name} {data.is_verifed}
              </td>
              <td> {data.id} </td>
              <td>{data.email}</td>
              <td>{data.description}</td>
              <td>
                <div>
                  <DropdownButton
                    size={"sm"}

                    //id="vertical-dropdown-1"
                  >
                    <BsThreeDotsVertical />
                    <Dropdown.Item eventKey="1">
                      <Link to={"add"} className="nav-link">
                        Update
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      <Link to={"delete"} className="nav-link">
                        Delete
                      </Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button></Button>uygyu
    </>
  );
};
export default Cards;
