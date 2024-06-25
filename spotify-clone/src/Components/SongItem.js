import React from 'react';
import styled from 'styled-components';

const SongContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const CoverImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SongItem = ({ song, setCurrentSong }) => {
  return (
    <SongContainer onClick={() => setCurrentSong(song)}>
      <CoverImage src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} />
      <SongInfo>
        <span>{song.title}</span>
        <span>{song.artist}</span>
      </SongInfo>
    </SongContainer>
  );
};

export default SongItem;
