import { useRecoilValue } from "recoil";
import {
  ballsPocketedLeftState,
  ballsPocketedRightState,
  kickingLeftState,
  kickingRightState,
  missedLeftState,
  missedRightState,
  safetyLeftState,
  safetyRightState,
  unforcedLeftState,
  unforcedRightState,
} from "../../common/globalState";
import { EFlex2, ENumber, ETextBox, ETextline } from "../../common/styles";

export const BottomRecord = () => {
  const missedLeft = useRecoilValue(missedLeftState);
  const unforcedLeft = useRecoilValue(unforcedLeftState);
  const safetyLeft = useRecoilValue(safetyLeftState);
  const kickingLeft = useRecoilValue(kickingLeftState);
  const ballspocketedLeft = useRecoilValue(ballsPocketedLeftState);
  const missedRight = useRecoilValue(missedRightState);
  const unforcedRight = useRecoilValue(unforcedRightState);
  const safetyRight = useRecoilValue(safetyRightState);
  const kickingRight = useRecoilValue(kickingRightState);
  const ballspocketedRight = useRecoilValue(ballsPocketedRightState);

  const aCCUStatLeft =
    (missedLeft + unforcedLeft + safetyLeft + kickingLeft) / ballspocketedLeft -
    1;

  const persentageACCUStatLeft = Math.round(aCCUStatLeft * 1000) / 1000;

  const aCCUStatRight =
    (missedRight + unforcedRight + safetyRight + kickingRight) /
      ballspocketedRight -
    1;

  const persentageACCUStatRight = Math.round(aCCUStatRight * 1000) / 1000;
  return (
    <EFlex2>
      <ENumber></ENumber>
      <ENumber>{persentageACCUStatLeft || 0}</ENumber>
      <ETextBox>
        <ETextline>ACCU-STAT Performance Rate</ETextline>
      </ETextBox>
      <ENumber>{persentageACCUStatRight || 0}</ENumber>
      <ENumber></ENumber>
    </EFlex2>
  );
};
