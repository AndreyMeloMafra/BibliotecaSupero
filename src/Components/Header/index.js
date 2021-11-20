import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import images from '../../assets/images';
import {
  HeaderContainer,
  HeaderFiltersContainer,
  HeaderImage,
  HeaderSearchInput,
  HeaderSearchInputContainer
} from '../../assets/styles/styled/Header';

function Header(props) {

  return (
    <HeaderContainer>
      <HeaderImage source={images.superoLogo} />
      <HeaderFiltersContainer>
        <HeaderSearchInputContainer>
          <HeaderSearchInput
            placeholder="Buscar..."
            onChangeText={text => props.setInput(text)}
          />
          <TouchableOpacity onPress={() => props.searchBooks(props.input)} >
            <Icon name="search" size={18} />
          </TouchableOpacity>
        </HeaderSearchInputContainer>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>De: </Text>
          <HeaderSearchInputContainer width="30%">
            <HeaderSearchInput
              placeholder="Ano"
              width="60%"
              maxLength={4}
              onChangeText={props.setStartYear}
            />
            <Icon name="calendar" size={18} />
          </HeaderSearchInputContainer>

        <Text>Até: </Text>
          <HeaderSearchInputContainer width="30%">
            <HeaderSearchInput
              placeholder="Ano"
              width="60%"
              maxLength={4}
              onChangeText={props.setEndYear}
            />
            <Icon name="calendar" size={18} />
          </HeaderSearchInputContainer>

          <TouchableOpacity onPress={() => props.getBooksByYear(props.startYear, props.endYear)}>
            <Icon name="filter" size={18} />
          </TouchableOpacity>
        </View>

      </HeaderFiltersContainer>
    </HeaderContainer>
  );
}

export default Header;