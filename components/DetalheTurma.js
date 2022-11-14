import * as React from 'react';
import { Text, View, StyleSheet,Button, Image,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker'

import {useState,useEffect} from 'react'

import db from '../config.js'

import {getFirestore, collection, getDocs, setDoc,addDoc, doc, deleteDoc, getDoc} from 'firebase/firestore'
// import Professores from './Professores.js';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Pilha = createStackNavigator();

export default function DetalheTurma() {

  const collecRef = collection(db,'Turma');

  const  [Turmas,setTurmas] = useState([])

  let items = []
  let items2 = []

  useEffect(()=>{

    console.log("Turmas")

  },[Turmas])

  getDocs(collecRef).then( (snapshot)=> {

    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    if(Turmas.length == 0){
      setTurmas(items)
      
    }

  }).catch(err => {
    console.log(err.message)
  })

  return (

    <View style={styles.container}>

      <Text style={styles.paragraph}>
        Turmas:
      </Text>

      {Turmas.map((data,key)=>

        
          <Text value={key}>
            Testando
          </Text>

       

      )}


      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    }
  });