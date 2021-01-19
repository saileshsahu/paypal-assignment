import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: white;
  border: none;
  font-size: 2rem;
  color: #0070ba;
  outline: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding: 0px 18px;
  height: 36px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: #003087;
  }

  &:focus {
    color: #003087;
    text-decoration: underline;
  }

  span {
    font-size: 1rem;
    margin: 0.25rem 0.25rem 0rem 0.25rem;
  }
`;

export const Layout = styled.div`
  display: flex;
  height: 65vh;
  width: 95%;
  margin: 0 2.5%;
  align-items: center;
`;
