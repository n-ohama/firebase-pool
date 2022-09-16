import { InputForm } from "./input_form";
import { ENumber, ETextBox, ETextline, TopFlex } from "../../common/styles";

export const TopRecord = () => {
  return (
    <TopFlex>
      <InputForm />
      <ENumber>First breaks</ENumber>
      <ETextBox>
        <ETextline>Break</ETextline>
      </ETextBox>
      <ENumber>Odd breaks</ENumber>
      <InputForm isRight />
    </TopFlex>
  );
};
