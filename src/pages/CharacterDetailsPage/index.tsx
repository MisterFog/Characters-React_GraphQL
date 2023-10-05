import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../queries';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Box } from '@mui/material';

interface MatchParams {
  id: string;
}

const CharacterDetailsPage: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const character = data.character;

  return (
    <div className="content">
      <button
        className="btn-flip"
        data-back="Go back"
        data-front="Go back"
        onClick={() => {
          history.push('/');
        }}
      />
      <h1>Character Details</h1>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <img src={character?.image} alt={character?.name} />
          <h3>{character?.name}</h3>
          <p>
            <b>Species:</b> {character?.species}
          </p>
          <p>
            <b>Type:</b> {character?.type}
          </p>
          <p>
            <b>Gender:</b> {character?.gender}
          </p>
        </div>
        <div>
          <p>
            <b>Episodes:</b>
          </p>
          {character?.episode?.map((episode: any) => <p key={episode.id}>{episode.name}</p>)}
        </div>
      </Box>
    </div>
  );
};

export default CharacterDetailsPage;
