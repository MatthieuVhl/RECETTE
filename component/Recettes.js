import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Recette({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Nom : </Text>
      <Text></Text>
      <Text>description : </Text>
      <Text></Text>
      <Text>duree : </Text>

      <Button
        title="retour a l'accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
