import React from 'react';
import { Grid } from '@mui/material';
import PersonCard from './Card';

interface character {
  id: string;
  name: string;
  image: string;
}

interface NFTListProps {
  characters: character[];
}

const List: React.FC<NFTListProps> = ({ characters }) => {
  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
          <PersonCard {...character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
