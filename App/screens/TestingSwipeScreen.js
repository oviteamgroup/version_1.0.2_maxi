import React from  'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ListItem, {Separator} from "@screens/ListItem";
import { db, auth } from '@database/firebase';



const quotes = []
export default class App extends React.Component {


    componentDidMount(){
        console.log('mounted')
        db.collection('users')
          .get()
          .then ( snapshot =>{ 
            const usuarios =[]
            snapshot.forEach ( doc =>{
              const data = doc.data()
              quotes.push(data)
              //console.log(data) - esto es para saber si conecta o no,muestra en terminal
            })
            this.setState({usuarios:usuarios})
          // esto es para saber si conecta o no,muestra en terminal:
             
          })
          .catch(error =>console.log(error))
          
      }
    render (){
        return(
            <SafeAreaView style={styles.container}>
             
                   
                    <FlatList 
                        data={quotes}
                        keyExtractor ={item=>item.id}
                        renderItem={({item})=>(
                            <ListItem
                                {...item}
                                onSwipeFromLeft  = { () => alert ( "swiped from left! ")}
                                />
                        )}
                        ItemSeparatorComponent={()=> <Separator/>}
                        />
                
            
            
            </SafeAreaView>

        );
    }
}



const styles = StyleSheet.create ({
    container:{
        flex:1 ,
        backgroundColor : "#fff"
    }
});



/*
const quotes = [
    {id : "0", text : "Aca"},
    {id : "1", text : "Tene"},
    {id : "2", text : "Tu"},
    {id : "3", text : "Swipe"}
]*/
/*
export default class App extends React.Component {
    render (){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={quotes}
                    keyExtractor ={item=>item.id}
                    renderItem={({item})=>(
                        <ListItem
                            {...item}
                            onSwipeFromLeft  = { () => alert ( "swiped from left! ")}
                            />
                    )}
                    ItemSeparatorComponent={()=> <Separator/>}
                    />
                    
            </SafeAreaView>

        );
    }
}



const styles = StyleSheet.create ({
    container:{
        flex:1 ,
        backgroundColor : "#fff"
    }
});
*/