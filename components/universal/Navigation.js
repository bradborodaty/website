import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { github } from '../../utils/config';

const NavStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #333;
  color: #fff;
  margin: -15px 0 -15px -15px;

  ul {
    list-style: none;
    flex: 1;
    padding: 30px;
    margin: 0;
    li {
      margin-top: 10px;
    }
  }

  div {
    &.nav-footer {
      display: flex;
      align-items: flex-end;
      padding: 30px;
    }
  }
`;

function Navigation() {
    return (
      <NavStyled>
        <ul className="nav">
          <li>
            <Link href="/" passHref>
              <a title="Home page">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/experience" passHref>
              <a title="Experience page">Experience</a>
            </Link>
          </li>
          <li>
            <Link href="/brewtus" passHref>
              <a title="Brewery app page">Brewtus</a>
            </Link>
          </li>
        </ul>

        <div className="nav-footer">
          <a href={`${github}`} title="Brad Borodaty's github account">
            View my github
          </a>
        </div>
      </NavStyled>    
    );
}

export default Navigation;