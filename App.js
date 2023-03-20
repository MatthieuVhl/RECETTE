import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Recette from './component/Recettes';
import ListRecette from './component/ListRecette';
import Accueil from './component/Accueil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen
          name="Accueil"
          component={Accueil}
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
