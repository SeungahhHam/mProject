import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import SearchBar from '../components/SearchBar';
import FreeList from '../components/FreeListItem';
import SearchContext from '../contexts/SearchContext';
import {BASE_URL} from '../config';
import {useIsFocused} from '@react-navigation/native';

function FreeSearchScreen({navigation}) {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch(`${BASE_URL}/api/community/`) //검색해서 해당 내용만 출력
      .then(response => response.json())
      .then(json => setLists(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [isFocused]);

  return (
    <View style={styles.block}>
      <View style={styles.semiblock}>
        <SearchBar />
      </View>

      <ScrollView>
        <View style={styles.item}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            lists
              .reverse()
              .map(free => (
                <FreeList
                  date={free.time}
                  title={free.title}
                  body={free.text}
                  id={free.id}
                />
              ))
          )}
        </View>
      </ScrollView>
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  semiblock: {
    alignItems: 'center',
  },
  block2: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    color: '#546e7a',
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default FreeSearchScreen;
