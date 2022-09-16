import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";
import { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { CenterSpinner } from "../components/center_spinner";
import { DetailContent } from "../components/detailPage/detail_content";
import { DetailHeading } from "../components/detailPage/detail_heading";

export const DetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <Box pl={4}>
        <Link to="/list">
          <Icon as={ChevronLeftIcon} w={10} h={10} color="grey" />
        </Link>
      </Box>
      <DetailHeading />
      <Suspense fallback={<CenterSpinner />}>
        {id && <DetailContent id={id} />}
      </Suspense>
    </>
  );
};
