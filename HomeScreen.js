
import React from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'



const HomeScreen = ({ navigation }) => {

    return (
        <View  style={styles.container}>
      <Text style={styles.title}>
       Visual WEbsite
         Optimizer
      </Text>

            <Button title="Username" style={styles.Button}
            
            onPress={() => navigation.navigate('Username', { name: 'enter name', email: 'taiba@gmail.com' })}>
                <Text>Username</Text>
            </Button >
            <Button
            title="Password" 
             style={styles.Button}
              onPress={() => navigation.navigate('Password', { name: 'taiba', password:"enterpassword"})}>
                <Text>Password</Text>
            </Button >
        </View>
    )
}
const styles=StyleSheet.create({
title:{
  textAlign: 'center',
  justifyContent:"top",
  marginVertical: 10,
  marginHorizontal: 10,
  color:"white",
  fontSize:80,
  fontStyle:"normal"
},
container:{
  flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor:"pink",
},

Button: {
   title:"signup",
  width: "30",
   margin: 10,
    backgroundColor: "white",
    Color:"black",
    justifyContent:"space-between",
    textAlign:"center",
    flexDirection: 'row',
   height:"30",
   borderWidth: 0.5,
   alignitem:"center"

},



})


export default HomeScreen