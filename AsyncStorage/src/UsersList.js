import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function UsersList() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection='row' ,justifyContent='space-between', alignItems='center'}}>
   <Button title='Add' onPress={addItem}/>
   <Button title='Get' onPress={getItems}/>
        </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
