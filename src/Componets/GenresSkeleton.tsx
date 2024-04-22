import { List, ListItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenresSkeleton = () => {
  return (
    <List>
      <ListItem>
        <SkeletonText width="200px" height="80px" />
      </ListItem>
    </List>
  );
};

export default GenresSkeleton;
