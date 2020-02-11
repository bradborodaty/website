import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ul {
    list-style: none;
    flex: 1;
    padding: 0;
    margin: 0;
  }

  div {
    .nav-footer {
      display: flex;
      align-items: flex-end;
    }
  }
`;

function Navigation() {
    return (
      <NavStyled>
        <ul className="nav">
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/resume" passHref>
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="brewtus" passHref>
              <a>Brewtus</a>
            </Link>
          </li>
        </ul>

        <div className="nav-footer">
          <a href="https://github.com/bradborodaty" title="Brad Borodaty's gitub account">
            View my github
          </a>
        </div>
      </NavStyled>    
    );
}

export default Navigation;