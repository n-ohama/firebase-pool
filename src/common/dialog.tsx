import { ChangeEvent, FC, memo, useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { idInputState, isSubmitState } from "./globalState";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Dialog: FC<Props> = ({ isOpen, onClose }) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [isDanger, setIsDanger] = useState(false);
  const [inputValue, setInputValue] = useRecoilState(idInputState);
  const setIsSubmit = useSetRecoilState(isSubmitState);
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onCancel = () => {
    setInputValue("");
    onClose();
  };

  const onClickSubmit = () => {
    if (inputValue) {
      setIsSubmit(true);
    } else {
      setIsDanger(true);
    }
  };

  useEffect(() => {
    if (isDanger) {
      setTimeout(() => setIsDanger(false), 3000);
    }
  }, [isDanger]);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onCancel}
      leastDestructiveRef={cancelRef}
      motionPreset="slideInBottom"
      isCentered
      closeOnOverlayClick={false}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Please type data ID (whatever).
        </AlertDialogHeader>

        <AlertDialogBody>
          <Text>Project ID</Text>
          <Input value={inputValue} onChange={onChangeText} />
          {isDanger && <Text color="red">Invalid value!!</Text>}
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button onClick={onCancel}>Cancel</Button>
          <Button colorScheme="blue" ml={3} onClick={onClickSubmit}>
            Submit
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default memo(Dialog);
