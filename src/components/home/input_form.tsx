import { ChangeEvent, FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { leftInput, rightInput } from "../../common/globalState";

type Props = {
  isRight?: boolean;
};

export const InputForm: FC<Props> = ({ isRight }) => {
  // getter
  const leftGetter = useRecoilValue(leftInput);
  const rightGetter = useRecoilValue(rightInput);
  // setter
  const leftSetter = useSetRecoilState(leftInput);
  const rightSetter = useSetRecoilState(rightInput);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    if (isRight) {
      rightSetter(item);
    } else {
      leftSetter(item);
    }
  };

  return (
    <input
      type="text"
      className="inputText"
      id="name"
      name="name"
      value={isRight ? rightGetter : leftGetter}
      onChange={handleChange}
    />
  );
};
