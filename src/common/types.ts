export type DataTyp = {
  title: string;
  score: {
    left: number;
    right: number;
  };
  breaks: number;
};

export type AllTyp = {
  id: string;
  dateTime: any;
  input: {
    left: string;
    right: string;
  };
  score: {
    left: number;
    right: number;
  };
  totalBreaks: {
    left: number;
    right: number;
  };
  dryBreak: {
    left: number;
    right: number;
  };
  scratch: {
    left: number;
    right: number;
  };
  madeOnBreak: {
    left: number;
    right: number;
  };
  shotAfterBreak: {
    left: number;
    right: number;
  };
  breakAndRun: {
    left: number;
    right: number;
  };
  consecutive: {
    left: number;
    right: number;
  };
  longestGameWin: {
    left: number;
    right: number;
  };
  ballsPockets: {
    left: number;
    right: number;
  };
  missed: {
    left: number;
    right: number;
  };
  unforced: {
    left: number;
    right: number;
  };
  safety: {
    left: number;
    right: number;
  };
  kicking: {
    left: number;
    right: number;
  };
};
