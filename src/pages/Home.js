import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupText
} from "reactstrap";

import UserCard from "../componets/UserCard";
import Repos from "../componets/Repos";
import { useNavigate } from "react-router-dom";
import { UserContaxt } from "../context/UserContaxt";
import { toast } from "react-toastify";

const Home = () => {
  const contaxt = useContext(UserContaxt);
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get(`https://api.github.com/users/${query}`);
      console.log(data)
      setUser(data);
    } catch (error) {
      toast("Not able to locate a user", {type:"error"})
    }
  };
  //put any behind login

  if (!contaxt.user?.uid) {
    return navigate('/signin');
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <InputGroupText addontype="append">
              <Button onClick={fetchDetails} color="primary">Fetch User</Button>
            </InputGroupText>
          </InputGroup>
          {user ? <UserCard user={user}/> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url}/> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;