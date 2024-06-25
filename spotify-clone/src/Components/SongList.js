import React from 'react';
import styled from 'styled-components';
import SongItem from './SongItem';

const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const SongList = ({ songs, setCurrentSong }) => {
  return (
    <ListContainer>
      {songs.map(song => (
        <SongItem key={song.id} song={song} setCurrentSong={setCurrentSong} />
      ))}
    </ListContainer>
  );
};

export default SongList;
