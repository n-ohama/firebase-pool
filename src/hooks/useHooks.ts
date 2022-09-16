import { useResetRecoilState } from "recoil";
import {
  ballsPocketedLeftState,
  ballsPocketedRightState,
  breakAndRunLeftState,
  breakAndRunRightState,
  consecutiveBRLeftState,
  consecutiveBRRightState,
  dryBreakCountLeftState,
  dryBreakCountRightState,
  idInputState,
  kickingLeftState,
  kickingRightState,
  leftInput,
  longestGameWinLeftState,
  longestGameWinRightState,
  madeOnBreakLeftState,
  madeOnBreakRightState,
  missedLeftState,
  missedRightState,
  rightInput,
  safetyLeftState,
  safetyRightState,
  scoreLeftState,
  scoreRightState,
  scratchLeftState,
  scratchRightState,
  shotAfterBreakLeftState,
  shotAfterBreakRightState,
  totalBreaksLeftState,
  totalBreaksRightState,
  unforcedLeftState,
  unforcedRightState,
} from "../common/globalState";

export const useHooks = () => {
  const resetIL = useResetRecoilState(leftInput);
  const resetIR = useResetRecoilState(rightInput);
  const resetSL = useResetRecoilState(scoreLeftState);
  const resetSR = useResetRecoilState(scoreRightState);
  const resetTL = useResetRecoilState(totalBreaksLeftState);
  const resetTR = useResetRecoilState(totalBreaksRightState);
  const resetDL = useResetRecoilState(dryBreakCountLeftState);
  const resetDR = useResetRecoilState(dryBreakCountRightState);
  const resetSCL = useResetRecoilState(scratchLeftState);
  const resetSCR = useResetRecoilState(scratchRightState);
  const resetML = useResetRecoilState(madeOnBreakLeftState);
  const resetMR = useResetRecoilState(madeOnBreakRightState);
  const resetSABL = useResetRecoilState(shotAfterBreakLeftState);
  const resetSABR = useResetRecoilState(shotAfterBreakRightState);
  const resetBL = useResetRecoilState(breakAndRunLeftState);
  const resetBR = useResetRecoilState(breakAndRunRightState);
  const resetCL = useResetRecoilState(consecutiveBRLeftState);
  const resetCR = useResetRecoilState(consecutiveBRRightState);
  const resetLL = useResetRecoilState(longestGameWinLeftState);
  const resetLR = useResetRecoilState(longestGameWinRightState);
  const resetBPL = useResetRecoilState(ballsPocketedLeftState);
  const resetBPR = useResetRecoilState(ballsPocketedRightState);
  const resetMIL = useResetRecoilState(missedLeftState);
  const resetMIR = useResetRecoilState(missedRightState);
  const resetUL = useResetRecoilState(unforcedLeftState);
  const resetUR = useResetRecoilState(unforcedRightState);
  const resetSAL = useResetRecoilState(safetyLeftState);
  const resetSAR = useResetRecoilState(safetyRightState);
  const resetKL = useResetRecoilState(kickingLeftState);
  const resetKR = useResetRecoilState(kickingRightState);
  const resetIdInput = useResetRecoilState(idInputState);

  const resetAllInput = () => {
    resetIL();
    resetIR();
    resetSL();
    resetSR();
    resetTL();
    resetTR();
    resetDL();
    resetDR();
    resetSCL();
    resetSCR();
    resetML();
    resetMR();
    resetSABL();
    resetSABR();
    resetBL();
    resetBR();
    resetCL();
    resetCR();
    resetLL();
    resetLR();
    resetBPL();
    resetBPR();
    resetMIL();
    resetMIR();
    resetUL();
    resetUR();
    resetSAL();
    resetSAR();
    resetKL();
    resetKR();
    resetIdInput();
  };

  return { resetAllInput };
};
