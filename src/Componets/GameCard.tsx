import { Game } from "../hooks/useGame";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatfromIcon from "./PlatfromIcon";
import getCroppedImageUrl from "../services/image-ulr";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="xl"> {game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatfromIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
