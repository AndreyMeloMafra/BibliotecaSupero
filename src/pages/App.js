import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, Touchable, TouchableOpacity, View } from 'react-native';
import colors from '../assets/colors';
import { ButtonExpanded, ButtonExpandedText, Container, Title } from '../assets/styles';
import Header from '../Components/Header';
import PageNavigator from '../Components/PageNavigator';
import RenderBooks from '../Components/RenderBooks';
import { getBooksFromAPI, getSearchBooksFromAPI } from '../configs/requests/index.library';

function App() {

  const [books, setBooks] = useState([]);
  const [booksInitial, setBooksInitial] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');
  const [skipCount, setSkipCount] = useState(0);

  const searchBooks = useCallback(async () => {
    setLoading(true);
    const booksFromAPI = await getSearchBooksFromAPI(input, skipCount);
    setBooks(booksFromAPI.data.items);
    setTotalCount(booksFromAPI.data.totalCount);
  }, [input])

  const getBooks = useCallback(async () => {
    const booksFromAPI = await getBooksFromAPI(10, skipCount);
    setBooks(booksFromAPI.data.items);
    setBooksInitial(booksFromAPI.data.items);
    setTotalCount(booksFromAPI.data.totalCount);
  }, [skipCount])

  useEffect(() => {
    if (books && totalCount) {
      setLoading(false);
    }
  }, [books, totalCount]);

  useEffect(() => {
    if (input.length < 1) {
      setBooks(booksInitial);
    }
  }, [input]);

  useEffect(() => {
    getBooks();
  }, [skipCount]);

  return (
    <Container>
      <Header
        input={input}
        setInput={setInput}
        searchBooks={searchBooks}
      />
      {
        loading ? (
          <ActivityIndicator color={colors.purple} size={24} />
        ) : (
          <>
            <Title>Resultados encontrados: {totalCount}</Title>
            <RenderBooks
              books={books}
            />
            <PageNavigator
              skipCount={skipCount}
              setSkipCount={setSkipCount}
              max={totalCount}
            />
          </>
        )
      }
      <ButtonExpanded>
        <ButtonExpandedText>+</ButtonExpandedText>
      </ButtonExpanded>
    </Container>
  )
};

export default App;
