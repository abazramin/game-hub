import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yallow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" padding="4px" borderRadius="6px">
      {score}
    </Badge>
  );
};

export default CriticScore;
