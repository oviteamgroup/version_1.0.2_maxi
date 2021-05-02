import React, { Component, useState, useContext } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Button
} from 'react-native'
import { mainStyles, loginStyles, registroStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/colors'
import { SocialIcon } from 'react-native-elements'
import * as Facebook from "expo-facebook";

export default function LoginScreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hidePassword, sedHidePassword] = useState(false)
  const [user, setUser] = useState(null);

  //CONECTOR A FACEBOOK
  const signUpFacebook = async () => {
    try {
      await Facebook.initializeAsync("1867974040025672");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );


        // console.log((await response.json()).name);
        const data = await response.json();
        setUser(data);
        goToScreen(props, 'Principal')
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
  //ESTRUCTURA DE LA LOGINSCREEN=======================================
  return (
    <ScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      style={{ backgroundColor: color.WHITE }}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />

      <View style={[mainStyles.container, { padding: 50 }]}>
        <StatusBar backgroundColor={color.BLUE} translucent={true} />
        <View style={loginStyles.logo}>
          <Image source={require('@recursos/images/OviLogin2.png')}
            style={{ height: 100, width: 200 }} />
        </View>
        <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'
          value={email} onChangeText={(email) => setEmail(email)} />
        <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
          secureTextEntry={hidePassword}
          onPress={() => setHidePassword(!hidePassword)}
          value={password} onChangeText={(password) => setPassword(password)} />
        <MyButton
          titulo='Iniciar Sesión'
          onPress={() => goToScreen(props, 'TestingSwipe')} />
        <View>
          <TouchableOpacity onPress={() => goToScreen(props, 'RecuperarPassword')}>
            <Text style={[mainStyles.txtTransparent, { textDecorationLine: 'underline' }]}>Olvide mi Contraseña</Text>
          </TouchableOpacity>
        </View>
        <View style={registroStyles.containerSocial}>
          <SocialIcon
            style={registroStyles.buttonSocialIcon}
            title='Iniciar con Facebook'
            button
            type='facebook'
            onPress={signUpFacebook}
          />
          <SocialIcon
            style={registroStyles.buttonSocialIcon}
            title='Iniciar con Google'
            button
            type='google-plus-official'
            onPress={() => goToScreen(props, 'Principal')}
          />
        </View>
      </View>
    </ScrollView>
  )
}
//FUNCION PARA NAVEGAR ENTRE PANTALLAS,
//RECIBE EL PROPS Y EL NOMBRE DE LA SCREEN A LA QUE NOS QUEREMOS MOVER
function goToScreen(props, routeName) {
  props.navigation.navigate(routeName)
}
