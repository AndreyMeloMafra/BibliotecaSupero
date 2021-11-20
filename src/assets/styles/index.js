import styled from 'styled-components/native';
import colors from '../colors';

export const Container = styled.View `
  flex: 1;

  width: 100%;
  height: 100%;

  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text `
  font-size: 22px;
  font-weight: bold;
  height: 30px;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
`;

export const ButtonExpanded = styled.TouchableOpacity `
  width: 50px;
  height: 50px;

  border-radius: 100px;

  background-color: ${colors.grey};

  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const ButtonExpandedText = styled.Text `
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  text-align: center;
`;