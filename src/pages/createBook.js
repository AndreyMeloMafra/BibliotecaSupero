import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import { Title } from '../assets/styles';
import { BookCardAuthorInput, BookCardText, BookCardTextContainerInput, BookCardTextInput, BookCardTitleInput } from '../assets/styles/styled/BookCard';
import { BooksInformationsModalContainer } from '../assets/styles/styled/BookModal';
import { createBookFromAPI } from '../configs/requests/index.library';

function pages({ navigation }) {

    const [book, setBook] = useState({});

    const createBook = useCallback(async () => {
        const bookFormated = {
            ...book,
            peso: parseInt(book.peso),
            altura: parseFloat(book.altura),
            comprimento: parseFloat(book.comprimento),
            largura: parseFloat(book.largura),
            ano: parseInt(book.ano)
        }
        
        
        const bookCreated = await createBookFromAPI(bookFormated);
        
        console.log(bookCreated)

        if (bookCreated.status === 201 || bookCreated.status === 200) {
            Alert.alert("Sucesso!", "Livro criado com sucesso.")
            navigation.navigate("Home");
        } else {
            Alert.alert("Falha na criação", "Algo aconteceu, verifique os dados novamente.")
        }
    }, [book])

    return (
        <>
            <Title>Criar Livro</Title>
            <BooksInformationsModalContainer >
                <BookCardTitleInput
                    placeholder="Titulo"
                    onChangeText={title => setBook({ ...book, titulo: title })}
                    value={book.titulo}
                />
                <BookCardAuthorInput
                    placeholder="Autor"
                    onChangeText={author => setBook({ ...book, autor: author })}
                    value={book.autor}
                />
                <BookCardTextContainerInput>
                    <BookCardTextInput
                        placeholder="Peso"
                        onChangeText={weight => setBook({ ...book, peso: weight })}
                        value={book.peso}
                    />
                    <BookCardTextInput
                        placeholder="Comprimento"
                        onChangeText={length => setBook({ ...book, comprimento: length })}
                        value={book.comprimento}
                    />
                </BookCardTextContainerInput>
                <BookCardTextContainerInput>
                    <BookCardTextInput
                        placeholder="Altura"
                        onChangeText={height => setBook({ ...book, altura: parseFloat(height) })}
                        value={book.altura}
                    />
                    <BookCardTextInput
                        placeholder="Largura"
                        onChangeText={width => setBook({ ...book, largura: width })}
                        value={book.largura}
                    />
                </BookCardTextContainerInput>
                <BookCardTextContainerInput>
                    <BookCardTextInput
                        placeholder="isbn"
                        onChangeText={isbn => setBook({ ...book, isbn })}
                        value={book.isbn}
                    />
                    <BookCardTextInput
                        placeholder="Ano"
                        onChangeText={year => setBook({ ...book, ano: year })}
                        value={book.ano}
                    />
                </BookCardTextContainerInput>
                <BookCardTextContainerInput>
                    <BookCardTextInput
                        placeholder="Editora"
                        onChangeText={publisher => setBook({ ...book, editora: publisher })}
                        value={book.editora}
                    />
                    <BookCardTextInput
                        placeholder="Idioma"
                        onChangeText={language => setBook({ ...book, idioma: language })}
                        value={book.idioma}
                    />
                </BookCardTextContainerInput>

                <TouchableOpacity onPress={() => createBook()} >
                    <BookCardText style={styles.createButton}>Criar</BookCardText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BookCardText style={styles.closeButton}>Voltar</BookCardText>
                </TouchableOpacity>
            </BooksInformationsModalContainer>
        </>
    );
}

const styles = StyleSheet.create({
    closeButton: {
        fontSize: 14,
        color: colors.purple,
        marginTop: 10
    },
    createButton: {
        fontSize: 14,
        color: colors.green,
        marginTop: 10
    },
})

export default pages;