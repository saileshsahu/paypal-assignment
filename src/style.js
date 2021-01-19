import styled from "styled-components";

export const Layout = styled.div`
  background: radial-gradient(circle at 0 0, #009cde, #003087);
  width: 100vw;
  min-height: 100vh;
  position: absolute;
`;

export const Filter = styled.div`
  display: flex;
  font-size: 55%;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  top: 3rem;
  right: 3rem;
`;

export const FilterTitle = styled.p`
  margin-right: 1rem;
`;

export const MainTitle = styled.h2`
  color: white;
  margin-left: 3rem;
  margin-top: 3rem;
`;
