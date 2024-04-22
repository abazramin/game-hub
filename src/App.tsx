import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Componets/Navbar";
import GameGrid from "./Componets/GameGrid";
import GenresList from "./Componets/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  // the state selected geners
  const [selectGener, setSelectGener] = useState<Genre | null>(null);
  return (
    <Grid
      padding={5}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" padding={2}>
          <GenresList onSelcetedGener={(ganer) => setSelectGener(ganer)} />
        </GridItem>
      </Show>

      <GridItem area="main ">
        <GameGrid selected={selectGener} />
      </GridItem>
    </Grid>
  );
}

export default App;
