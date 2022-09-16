import { atom, selector, selectorFamily } from "recoil";
import { familyFetch, fetchData } from "./firebase";
import { AllTyp } from "./types";

export const leftInput = atom<string>({
  key: "leftInput",
  default: "",
});

export const rightInput = atom<string>({
  key: "rightInput",
  default: "",
});

export const isSubmitState = atom<boolean>({
  key: "isSubmitState",
  default: false,
});

export const idInputState = atom<string>({
  key: "idInputState",
  default: "",
});

export const scoreLeftState = atom<number>({
  key: "scoreLeftState",
  default: 0,
});
export const scoreRightState = atom<number>({
  key: "scoreRightState",
  default: 0,
});

export const totalBreaksLeftState = atom<number>({
  key: "totalBreaksLeftState",
  default: 0,
});
export const totalBreaksRightState = atom<number>({
  key: "totalBreaksRightState",
  default: 0,
});

export const dryBreakCountLeftState = atom<number>({
  key: "dryBreakCountLeftState",
  default: 0,
});
export const dryBreakCountRightState = atom<number>({
  key: "dryBreakCountRightState",
  default: 0,
});

export const scratchLeftState = atom<number>({
  key: "scratchLeftState",
  default: 0,
});
export const scratchRightState = atom<number>({
  key: "scratchRightState",
  default: 0,
});

export const madeOnBreakLeftState = atom<number>({
  key: "madeOnBreakLeftState",
  default: 0,
});
export const madeOnBreakRightState = atom<number>({
  key: "madeOnBreakRightState",
  default: 0,
});

export const shotAfterBreakLeftState = atom<number>({
  key: "shotAfterBreakLeftState",
  default: 0,
});
export const shotAfterBreakRightState = atom<number>({
  key: "shotAfterBreakRightState",
  default: 0,
});

export const breakAndRunLeftState = atom<number>({
  key: "breakandRunLeftState",
  default: 0,
});
export const breakAndRunRightState = atom<number>({
  key: "breakandRunRightState",
  default: 0,
});

export const consecutiveBRLeftState = atom<number>({
  key: "consecutiveBRLeftState",
  default: 0,
});
export const consecutiveBRRightState = atom<number>({
  key: "consecutiveBRRightState",
  default: 0,
});

export const longestGameWinLeftState = atom<number>({
  key: "longestGameWinLeftState",
  default: 0,
});
export const longestGameWinRightState = atom<number>({
  key: "longestGameWinRightState",
  default: 0,
});

export const ballsPocketedLeftState = atom<number>({
  key: "ballsPocketedLeftState",
  default: 0,
});
export const ballsPocketedRightState = atom<number>({
  key: "ballsPocketedRightState",
  default: 0,
});

export const missedLeftState = atom<number>({
  key: "missedLeftState",
  default: 0,
});
export const missedRightState = atom<number>({
  key: "missedRightState",
  default: 0,
});

export const unforcedLeftState = atom<number>({
  key: "unforcedLeftState",
  default: 0,
});
export const unforcedRightState = atom<number>({
  key: "unforcedRightState",
  default: 0,
});

export const safetyLeftState = atom<number>({
  key: "safetyLeftState",
  default: 0,
});
export const safetyRightState = atom<number>({
  key: "safetyRightState",
  default: 0,
});

export const kickingLeftState = atom<number>({
  key: "kickingLeftState",
  default: 0,
});
export const kickingRightState = atom<number>({
  key: "kickingRightState",
  default: 0,
});

export const timeState = atom<Date>({
  key: "timeState",
  default: new Date(),
});

export const allBreaksCountLeftState = selector<number>({
  key: "allBreaksCountLeftState",
  get: ({ get }) => {
    const dry = get(dryBreakCountLeftState);
    const scratch = get(scratchLeftState);
    const madeOnBreak = get(madeOnBreakLeftState);
    const shot = get(shotAfterBreakLeftState);
    const consecutive = get(consecutiveBRLeftState);
    return dry + scratch + madeOnBreak + shot + consecutive;
  },
});

export const allBreaksCountRightState = selector<number>({
  key: "allBreaksCountRightState",
  get: ({ get }) => {
    const dry = get(dryBreakCountRightState);
    const scratch = get(scratchRightState);
    const madeOnBreak = get(madeOnBreakRightState);
    const shot = get(shotAfterBreakRightState);
    const consecutive = get(consecutiveBRRightState);
    return dry + scratch + madeOnBreak + shot + consecutive;
  },
});

export const submitState = selector<AllTyp>({
  key: "submitState",
  get: ({ get }) => {
    const item: AllTyp = {
      id: get(idInputState),
      dateTime: get(timeState),
      input: {
        left: get(leftInput),
        right: get(rightInput),
      },
      score: {
        left: get(scoreLeftState),
        right: get(scoreRightState),
      },
      totalBreaks: {
        left: get(totalBreaksLeftState),
        right: get(totalBreaksRightState),
      },
      dryBreak: {
        left: get(dryBreakCountLeftState),
        right: get(dryBreakCountRightState),
      },
      scratch: {
        left: get(scratchLeftState),
        right: get(scratchRightState),
      },
      madeOnBreak: {
        left: get(madeOnBreakLeftState),
        right: get(madeOnBreakRightState),
      },
      shotAfterBreak: {
        left: get(shotAfterBreakLeftState),
        right: get(shotAfterBreakRightState),
      },
      breakAndRun: {
        left: get(breakAndRunLeftState),
        right: get(breakAndRunRightState),
      },
      consecutive: {
        left: get(consecutiveBRLeftState),
        right: get(consecutiveBRRightState),
      },
      longestGameWin: {
        left: get(longestGameWinLeftState),
        right: get(longestGameWinRightState),
      },
      ballsPockets: {
        left: get(ballsPocketedLeftState),
        right: get(ballsPocketedRightState),
      },
      missed: {
        left: get(missedLeftState),
        right: get(missedRightState),
      },
      unforced: {
        left: get(unforcedLeftState),
        right: get(unforcedRightState),
      },
      safety: {
        left: get(safetyLeftState),
        right: get(safetyRightState),
      },
      kicking: {
        left: get(kickingLeftState),
        right: get(kickingRightState),
      },
    };
    return item;
  },
});

export const fireDataState = selector<AllTyp[]>({
  key: "fireDataState",
  get: (_) => fetchData(),
});

export const familyFireDataState = selectorFamily<AllTyp, string>({
  key: "familyFireDataState",
  get: (param) => (_) => familyFetch(param),
});
