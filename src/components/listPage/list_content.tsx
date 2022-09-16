import { SimpleGrid } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { fireDataState } from "../../common/globalState";
import { ListItem } from "./list_item";

const ListContent = () => {
  const poolData = useRecoilValue(fireDataState);

  return (
    <SimpleGrid columns={{ base: 2 }} spacing={"4"} mt={6} mx={"auto"}>
      {poolData.map((item, index) => (
        <ListItem
          key={index}
          date={`${item.dateTime.toDate()}`}
          name={item.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default ListContent;
