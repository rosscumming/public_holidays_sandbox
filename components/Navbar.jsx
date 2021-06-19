import styled from 'styled-components';

const NavContainer = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
`;

const Nav = styled(NavContainer)`
  border-bottom: 1px solid #e2e2e2;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Nav></Nav>
    </NavContainer>
  );
};

export default Navbar;
