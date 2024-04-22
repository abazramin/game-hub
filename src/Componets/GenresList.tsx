// import useGenres, { Genre } from "../hooks/useGenres";
import { Alert, Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-ulr";
import GenresSkeleton from "./GenresSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelcetedGener: (ganer: Genre) => void;
}

const GenresList = ({ onSelcetedGener }: Props) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <List>
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GenresSkeleton />
            </GameCardContainer>
          ))}
        {data.map((ganer) => (
          <ListItem key={ganer.id} margin={5}>
            <HStack>
              <Image
                src={getCroppedImageUrl(ganer.image_background)}
                boxSize="32px"
                borderRadius="6px"
              />
              <Button onClick={() => onSelcetedGener(ganer)} variant="link">
                {ganer.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
