import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ListRecette() {
  <View>
    <Text>List Recette</Text>
    <Button
      title="All Categorie"
      onPress={() =>
        navigation.navigate('Category', {
          Name: '',
          description: '',
          duree: '',
        })
      }
    />
    <Button
      title="recette"
      onPress={() =>
        navigation.navigate('Meal', {
          Name: '',
          ingredient: '',
          duree: '',
        })
      }
    />
  </View>;
}

const styles = StyleSheet.create({});
