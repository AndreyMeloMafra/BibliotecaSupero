import React from 'react';
import { PageNavigatorButton, PageNavigatorContainer, PageNavigatorText } from '../../assets/styles/styled/PageNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';

function PageNavigator(props) {

    const PreviousPage = () => {
        if (props.skipCount > 0) {
            const newPage = parseInt(props.skipCount) - 10;
            props.setSkipCount(newPage)
        }
    }

    const nextPage = () => {
        const maxRange = Math.floor(parseInt(props.max) / 10);
        const page = Math.floor(parseInt(props.skipCount) / 10)
        if (page < maxRange) {
            const newPage = parseInt(props.skipCount) + 10;
            props.setSkipCount(newPage)
        }
    }

    return (
        <PageNavigatorContainer>
            <PageNavigatorButton onPress={PreviousPage} >
                <Icon name="arrow-left" size={18} />
            </PageNavigatorButton>

            <PageNavigatorText>{props.skipCount / 10}</PageNavigatorText>

            <PageNavigatorButton onPress={nextPage} >
                <Icon name="arrow-right" size={18} />
            </PageNavigatorButton>
        </PageNavigatorContainer>
    );
}

export default PageNavigator;