import React, { useCallback, useEffect } from 'react';
import { BookCardAuthor, BookCardContainer, BookCardText, BookCardTextContainer, BookCardTitle } from '../../assets/styles/styled/BookCard';

function BookCard({ setModalVisible, setBookIndex, modalVisible, index, book }) {

    const handleOpenModal = useCallback(() => {
        setModalVisible(!modalVisible);
        setBookIndex(index);
    }, [modalVisible, index, setBookIndex, setModalVisible]);

    return (
        <BookCardContainer onPress={handleOpenModal} >
            <BookCardTitle>{book.titulo}</BookCardTitle>
            <BookCardAuthor>{book.autor}</BookCardAuthor>
            <BookCardTextContainer>
                <BookCardText>editora: {book.editora}</BookCardText>
            </BookCardTextContainer>
            <BookCardTextContainer>
                <BookCardText>isbn: {book.isbn}</BookCardText>
                <BookCardText>{book.ano}</BookCardText>
            </BookCardTextContainer>
        </BookCardContainer>
    );
}

export default BookCard;