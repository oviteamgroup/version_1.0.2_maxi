import React from 'react';
import {View,Text, StyleSheet, Animated} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";




export const Separator = () => <View style = { styles.separator}/>;

const LeftActions  = (progress, dragX) => {
    const scale= dragX.interpolate({
        inputRange:[0,100],
        outputRange:[0,1],
        extrapolate: 'clamp'
    })
    return ( 
        <View style= {styles.leftAction}>
            <Animated.Text style= { [styles.actionText,{transform:[{scale}]} ]}>Maome</Animated.Text>
        </View>
    )
};

const ListItem  = ({ name, onSwipeFromLeft}) => (
    <Swipeable renderLeftActions= { LeftActions}>
        <View style = {styles.container}>
            <Text style = {styles.text}>{name}</Text>
        </View>
    </Swipeable>
);

export default ListItem;


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        paddingHorizontal : 10,
        paddingVertical: 20
    },
    text: {
        color :  "#4a4a4a",
        fontSize: 15
    },
    separator: {
        flex: 1 ,
        height: 1,
        backgroundColor:"#e4e4e4",
        marginLeft: 10
    },
    leftAction:{
        backgroundColor: '#388e3c',
        justifyContent: 'center', 
        flex:1
    },
    actionText:{
        color: '#fff',
        fontWeight: '600',
        padding:20
    }

});