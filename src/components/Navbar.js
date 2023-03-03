import React from "react";
import { Menu, Container, Input } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header-site"><Link to="/" style={{display: "block", height: "100%"}} /></div>

      <Menu pointing stackable inverted>
        <Container>
          <Link to="/">
            <Menu.Item name="Home" />
          </Link>
          <Link to="/people">
            <Menu.Item name="people" />
          </Link>
          <Link to="/species">
            <Menu.Item name="species" />
          </Link>
          <Link to="/planets">
            <Menu.Item name="planets" />
          </Link>
          <Link to="/starships">
            <Menu.Item name="starships" />
          </Link>
          <Link to="/vehicles">
            <Menu.Item name="vehicles" />
          </Link>
        </Container>
        {/* <Segment floated="right"></Segment> */}
        <Menu.Menu position="right" /*style={{margin: "0 auto !important"}}*/ >
          {/* <Link to="/search"> */}
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          {/* </Link> */}
        </Menu.Menu>
      </Menu>
    </>
  );
}

