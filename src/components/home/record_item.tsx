import { FC } from "react";
import { WrapItem } from "@chakra-ui/react";
import { RecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  totalBreaksLeftState,
  totalBreaksRightState,
} from "../../common/globalState";
import {
  EFlex,
  ENumber,
  ETextBox,
  ETextline,
  SizedButton,
} from "../../common/styles";

type Props = {
  title: string;
  leftState: RecoilState<number>;
  rightState: RecoilState<number>;
  hasPercentage: boolean;
  dialogOpen?: () => void;
};

export const RecordItem: FC<Props> = ({
  title,
  leftState,
  rightState,
  hasPercentage,
}) => {
  // total getter
  const totalLeft = useRecoilValue(totalBreaksLeftState);
  const totalRight = useRecoilValue(totalBreaksRightState);

  // getter
  const left = useRecoilValue(leftState);
  const right = useRecoilValue(rightState);
  // setter
  const setLeft = useSetRecoilState(leftState);
  const setRight = useSetRecoilState(rightState);

  const incrementLeft = () => {
    setLeft(left + 1);
  };

  const decrementLeft = () => {
    setLeft(left - 1);
  };

  const incrementRight = () => {
    setRight(right + 1);
  };

  const decrementRight = () => {
    setRight(right - 1);
  };

  const persentageLeft = Math.round((left / totalLeft) * 100) || 0;

  const persentageRight = Math.round((right / totalRight) * 100) || 0;

  return (
    <EFlex>
      <WrapItem>
        <SizedButton onClick={decrementLeft} colorScheme="red">
          -1
        </SizedButton>
      </WrapItem>
      <WrapItem>
        <SizedButton onClick={incrementLeft} colorScheme="blue">
          +1
        </SizedButton>
      </WrapItem>
      <ENumber>{hasPercentage && persentageLeft + "%"}</ENumber>
      <ENumber>{left}</ENumber>
      <ETextBox>
        <ETextline>{title}</ETextline>
      </ETextBox>
      <ENumber>{right}</ENumber>
      <ENumber>{hasPercentage && persentageRight + "%"}</ENumber>
      <WrapItem>
        <SizedButton onClick={incrementRight} colorScheme="blue">
          +1
        </SizedButton>
      </WrapItem>
      <WrapItem>
        <SizedButton onClick={decrementRight} colorScheme="red">
          -1
        </SizedButton>
      </WrapItem>
    </EFlex>
  );
};
