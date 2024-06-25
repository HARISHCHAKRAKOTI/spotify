import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const Player = ({ currentSong }) => {
  const audioRef = useRef(new Audio(`https://cms.samespace.com/assets/${currentSong.url}`));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.src = `https://cms.samespace.com/assets/${currentSong.url}`;
    audioRef.current.play();
    setIsPlaying(true);
  }, [currentSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      <h2>{currentSong.title}</h2>
      <Controls>
        <Button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</Button>
      </Controls>
    </PlayerContainer>
  );
};

export default Player;
