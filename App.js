import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';


import { Card } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import Disciplina from './components/Disciplina';
import Professores from './components/Professores';
import Turma from './components/Turma';
import Historico from './components/Historico'
import Aluno from './components/Aluno'


import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Pilha = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MyTabBar({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('SomeScreen');
      }}
    />
  );
}


function App(props) {

  return (

    <View>

      <TouchableOpacity
          onPress = {()=>props.navigation.navigate('Aluno')}>
          <Text>Aluno</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress = {()=>props.navigation.navigate('Disciplina')}>
      <Text>Disciplina</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress = {()=>props.navigation.navigate('Professores')}>
      <Text>Professores</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress = {()=>props.navigation.navigate('Turma')}>
      <Text>Turma</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress = {()=>props.navigation.navigate('Historico')}>
      <Text>Historico</Text>
    </TouchableOpacity>

    </View>  
)}


export default () => {
  return (
    <NavigationContainer>
      <Pilha.Navigator>

        <Pilha.Screen name='App' component={App}>
          
        </Pilha.Screen>
        
        <Pilha.Screen
            name="Aluno"
            component={Aluno}/>
        <Pilha.Screen
            name="Disciplina"
            component={Disciplina}/>
        <Pilha.Screen
            name="Professores"
            component={Professores}/>
        <Pilha.Screen
            name="Historico"
            component={Historico}/>
        <Pilha.Screen
            name="Turma"
            component={Turma}/>
        
               
        </Pilha.Navigator>
    </NavigationContainer>
  )
}