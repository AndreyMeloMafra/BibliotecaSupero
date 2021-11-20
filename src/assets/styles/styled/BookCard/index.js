import styled from 'styled-components/native';
import colors from '../../../colors';

export const BookCardContainer = styled.TouchableOpacity `
  width: 90%;
  min-height: 50px;
  max-height: 150px;

  align-items: center;

  padding: 10px;

  background-color: ${colors.grey};

  border-radius: 5px;
  margin-bottom: 15px;
`;

export const BookCardTitle = styled.Text `
    width: 100%;
    height: auto;

    font-size: 18px;
    font-weight: bold;
`;

export const BookCardAuthor = styled(BookCardTitle)
`
    font-size: 15px;
    font-weight: 600;

    text-align: left;
`;


export const BookCardTextContainer = styled.View `
    width: 100%;
    height: auto;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BookCardText = styled(BookCardAuthor)
`
    width: auto;

    font-size: 11px;
    font-weight: bold;
`;

export const BookCardTitleInput = styled.TextInput `
    width: 100%;
    height: auto;

    font-size: 18px;
    font-weight: bold;

    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border: 1px solid ${colors.black};
`;

export const BookCardAuthorInput = styled(BookCardTitleInput)
`
    font-size: 15px;
    font-weight: 600;

    text-align: left;
`;


export const BookCardTextContainerInput = styled.View `
    width: 100%;
    height: auto;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BookCardTextInput = styled(BookCardAuthorInput)
`
    width: 45%;
    height: 35px;

    font-size: 11px;
    font-weight: bold;

    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border: 1px solid ${colors.black};
`;