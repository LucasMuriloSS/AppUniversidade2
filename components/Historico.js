import * as React from 'react';
import { Text, View, StyleSheet,Button, Image,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker'

import {useState,useEffect} from 'react'

import db from '../config.js'

import {getFirestore, collection, getDocs, setDoc,addDoc, doc, deleteDoc, getDoc} from 'firebase/firestore'
// import Professores from './Professores.js';

export default function Historico() {

  const [cod_turma,setCodT] = useState()
  const [frequencia,setFrequencia] = useState()
  const [matricula,setMatricula] = useState()
  const [nota,setnota] = useState()


  const[Turma,setTurma] = useState([])
  const[Aluno,setAluno] = useState([])


  const collecAluno = collection(db,'Aluno');
  const collecTur = collection(db,'Turma');

  const ChangeTurma = (e) => {console.clear(), console.log(Turma[e.target.value].cod_turma)}
  const ChangeAluno = (e) => {console.clear(), console.log(Aluno[e.target.value].Matricula)}


  const TurmaCod = Turma.map(TurmaCod => TurmaCod)
  const Matricula = Aluno.map(Matricula => Matricula)

  let items = []
  let items2 = []

  useEffect(()=>{

    console.log("Historico")

  },[Turma])

  getDocs(collecTur).then( (snapshot)=> {
    
    snapshot.docs.forEach((doc) => {
      items2.push({...doc.data(), id:doc.id})
      
    })

    if(Turma.length == 0){
      setTurma(items2)
      
    }

  }).catch(err => {
    console.log(err.message)
  })

  getDocs(collecAluno).then( (snapshot)=> {
    
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    if(Aluno.length == 0){
      setAluno(items)
      
    }

  }).catch(err => {
    console.log(err.message)
  })


return (

    <View style={styles.container}>

      <Text style={styles.paragraph}>
        Historico
      </Text>


      <Text style={styles.paragraph}>
        Turma:
      </Text>

      < select
        onChange={e => setCodT(Turma[e.target.value].cod_turma)}
        className="browser-default custom-select" >
        {
          TurmaCod.map((data,key) => <option  value={key}>{data.cod_turma}</option>)
        }
      </select > 

      <Text style={styles.paragraph}>
        Aluno:
      </Text>
      {/* Aluno[e.target.value].Matricula) */}
      < select
        onChange={e => setMatricula(Aluno[e.target.value].Matricula)}
        className="browser-default custom-select" >
        {
          Matricula.map((data,key) => <option  value={key}>{data.nome_disc}</option>)
        }
      </select > 

      <Text style={styles.paragraph}>
        Frequencia:
      </Text>
      <TextInput
        placeholder="Frenquencia"
        value = {frequencia}
        onChangeText = {(text)=>{setFrequencia(text)}}
      />


      <Text style={styles.paragraph}>
        Nota:
      </Text>
      <TextInput
        placeholder="Nota"
        value = {nota}
        onChangeText = {(text)=>{setnota(text)}}
      />

  
      <Button title='Cadastrar'  onPress={() => upload(cod_turma,frequencia,matricula,nota)}></Button>

    </View>
  );
}

function upload(cod_turma,frequencia,matricula,nota){

  const collecRef = collection(db,'Historico');

  let items = []

  getDocs(collecRef).then( (snapshot)=> {
    // console.log(snapshot.docs)

    
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    setDoc(doc(db, "Historico", (items.length + 1).toString()), {
      frequencia:parseInt(frequencia),
      matricula:parseInt(matricula),
      nota:parseInt(nota),
      cod_turma:parseInt(cod_turma),
      cod_historico: parseInt(items.length + 1)

    })

  }).catch(err => {
    console.log(err.message)
  })

  
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