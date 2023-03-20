import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../restaurant/data/data';
import Categorie from '../models/category';

export default function Acceuil() {
  return (
    <View style={styles.container}>
      {CATEGORIES.map(categorie => (
        <Categorie
          key={categorie.id}
          categorie={categorie.title}
          color={categorie.color}></Categorie>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
