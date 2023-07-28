import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    name: {
      color: '#28bbfe',
    },
    age: {
      color: 'red',
    },
  },
});

type ItemType = {
  name: string;
  age: number;
};

// @ts-ignore
// eslint-disable-next-line no-array-constructor
const listData: ItemType[] = Array({length: 50}, (_: number, index: number) => {
  return {
    name: `Devin${index + 1}号`,
    age: getRandomInt(50),
  };
});
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
const FlatListBasics = () => {
  return (
    <View>
      <FlatList
        data={listData}
        renderItem={({item}) => {
          return (
            <Text style={styles.item}>
              <Text style={styles.item.name}>{item.name}</Text>
              <Text style={styles.item.age}>{item.age}</Text>
            </Text>
          );
        }}
      />
    </View>
  );
};

export default FlatListBasics;
