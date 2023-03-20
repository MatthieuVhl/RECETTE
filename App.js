import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './component/Categories';
import Recette from './component/Recettes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Accueil"
          component={Categories}
          options={{title: 'All Categories'}}
        />
        <Stack.Screen
          name="Liste Recette"
          component={ListRecette}
          options={{title: 'MealsOverview'}}
        />
        <Stack.Screen
          name="Recette"
          component={Recette}
          options={{title: 'About the Meal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
