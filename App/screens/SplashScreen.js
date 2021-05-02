import React, { Component, useContext, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { splashStyles } from '@styles/styles'
import { getUsuario } from '@storage/UsuarioAsyncStorage'
//import { UsuarioContext } from '@context/UsuarioContext'

export default class SplashScreen extends Component {
//funcion para navegar entre pantallas
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    } 
     componentDidMount(){
        setTimeout(() =>{
            this.goToScreen('Login')
        }, 3000,this)
    }

   render(){
        return (
            <View style={splashStyles.image}>
                <StatusBar translucent backgroundColor='#fff' />
                <Animatable.Image
                    animation="rotate"
                    //animation="flipInX"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{ height: 100, width: 100, margin : 500 }}
                    source={require('@recursos/images/LogoOviAnimation.png')}
                />
            </View>
        )
    }
 
}  

