import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';


export default function App() {

  const[tarefas,setTarefas]= useState([  
    {id:"1",titulo:"Aprender Git"},
    {id:"2",titulo:"Aprender fazer commit"},
    {id:"3",titulo:"Aprender utilizar GitHub"},
    {id:"4",titulo:"Criar um novo commit"},
  ])

    const[novaTarefa,setnovaTarefa]=useState('');

    function addTarefa(){
      const task = [{
        id : String(Date.now()),
        titulo : novaTarefa
      }]
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <text style={styles.item}>{item.titulo}</text>
        )}
      />

      <TextInput
        style={styles.input}
        value={novaTarefa}
        onChangeText={(texto)=> setnovaTarefa(texto)}
        placeholder='digite uma tarefa'
        textAlign='center'
      />

      <TouchableOpacity style = {styles.btnAdicionar}><text>Adicionar Tarefa</text></TouchableOpacity>

    </View>
   
  );
}

// Estilos utilizando StyleSheet.create para melhor performance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 206, 142)',
    alignItems: 'center',
    padding: 20,
  },

  titulo:{
    fontSize:45,
    fontWeight:'bold',
    color:'black',
    marginBottom:20,
  },

  item:{
    padding:15,
    marginTop:10,
    backgroundColor:'rgb(181, 30, 30)',
    borderRadius:5,
  },

  btnAdicionar:{
    width:"90%",
    backgroundColor:"#000000",
    margin:15,
    height:40,
    borderRadius:5

  },

  input:{
    borderWidth:1,
    width:'90%',
    margin:15,
    borderColor: '#ccc',
    padding:10,
    marginBottom:10,
    borderRadius:5,
    backgroundColor:'white',
    textAlign:'center',
  },

});

