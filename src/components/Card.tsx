import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
}

const PersonCard: React.FC<CharacterCardProps> = ({ id, name, image }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.replace(`/characters/${id}`);
  };

  return (
    <Card onClick={handleCardClick} className="card-container">
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
