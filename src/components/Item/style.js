import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translate3d(100%, 0, 0)
  }

  to {
    transform: translate3d(0, 0, 0)
  }
`;

const slideOut = keyframes`
  from {
    transform: translate3d(0, 0, 0)
  }

  to {
    transform: translate3d(100%, 0, 0)
  }
`;

export const Card = styled.div`
  width: 30%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  transition: 0.25s ease-out;
  border-radius: 5px;
  position: relative;
  float: left;
  margin: 0% 1%;
  transform: ${(props) => props.isCenter && `scale(1.05)`};
  animation: ${(props) =>
    props.direction === "reset"
      ? "none"
      : props.direction === "right"
      ? css`
          ${slideIn} 0.25s ease
        `
      : css`
          ${slideOut} 0.25s ease
        `};

  &:hover {
    box-shadow: 0.125rem 0.1875rem 0.5rem rgba(0, 0, 0, 0.75);
    cursor: pointer;
    text-decoration: none;
  }
`;

export const ImageLayout = styled.div`
  display: flex;
  height: 60%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  padding: 1rem;
  padding-top: 0rem;
`;

export const Category = styled.div`
  position: absolute;
  background: #ff9600;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.6rem;
  font-weight: bold;
  color: #003087;
  right: 0.5rem;
  top: 0.5rem;
`;

export const Title = styled.a`
  font-size: 60%;
  margin-bottom: 1rem;
  height: 30%;
  font-weight: bold;
`;

export const Desc = styled.a`
  font-size: 50%;
  margin-bottom: 1rem;
  height: 30%;
`;

export const Price = styled.a`
  font-size: 90%;
  position: absolute;
  bottom: 0.8rem;
  color: #003087;
  font-weight: 500;
`;
