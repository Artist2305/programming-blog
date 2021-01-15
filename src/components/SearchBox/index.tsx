import React from 'react';
import { SearchInput, SearchContainer, SearchImage, SearchWrapper } from './styles';
import { useSelector } from 'react-redux';
import { mobileBtnSelector } from '../../state/mobileBtn';
import Icon from '../../utils/Icon';

const SearchBox: React.FC = () => {
  const { btnIcon } = useSelector(mobileBtnSelector);
  return (
    <React.Fragment>
      <SearchContainer>
        <SearchWrapper>
          <SearchInput btnIcon={btnIcon} />
          <SearchImage>
            <Icon icon={'search'} />
          </SearchImage>
        </SearchWrapper>
      </SearchContainer>
    </React.Fragment>
  )
}

export default SearchBox;
