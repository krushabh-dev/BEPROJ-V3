import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput,Pressable, CheckBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login"
import Register from "./Register"
import CreateProfile from "./CreateProfile"
import CandidateQuestionary from "./CandidateQuestionary"
import CompanyLogin from "./CompanyLogin"
import CompanyProfile from "./CompanyProfile"
const Stack = createNativeStackNavigator();

const Home = ({navigation}) =>{
  return(
    <ScrollView>
    <View style={style.container}>
        <View>
          <Text style={style.mainTitle}> Welcome to Career Dendogram System! </Text>
        </View>
        <View style={style.buttonArea}>
          <View>
              <Pressable 
              style={style.styleButton}
              onPress={() => navigation.navigate('Login')}
              ><Text>Candidate</Text></Pressable>
          </View>
          <View>
              <Pressable 
              style={style.styleButton}
              onPress={() => navigation.navigate('CompanyLogin')}
              ><Text>Company</Text></Pressable>
          </View>
        </View>
        </View>
    </ScrollView>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
        <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
        <Stack.Screen name="Profile" component={CreateProfile} />
        <Stack.Screen name="Candidate" component={CandidateQuestionary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container:{
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    marginLeft: "auto",
    marginRight: "auto"
  },

  mainTitle:{
      textAlign: "center",
      fontSize: "2rem",
      paddingTop: "5rem"
  },

  styleButton:{
     paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft:"20px",
    paddingRight: "20px",
    backgroundColor: "#fff",
    marginBottom: "1.4rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    borderRadius: "8px"
  },

  buttonArea:{
    textAlign: "center",
    marginTop: "3rem"
  }
});
export default App;