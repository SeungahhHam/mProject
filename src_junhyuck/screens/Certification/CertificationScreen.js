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
import CertificationFloatingWriteButton from './CertificationFloatingWriteButton';
import SearchBar from '../../components/SearchBar';
import CertificationList from './CertificationListItem';
import SearchContext from '../../contexts/SearchContext';
import {BASE_URL} from '../../config';
import {useIsFocused} from '@react-navigation/native';

function CertificationScreen({navigation}) {
  const {keyword} = useContext(SearchContext);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch(`${BASE_URL}/api/community/`)
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
                <CertificationList
                  date={free.time}
                  title={free.title}
                  body={free.text}
                  id={free.id}
                />
              ))
          )}
        </View>
      </ScrollView>
      <CertificationFloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: '#F2F2F2',
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

export default CertificationScreen;
