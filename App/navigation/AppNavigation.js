import {createAppContainer} from 'react-navigation'
import {createStackNavigator, createSwitchNavigator} from 'react-navigation-stack'

//IMPORTAMOS CADA UNA DE LAS SCREENS QUE TENEMOS
import SplashScreen from '@screens/SplashScreen'
import LoginScreen from '@screens/LoginScreen'
import PrincipalScreen from '@screens/PrincipalScreen'
import RecuperarPasswordScreen from '@screens/RecuperarPasswordScreen'
import RegistroScreen from '@screens/RegistroScreen'
import ProfileScreen from '@screens/ProfileScreen'
import TestingSwipeScreen from '@screens/TestingSwipeScreen'
import DrawerScreen from '@screens/DrawerScreen'


//ACA DECLARAMOS CADA UNA DE NUESTRAS SCREENS PARA DESPUES PODER HACER USO DE ELLAS
const AppNavigation = createStackNavigator({
    
    Splash:{
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    TestingSwipe:{
        screen: TestingSwipeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
     Principal:{
        screen: PrincipalScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    RecuperarPassword:{
        screen: RecuperarPasswordScreen,
        navigationOptions:{
            headerShown: false,
        }

    },
    Registro:{
        screen: RegistroScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Profile:{
        screen: ProfileScreen,
        navigationOptions:{
            headerShown: false,
        }
    
    },
    Drawer:{
        screen: DrawerScreen,
        navigationOptions:{
            headerShown: false,
        }
    }
})
export default createAppContainer(AppNavigation)