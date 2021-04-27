
/*import React, { Component } from 'react';
import { Text, View ,Button, Image ,StyleSheet,TouchableOpacity } from 'react-native';
//import { ThemeContext } from 'react-native-elements';
import { db, auth } from './database/firebase';
//import SwipeScreen from './screens/SwipeScreen';

import {mainStyles, loginStyles} from '@styles/styles'
import { FlatList } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
//import ShowData from "./screens/ShowData";

function goToScreen(props, routeName){
    props.navigation.navigate(routeName)
 };
 
const pressHanlder =(age) =>{
  console.log(age);
  
}

class App extends React.Component {
    state = {
    usuarios: null
  }

  componentDidMount(){
    console.log('mounted')
    db.collection('users')
      .get()
      .then ( snapshot =>{ 
        const usuarios =[]
        snapshot.forEach ( doc =>{
          const data = doc.data()
          usuarios.push(data)
        })
        this.setState({usuarios:usuarios})
      // esto es para saber si conecta o no,muestra en terminal:
         
      })
      .catch(error =>console.log(error))

  }

  render() {
    return (
      
      <View style={{padding: 100}}>
        <Image 
          style={styles.stretch}
          source={require('@recursos/images/OviLogin2.png')}/>
        <Text style={ [mainStyles.txtTransparent]}>Elegi tu personaje e :</Text>
        {
          this.state.usuarios && 
          this.state.usuarios.map (item =>{
            return(
              
              <View>
                <TouchableOpacity onPress={()=> pressHanlder(item.age)}>
                    <Text style={styles.solotexto}>{item.name}</Text>
                </TouchableOpacity>          
              </View>
              
            )
          })
        }
      </View>
      
    );
    
  }
}

export default App;

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'center'
  },

  solotexto:{
    color:'white',
    backgroundColor: 'tan',
    marginTop: 20
  }
});
*/

import React from 'react'
import AppNavigation from '@navigation/AppNavigation'
//import DrawerNavigation from '@navigation/DrawerNavigation'
import { UsuarioProvider } from '@context/UsuarioContext'


import { NavigationContainer } from '@react-navigation/native';



function App(){
  return (
    //AppNavigation ESTA ENVUELTO POR UsuarioProvider PARA QUE CUANDO
    // EL CONTEXTO DE LA APP SE DESARROLLE DENTRO DE UNA SESION INICIADA, PODAMOS
    // SABER QUE USUARIO ESTA EN ESA SESION
    
      <UsuarioProvider>
        <AppNavigation/>
      </UsuarioProvider>
    
  )
 
}
export default App