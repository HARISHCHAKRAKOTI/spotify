import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SongList from './components/SongList';
import Player from './components/Player';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ bgColor }) => bgColor || 'linear-gradient(to bottom, #000000, #434343)'};
`;

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://cms.samespace.com/items/songs');
        setSongs(response.data);
        setCurrentSong(response.data[0]);
        updateBgColor(response.data[0].cover);
      } catch (error) {
        console.error('Error fetching songs', error);
      }
    };
    fetchSongs();
  }, []);

  const updateBgColor = async (coverId) => {
    const imgUrl = `https://cms.samespace.com/assets/${coverId}`;
    const color = await getDominantColor(imgUrl);
    setBgColor(`linear-gradient(to bottom, ${color}, #434343)`);
  };

  const getDominantColor = async (imgUrl) => {
    // Use an external library or implement a function to extract dominant color from the image
    return '#ff0000'; // Placeholder for the dominant color
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppContainer bgColor={bgColor}>
      <GlobalStyle />
      <Header onSearch={handleSearch} />
      <SongList songs={filteredSongs} setCurrentSong={setCurrentSong} />
      {currentSong && <Player currentSong={currentSong} />}
    </AppContainer>
  );
};

export default App;
