import { useRecoilValue } from "recoil";
import {
  ballsPocketedLeftState,
  ballsPocketedRightState,
  scoreLeftState,
  scoreRightState,
} from "../../common/globalState";
import { EFlex2, ENumber, ETextBox, ETextline } from "../../common/styles";

export const BallsLeftRecord = () => {
  // getter
  const scoreLeft = useRecoilValue(scoreLeftState);
  const scoreRight = useRecoilValue(scoreRightState);
  const ballsPocketedLeft = useRecoilValue(ballsPocketedLeftState);
  const ballsPocketedRight = useRecoilValue(ballsPocketedRightState);

  const aaa = scoreLeft * 9;
  const bbb = scoreRight * 9;

  const totalScore = aaa + bbb;

  const ballsLeft = totalScore - ballsPocketedLeft - ballsPocketedRight;

  return (
    <EFlex2>
      <ENumber></ENumber>
      <ENumber>{ballsLeft}</ENumber>
      <ETextBox>
        <ETextline>{totalScore}</ETextline>
      </ETextBox>
      <ENumber>{ballsLeft}</ENumber>
      <ENumber></ENumber>
    </EFlex2>
  );
};
