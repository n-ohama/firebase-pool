import {
  Center,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { tableSubjects } from "../../common/constants";
import { familyFireDataState } from "../../common/globalState";
import { EContainer } from "../../common/styles";

type FRIProps = {
  left?: number;
  right?: number;
  title: string;
};

const FullRecordItem: FC<FRIProps> = ({ left, right, title }) => {
  return (
    <Tr>
      <Th></Th>
      <Td>{left}</Td>
      <Td>{title}</Td>
      <Td>{right}</Td>
      <Th></Th>
    </Tr>
  );
};

type ContentProps = {
  id: string;
};

export const DetailContent: FC<ContentProps> = ({ id }) => {
  const data = useRecoilValue(familyFireDataState(id));
  const items: FRIProps[] = useMemo(() => {
    return [
      { ...data.score, title: tableSubjects[0] },
      { ...data.totalBreaks, title: tableSubjects[1] },
      { ...data.dryBreak, title: tableSubjects[2] },
      { ...data.scratch, title: tableSubjects[3] },
      { ...data.madeOnBreak, title: tableSubjects[4] },
      { ...data.shotAfterBreak, title: tableSubjects[5] },
      { ...data.breakAndRun, title: tableSubjects[6] },
      { ...data.consecutive, title: tableSubjects[7] },
      { ...data.longestGameWin, title: tableSubjects[8] },
      { title: tableSubjects[9] },
      { ...data.ballsPockets, title: tableSubjects[11] },
      { ...data.missed, title: tableSubjects[12] },
      { ...data.unforced, title: tableSubjects[13] },
      { ...data.safety, title: tableSubjects[14] },
      { ...data.kicking, title: tableSubjects[10] },
    ];
  }, [data]);
  return (
    <Center>
      <EContainer>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>{data.input.left}</Th>
                <Th>First breaks</Th>
                <Th>Break</Th>
                <Th>Odd breaks</Th>
                <Th>{data.input.right}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <FullRecordItem key={item.title} {...item} />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td></Td>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th>multiply by</Th>
                <Td></Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </EContainer>
    </Center>
  );
};
