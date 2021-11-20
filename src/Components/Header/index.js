import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import images from '../../assets/images';
import {
  HeaderContainer,
  HeaderImage,
  HeaderSearchInput,
  HeaderSearchInputContainer
} from '../../assets/styles/styled/Header';

function Header(props) {

  return (
    <HeaderContainer>
      <HeaderImage source={images.superoLogo} />
      <HeaderSearchInputContainer>
        <HeaderSearchInput
          placeholder="Buscar..."
          onChangeText={text => props.setInput(text)}
        />
        <TouchableOpacity onPress={() => props.searchBooks(props.input)} >
          <Icon name="search" size={18} />
        </TouchableOpacity>
      </HeaderSearchInputContainer>
    </HeaderContainer>
  );
}

export default Header;