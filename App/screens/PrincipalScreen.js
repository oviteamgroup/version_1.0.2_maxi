import React, { Component, useContext, useEffect } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    BackHandler,
    StatusBar,
    Alert
} from 'react-native'
import { mainStyles } from '@styles/styles'
import color from '@styles/colors'
import MyButton from '@components/MyButton'
//import { UsuarioContext } from '@context/UsuarioContext'
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

function useBackButton(handler) {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler)

        return () => {
            console.log('hardwareBackPress Close')
            BackHandler.removeEventListener("hardwareBackPress", handler)
        }
    }, [handler])
}

export default function PrincipalScreen(props) {
    return (
        <Container> 
            <Header />
            <StatusBar
                backgroundColor={color.BLUE}
                barStyle='dark-content'
                translucent={true}
            />
            
            <MyButton
                titulo='Cerrar Sesión'
                onPress={() => goToScreen(props,'Login')}
            />
        </Container>

    )

    function goToScreen(props,routeName) {
        props.navigation.navigate(routeName)
    }
}