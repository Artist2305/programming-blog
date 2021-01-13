import React from 'react';
import { SearchInput, SearchContainer, SearchText } from './styles';

const SearchBox: React.FC = () => {
  return (
    <SearchContainer>
      <SearchText>Search</SearchText>
      <SearchInput />
    </SearchContainer>
  )
}

export default SearchBox;
