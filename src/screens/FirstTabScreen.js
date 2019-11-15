import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import newsFeed from '../api/newsFeed';
import ListItem from '../components/ListItem';

const FirstTabScreen = props => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchApi = async () => {
    setError('');
    setIsLoading(true);
    try {
      const response = await newsFeed.get();
      setResults(response.data.records);
    } catch (err) {
      setError('Something went wrong');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    searchApi();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.screen}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={item => item.id}
        data={results}
        renderItem={({item}) => (
          <ListItem title={item.title} imageUrl={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default FirstTabScreen;
