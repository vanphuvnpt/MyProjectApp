import React from "react";
import { View,Text,StyleSheet } from "react-native";
const LoginScreen =({navigation})=>{
    return(
        <View style={styles.container}>
            <Text> Day la trang login</Text>
        </View>
    );
}
export default LoginScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }
})

