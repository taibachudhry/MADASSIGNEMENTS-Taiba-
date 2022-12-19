import React from 'react'
import { View, Text,StyleSheet,Button} from 'react-native'

const Password = ({ navigation, route }) => {

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }}>login Page by enterpassword </Text>
            <Text style={{ fontSize: 30 }}> {route.params.name}</Text>
            <Button 
            title=" Go back to Home"
            style={styles.Button} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={{ fontSize: 60 }}>Redirect To HomeScreen</Text>
            </Button >
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
          justifyContent: 'center',
          marginHorizontal: 16,
          backgroundColor:"pink",
      },
      Button: {
   
        width: "30",
         margin: 10,
          backgroundColor: "white",
          Color:"black",
          justifyContent:"space-between",
          textAlign:"center",
          flexDirection: 'colomn',
         height:"30",
       
      },
})
export default Password