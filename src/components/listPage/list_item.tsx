import { Badge, Box } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { NextBox } from "../../common/styles";

type ItemProps = {
  date: string;
  name: string;
};

export const ListItem: FC<ItemProps> = ({ date, name }) => {
  return (
    <Link to={`/detail/${name}`}>
      <NextBox borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="4">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {date}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {name}
          </Box>
        </Box>
      </NextBox>
    </Link>
  );
};
