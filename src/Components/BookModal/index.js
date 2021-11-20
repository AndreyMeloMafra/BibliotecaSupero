import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import colors from '../../assets/colors';
import { BookCardAuthorInput, BookCardText, BookCardTextContainerInput, BookCardTextInput, BookCardTitleInput } from '../../assets/styles/styled/BookCard';
import { BooksInformationsModalContainer } from '../../assets/styles/styled/BookModal';
import { deleteBookFromAPI, getBookFromAPI, updateBookFromAPI } from '../../configs/requests/index.library';

function BookModal(props) {

    const [book, setBook] = useState();
    const [loading, setLoading] = useState(true);

    const getBook = useCallback(async () => {
        setLoading(true);
        const book = await getBookFromAPI(props.book.id);
        setBook(book.data);
    }, [props.book.id]);

    const updateBook = async () => {
        const bookUpdated = await updateBookFromAPI(book.id, book);

        if (bookUpdated.status === 204 || bookUpdated.status === 200) {
            Alert.alert("Sucesso!", "Livro atualizado com sucesso.")
        }
    }

    const deleteBook = async () => {
        const deletedBook = await deleteBookFromAPI(book.id);

        if (deletedBook.status === 204 || deletedBook.status === 200) {
            Alert.alert("Sucesso!", "Livro deletado com sucesso.")
        }
    }

    useEffect(() => {
        if (book) {
            setLoading(false);
        }
    }, [book]);

    useEffect(() => {
        getBook();
    }, [props.book.id]);

    return (
        <ReactNativeModal
            style={styles.modal}
            animationType="fade"
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}
        >
            {
                loading ? (

                    <ActivityIndicator color={colors.purple} size={24} />
                ) : (
                    <BooksInformationsModalContainer style={styles.shadowProperties}>
                        <BookCardTitleInput
                            placeholder={book.titulo}
                            onChangeText={title => setBook({ ...book, titulo: title })}
                            value={book.titulo}
                        />
                        <BookCardAuthorInput
                            placeholder={book.autor}
                            onChangeText={author => setBook({ ...book, autor: author })}
                            value={book.autor}
                        />
                        <BookCardTextContainerInput>
                            <BookCardTextInput
                                placeholder={`Peso: ${book.peso}g`}
                                onChangeText={weight => setBook({ ...book, peso: weight })}
                                value={book.peso.toString()}
                            />
                            <BookCardTextInput
                                placeholder={`Comprimento: ${book.comprimento}cm`}
                                onChangeText={length => setBook({ ...book, titulo: length })}
                                value={book.comprimento.toString()}
                            />
                        </BookCardTextContainerInput>
                        <BookCardTextContainerInput>
                            <BookCardTextInput
                                placeholder={`Altura: ${book.altura}cm`}
                                onChangeText={height => setBook({ ...book, altura: height })}
                                value={book.altura.toString()}
                            />
                            <BookCardTextInput
                                placeholder={`Largura: ${book.largura}cm`}
                                onChangeText={width => setBook({ ...book, largura: width })}
                                value={book.largura.toString()}
                            />
                        </BookCardTextContainerInput>
                        <BookCardTextContainerInput>
                            <BookCardTextInput
                                placeholder={`isbn: ${book.isbn}`}
                                onChangeText={isbn => setBook({ ...book, isbn })}
                                value={book.isbn}
                            />
                            <BookCardTextInput
                                placeholder={`Ano: ${book.ano}`}
                                onChangeText={year => setBook({ ...book, ano: year })}
                                value={book.ano.toString()}
                            />
                        </BookCardTextContainerInput>
                        <BookCardTextContainerInput>
                            <BookCardTextInput
                                placeholder={`Editora: ${book.editora}`}
                                onChangeText={publishe => setBook({ ...book, editora: publishe })}
                                value={book.edit}
                            />
                            <BookCardTextInput
                                placeholder={`Idioma: ${book.idioma}`}
                                onChangeText={language => setBook({ ...book, idioma: language })}
                                value={book.idioma}
                            />
                        </BookCardTextContainerInput>
                        <TouchableOpacity onPress={() => updateBook()}>
                            <BookCardText style={styles.updateButton}>Atualizar</BookCardText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteBook()}>
                            <BookCardText style={styles.deleteButton}>Deletar</BookCardText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.setModalVisible(false)}>
                            <BookCardText style={styles.closeButton}>Fechar</BookCardText>
                        </TouchableOpacity>
                    </BooksInformationsModalContainer>
                )
            }
        </ReactNativeModal>
    );
}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        width: "100%",
        maxHeight: "100%",
        minHeight: 150,
        justifyContent: 'center',
        alignItems: 'center',

    },
    shadowProperties: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    deleteButton: {
        fontSize: 14,
        color: colors.red,
        marginTop: 10
    },
    closeButton: {
        fontSize: 14,
        color: colors.purple,
        marginTop: 10
    },
    updateButton: {
        fontSize: 14,
        color: colors.green,
        marginTop: 10
    }
})

export default BookModal;