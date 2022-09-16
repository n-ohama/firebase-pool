import { Box, Button, Center } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const SizedButton = styled(Button)`
  width: 80px;
  @media (max-width: 500px) {
    width: 40px;
  }
`;
export const ECenter = styled(Center)`
  background-color: rgba(211, 274, 80, 0.2);
  @media (max-width: 500px) {
    background-color: white;
  }
`;

export const EContainer = styled.div`
  padding: 40px;
  @media (max-width: 500px) {
    margin-left: 330px;
    padding: 80px 0px 40px 50px;
  }
`;

export const ETextBox = styled.div`
  background-color: rgba(11, 434, 332);
  text-align: center;
  display: flex;
  border: 0.5px solid;
`;
export const ETextline = styled.div`
  text-align: center;
  font-weight: 600;
  margin: 6px;
  width: 240px;
  @media (max-width: 500px) {
    margin: 3px;
    width: 120px;
  }
`;
export const ENumber = styled.div`
  text-align: center;
  width: 80px;
  border: 0.5px solid;
  box-sizing: border-box;
  padding: 5px;
  @media (max-width: 500px) {
    padding: 2.5px;
    width: 80px;
  }
`;
export const EFlex = styled.div`
  display: flex;
  margin: 1px;
`;
export const EFlex2 = styled.div`
  display: flex;
  margin: 1px;
  margin-left: 161px;
  @media (max-width: 500px) {
    margin-left: 81px;
  }
`;
export const TopFlex = styled.div`
  display: flex;
  margin: 1px;
  margin-left: 64px;
  @media (max-width: 500px) {
    display: flex;
    margin: 1px;
  }
`;

export const NextBox = styled(Box)`
  cursor: pointer;
  &:hover {
    background-color: skyblue;
    transition: 1.5s;
  }
`;
