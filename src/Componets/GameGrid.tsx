import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selected: Genre | null;
}

const GameGrid = ({ selected }: Props) => {
  //  use games
  const { data, error, isLoading } = useGames(selected);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={{ sm: 10, md: 5, lg: 5, xl: 5 }}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
