import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #000;
  color: #fff;
`;

const SearchInput = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const Header = ({ onSearch }) => {
  return (
    <HeaderContainer>
      <h1>Music Player</h1>
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </HeaderContainer>
  );
};

export default Header;
