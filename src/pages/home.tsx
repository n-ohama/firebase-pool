import { EContainer, ECenter } from "../common/styles";
import { RecordItem } from "../components/home/record_item";
import { TopRecord } from "../components/home/top_record";
import { CenterRecord } from "../components/home/center_record";
import { BallsLeftRecord } from "../components/home/balls_left_record";
import { BottomRecord } from "../components/home/bottom_record";
import {
  breakAndRunLeftState,
  breakAndRunRightState,
  consecutiveBRLeftState,
  consecutiveBRRightState,
  dryBreakCountLeftState,
  dryBreakCountRightState,
  madeOnBreakLeftState,
  madeOnBreakRightState,
  scoreLeftState,
  scoreRightState,
  scratchLeftState,
  scratchRightState,
  shotAfterBreakLeftState,
  shotAfterBreakRightState,
  totalBreaksLeftState,
  totalBreaksRightState,
  longestGameWinLeftState,
  longestGameWinRightState,
  ballsPocketedLeftState,
  ballsPocketedRightState,
  missedLeftState,
  missedRightState,
  unforcedLeftState,
  unforcedRightState,
  safetyLeftState,
  safetyRightState,
  kickingLeftState,
  kickingRightState,
  submitState,
  timeState,
  fireDataState,
  isSubmitState,
} from "../common/globalState";
import Dialog from "../common/dialog";
import { Button, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { addData } from "../common/firebase";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useHooks } from "../hooks/useHooks";

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const refreshData = useRecoilRefresher_UNSTABLE(fireDataState);
  const { resetAllInput } = useHooks();
  const topStateList = [
    {
      title: "Game Score",
      left: scoreLeftState,
      right: scoreRightState,
      hasPercentage: false,
    },
    {
      title: "Total Break",
      left: totalBreaksLeftState,
      right: totalBreaksRightState,
      hasPercentage: false,
    },
    {
      title: "Dry Breaks",
      left: dryBreakCountLeftState,
      right: dryBreakCountRightState,
      hasPercentage: true,
    },
    {
      title: "Scratches on Break",
      left: scratchLeftState,
      right: scratchRightState,
      hasPercentage: true,
    },
    {
      title: "Ball Made on Break",
      left: madeOnBreakLeftState,
      right: madeOnBreakRightState,
      hasPercentage: true,
    },
    {
      title: "Shot After The Break",
      left: shotAfterBreakLeftState,
      right: shotAfterBreakRightState,
      hasPercentage: true,
    },
  ];

  const centerStateList = [
    {
      title: "Break and Run",
      left: breakAndRunLeftState,
      right: breakAndRunRightState,
      hasPercentage: false,
    },
    {
      title: "Consecutive Break and Runs",
      left: consecutiveBRLeftState,
      right: consecutiveBRRightState,
      hasPercentage: true,
    },
  ];

  const bottomStateList = [
    {
      title: "Balls Missed",
      left: missedLeftState,
      right: missedRightState,
      hasPercentage: false,
    },
    {
      title: "Unforced Errors",
      left: unforcedLeftState,
      right: unforcedRightState,
      hasPercentage: false,
    },
    {
      title: "Safety Errors",
      left: safetyLeftState,
      right: safetyRightState,
      hasPercentage: false,
    },
    {
      title: "Kicking Errors",
      left: kickingLeftState,
      right: kickingRightState,
      hasPercentage: false,
    },
  ];

  const submitValue = useRecoilValue(submitState);
  const setTime = useSetRecoilState(timeState);
  const [isSubmit, setIsSubmit] = useRecoilState(isSubmitState);

  useEffect(() => {
    if (!isSubmit) return;
    const submitData = async () => {
      setTime(new Date());
      await addData(submitValue);
      setIsSubmit(false);
      refreshData();
      resetAllInput();
      navigate("/list");
    };
    submitData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmit]);

  return (
    <>
      <Dialog onClose={onClose} isOpen={isOpen} />
      <Flex justifyContent={"space-between"} pr={4} pl={4}>
        <Button onClick={onOpen}>Submit</Button>
        <Link to="/list">
          <Icon as={ChevronRightIcon} w={10} h={10} color="grey" />
        </Link>
      </Flex>
      <ECenter h="100%">
        <EContainer>
          <TopRecord />
          {topStateList.map((item) => {
            return (
              <RecordItem
                key={item.title}
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
              />
            );
          })}

          <br />
          {centerStateList.map((item) => {
            return (
              <RecordItem
                key={item.title}
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
              />
            );
          })}

          {/** --- Longest Game Winning Streak --- */}
          <br />
          <RecordItem
            title={"Longest Game Winning Streak"}
            leftState={longestGameWinLeftState}
            rightState={longestGameWinRightState}
            hasPercentage={false}
          />

          <br />
          <CenterRecord />
          <BallsLeftRecord />
          {/** --- Balls Pocketed --- */}
          <RecordItem
            title={"Balls Pocketed"}
            leftState={ballsPocketedLeftState}
            rightState={ballsPocketedRightState}
            hasPercentage={false}
          />

          <br />
          {bottomStateList.map((item) => {
            return (
              <RecordItem
                key={item.title}
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
              />
            );
          })}
          {/** --- ACCU-STAT Performance Rate --- */}
          <BottomRecord />
        </EContainer>
      </ECenter>
    </>
  );
};
