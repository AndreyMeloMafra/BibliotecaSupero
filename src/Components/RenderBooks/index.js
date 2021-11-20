import React, { useState } from 'react';
import { ContentBooks, RenderBooksContainer } from '../../assets/styles/styled/RenderBooks';
import BookCard from '../BookCard';
import BookModal from '../BookModal';

function RenderBooks(props) {

    const [bookIndex, setBookIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ContentBooks>
            <BookModal
                book={props.books[bookIndex]}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <RenderBooksContainer
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {
                    props.books.map((book, index) => {
                        return <BookCard
                            key={book.id}
                            book={book}
                            setModalVisible={setModalVisible}
                            modalVisible={modalVisible}
                            setBookIndex={setBookIndex}
                            index={index}
                        />
                    })
                }
            </RenderBooksContainer>
        </ContentBooks>
    );
}

export default RenderBooks;