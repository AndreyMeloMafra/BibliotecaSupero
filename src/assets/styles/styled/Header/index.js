import styled from 'styled-components/native';
import colors from '../../../colors';

export const HeaderContainer = styled.View `
  width: 100%;
  height: 100px;

  flex-direction: row;
  justify-content: space-between;

  padding: 30px 15px;

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
  width: 60%;
  height: 35px;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid ${colors.black};
  border-radius: 5px;
`;

export const HeaderSearchInput = styled.TextInput `
  width: 85%;
  height: 45px;
`;