import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput,Pressable, CheckBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Login = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <ScrollView>
      <View style={styles.loading}>
        <View style={styles.container}>
          <View style={styles.loginarea}>
            <View style={styles.loginForm, styles.defaulTForm}>
              <View style={styles.formInner}>
                <Text style={styles.h3}>Login to SuperApp</Text>
                <View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                      type="text"
                      name="username"
                      placeholder="Username"
                      required=""
                      style={styles.loginSectionInput}
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                      id="password-field"
                      type="password"
                      name="password"
                      placeholder="Password"
                      style={styles.loginSectionInput}
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <View style={styles.fieldOuter}>
                      <View style={styles.TextinputGroup, styles.checkboxes, styles.square}>
                        <CheckBox
                          type="checkbox"
                          value={isSelected}
                          onValueChange={setSelection}
                          style={styles.remembercheckbox}
                        />
                        <Text htmlFor="remember" style={styles.remember}>
                          <Text style={styles.customCheckbox}></Text> Remember me
                        </Text>
                      </View>
                      <Pressable style={styles.pwd} >Forgot password?
                      </Pressable>
                    </View>
                  </View>

                  <View style={styles.formGroup}>
                    <Pressable
                      style={styles.btnStyleOne}
                      type="submit"
                      name="log-in"
                      title="Log In"
                      onPress={() => navigation.navigate('Profile')}
                    >
                      Login
                    </Pressable>
                  </View>
                </View>

                <View style={styles.bottomBox}>
                  <View style={{display: "flex"}}>
                    <Text style={styles.text}>Don't have an account?</Text>
                    <Pressable style={styles.text} 
                    onPress={() => navigation.navigate('Register')}>
                      Signup
                    </Pressable>
                  </View>
                  <View style={styles.divider}>
                    <Text>or</Text>
                  </View>
                  <View>
                    <View style={styles.colLg6, styles.colMd12}>
                      <Pressable
                        href="#"
                        style={styles.themeBtn, styles.socialBtnTwo, styles.appleBtn}
                      >
                      Continue with Apple
                      </Pressable>
                    </View>
                    <View style={styles.colLg6, styles.colMd12}>
                      <Pressable
                        href="#"
                        style={styles.themeBtn, styles.socialBtnTwo, styles.googleBtn}
                      >
                      Continue with Google
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        /* padding-right: "15px",
        padding-left: "15px", */
        marginRight: "auto",
        marginLeft: "auto",
    },
    
    loginSectionInput: {
        width: "100%",
        display: "block",
        height: "60px",
        lineHeight: "30px",
        padding: "15px 20px",
        fontSize: "15px",
        color: "#696969",
        backgroundColor: "#F0F5F7",
        border: "1px solid #F0F5F7",
        boxSizing: "border-box",
        borderRadius: "8px",
        transition: "all 300ms ease",
    },
    
    loginarea:{
        maxWidth: "500px",
        paddingTop: "30px",
        paddingRight: "40px",
        paddingBottom: "20px",
        overflow: "visible",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "none",
    },
    
    loginForm: {
        lineHeight: "28px",
        fontWeight: "400",
        // -webkit-fontSmoothing: "antialiased",
        fontFamily: "'Jost', sans-serif",
        fontStyle: "normal",
        textAlign: "left",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
        border: "none",
        
        fontSize: "100%",
        position: "relative",
    },
    
    formInner: {
        lineHeight: "28px",
        fontWeight: "400",
        // -webkit-fontSmoothing: "antialiased",
        fontFamily: "'Jost', sans-serif",
        fontStyle: "normal",
        textAlign: "left",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
        border: "none",
        
        fontSize: "100%",
    },
    
    h3: {
        fontStyle: "normal",
        boxSizing: "border-box",
        padding: "0px",
        border: "none",
        
        position: "relative",
        margin: "0px",
        background: "none",
        fontWeight: "500",
        fontSize: "24px",
        lineHeight: "33px",
        color: "#202124",
        marginBottom: "32px",
        textAlign: "center",
    },
    
    formGroup: {
        lineHeight: "28px",
        fontWeight: "400",
        // -webkit-fontSmoothing: "antialiased",
        fontFamily: "'Jost', sans-serif",
        fontStyle: "normal",
        textAlign: "left",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
        border: "none",
        
        fontSize: "100%",
        position: "relative",
        marginBottom: "20px",
    },
    
    label: {
        fontStyle: "normal",
        textAlign: "left",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
        border: "none",
        
        display: "inline-block",
        fontSize: "15px",
        lineHeight: "20px",
        color: "#202124",
        fontWeight: "500",
        marginBottom: "10px",
    },
    
    fieldOuter: {
        color: "#363636",
        lineHeight: "28px",
        fontWeight: "400",
        fontStyle: "normal",
        textAlign: "left",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
        border: "none",
        
        fontSize: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "32px",
        marginBottom: "32px",
        flexWrap: "wrap",
        alignItems: "flex-end",
        flexDirection: "column-reverse",
    },
    
    // inputGroup.checkboxes.square: {
    square: {
        textAlign: "left",
        boxSizing: "border-box",
        margin: "0px",
        border: "none",
        
        fontSize: "100%",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch",
        width: "100%",
        listStyle: "none",
        padding: "0",
    },
    
    pwd: {
        textAlign: "left",
        boxSizing: "border-box",
        margin: "0px",
        padding: "0px",
        border: "none",
        
        textDecorationLine: "none",
        cursor: "pointer",
        position: "relative",
        display: "block",
        fontSize: "14px",
        lineHeight: "19px",
        color: "#202124",
        whiteSpace: "nowrap",
    },
    
    remember: {
        width: "auto",
        height: "auto",
    },

    remembercheckbox:{
        boxSizing: "border-box",
    },
    
    // button.theme-btn.btn-style-one: {
    btnStyleOne: {
        outline: "none",
        // -webkit-appearance: "button",
        transition: "all 0.5s ease",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "#ffffff",
        backgroundColor: "#1967D2",
        fontSize: "15px",
        lineHeight: "20px",
        borderRadius: "8px",
        fontWeight: "400",
        paddingTop: "18px",
    paddingRight: "35px",
    paddingBottom: "15px",
    paddingLeft: "35px",
        cursor: "pointer",
        position: "relative",
        minWidth: "160px",
        display: "block",
        width: "100%",
        marginBottom: "10px",
        border: "0",
    },
    
    // bottom-box .text{
    text: {
        fontStyle: "normal",
        boxSizing: "border-box",
        padding: "0px",
        border: "none",
        
        fontWeight: "400",
        margin: "0",
        position: "relative",
        fontSize: "14px",
        lineHeight: "19px",
        color: "#696969",
        textAlign: "center",
        marginTop: "5px",
    },
    
    divider: {
        fontWeight: "400",
        // -webkit-fontSmoothing: "antialiased",
        fontFamily: "'Jost', sans-serif",
        fontStyle: "normal",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "0px",
        border: "none",
        
        position: "relative",
        display: "block",
        fontSize: "15px",
        lineHeight: "20px",
        color: "#696969",
        backgroundColor: "#ffffff",
        margin: "10px 0 25px",
    },
    
    // a.theme-btn.social-btn-two.appleBtn: {
    appleBtn: {
        // -webkit-text-size-adjust: "100%",
        // -webkit-tap-highlight-color: "transparent",
        // -webkit-fontSmoothing: "antialiased",
        fontStyle: "normal",
        // --bs-gutter-x: "1.5rem",
        // --bs-gutter-y: "0",
        boxSizing: "border-box",
        margin: "0px",
        
        textDecorationLine: "none",
        cursor: "pointer",
        transition: "all 0.5s ease",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        position: "relative",
        display: "block",
        width: "100%",
        textAlign: "center",
        whiteSpace: "nowrap",
        fontSize: "14px",
        borderRadius: "8px",
        border: "1px solid #fff",
        fontWeight: "500",
        lineHeight: "25px",
        marginBottom: "20px",
        /* borderColor: "#000002", */
        color: "#000",
        backgroundColor: "#e1fcf3",
        borderColor: "#e1fcf3", 
        /* backgroundColor: "#000002", */
        /* borderColor: "#3b5998",
        color: "#3b5998", */
        padding: "10px 20px",
    },
    
    // a.theme-btn.social-btn-two.googleBtn: {
    googleBtn: {
        // -webkit-text-size-adjust: "100%",
        // -webkit-tap-highlight-color: "transparent",
        // -webkit-fontSmoothing: "antialiased",
        fontStyle: "normal",
        // --bs-gutter-x: "1.5rem",
        // --bs-gutter-y: "0",
        boxSizing: "border-box",
        margin: "0px",
        
        textDecorationLine: "none",
        cursor: "pointer",
        transition: "all 0.5s ease",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        position: "relative",
        display: "block",
        width: "100%",
        textAlign: "center",
        whiteSpace: "nowrap",
        fontSize: "14px",
        borderRadius: "8px",
        /* border: "1px solid #fff", */
        fontWeight: "500",
        lineHeight: "25px",
        marginBottom: "20px",
        borderColor: "#dc4d28",
        /* backgroundColor: "#eb3a3b", */
        backgroundColor: "#e1fcf3",
        color: "#000",
        padding: "10px 20px",
    },
    
    /* https://creativelayers.net/themes/superio/index-3.html */
    /* https://creativelayers.net/themes/superio/index-3.html */
  });

export default Login;