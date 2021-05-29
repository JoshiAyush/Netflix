import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  max-height: 700px;
  width: 100%;
  padding: 0 40px;
  max-width: 450px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 60 68px 40px;
  margin-bottom: 100px;
`;

export const Inner = styled.div`
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 700px;
  margin: auto;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 60 68px 40px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
  overflow: auto;
  height: fit-content;
`;

export const Span = styled.span``;

export const P = styled.p``;

export const SuggestPassword = styled(Error)`
  background-color: white;
  color: rgba(0, 0, 0, 0.69);
  position: absolute;
  top: 220px;
  width: 100%;
  max-width: 320px;
  font-size: 16px;
  z-index: 99;
  padding: 0px 20px;
  padding-top: 15px;
  padding-bottom: 0px;
  cursor: pointer;

  span {
    position: absolute;
    right: 0;
    margin-right: 18px;
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  max-height: fit-content;
  margin: 0 auto;
  position: relative;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  outline: none;
  font-size: large;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  outline: none;

  &:active {
    background-color: #ff140d;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
