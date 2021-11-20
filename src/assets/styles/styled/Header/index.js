import styled from 'styled-components/native';
import colors from '../../../colors';

export const HeaderContainer = styled.View `
  width: 100%;
  height: 100px;

  flex-direction: row;
  justify-content: space-between;

  background-color: ${colors.grey};

  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border: 1px solid ${colors.black};

  margin-bottom: 15px;
`;

export const HeaderImage = styled.Image `
  width: 30%;
  height: auto;
  resize-mode: contain;
`;

export const HeaderSearchInputContainer = styled.View `
  width: ${props => props.width ? props.width : "100%"};
  height: 30px;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid ${colors.black};
  border-radius: 5px;

  margin-top: 10px;
`;

export const HeaderSearchInput = styled.TextInput `
  width: ${props => props.width ? props.width : "85%"};
  height: 45px;
`;

export const HeaderFiltersContainer = styled.View `
  width: 60%
  height: 100px;
  
  padding: 15px;
`;