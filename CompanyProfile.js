import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput,Pressable, CheckBox, Picker} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CompanyProfile = ({ navigation }) => {
  return (
    <ScrollView>
        <View style={[styles.container, { marginTop: "0rem" }]}>
          <View>
            <View>
              <View>
                <View style={styles.headingcreatefile}><Text>Create Profile</Text></View>
              </View>
            </View>
            <View>
              <View style={styles.addFeild}>
                <View style={styles.profileCard}>
                  <View style={styles.urDetailWrap}>
                    <View style={styles.bottomMrg}>
                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <TextInput
                            type="text"
                            style={styles.formControl}
                            placeholder="First Name"
                          />
                        </View>
                      </View>

                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <TextInput
                            type="text"
                            style={styles.formControl}
                            placeholder="Last Name"
                          />
                        </View>
                      </View>

                      <View style={styles.colMd12}>
                        <View style={styles.inputGroup}>
                          <View style={styles.indiaPhone}><Text>🇮🇳</Text></View>
                          <TextInput
                            type="text"
                            style={[styles.formControl, styles.formPhone]}
                            placeholder="Your Contact Number"
                          />
                        </View>
                      </View>

                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <TextInput
                            type="text"
                            style={styles.formControl}
                            placeholder="Company Name"
                          />
                        </View>
                      </View>

                       <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <Picker
                            type="text"
                            style={styles.formControl}
                            placeholder="Size of Company"
                          >
                           <Picker.Item label="Size of Company" value="" />
                           <Picker.Item label="0-10" value="0-10" />
                           <Picker.Item label="11-100" value="11-100" />
                           <Picker.Item label="101-500" value="101-500" />
                           <Picker.Item label="501-999" value="501-999" />
                           <Picker.Item label="1000-9999" value="1000-9999" />
                           <Picker.Item label="10000+" value="10000+" />
                          </Picker>
                        </View>
                      </View>

                      <View style={styles.colMd12}>
                        <View style={styles.inputGroup}>
                          <TextInput
                            multiline={true}
                            numberOfLines={8}
                            style={styles.formControl}
                            placeholder="Short Description about Company"
                          ></TextInput>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <View>
                    <Pressable style={styles.greenbtnproceed} onPress={() => navigation.navigate('CompanyLogin')}><Text>Proceed</Text></Pressable>
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
    headingcreatefile:  {
        textAlign: "left !important",
        boxSizing: "border-box",
        padding: "0px",
        border: "none",
        
        margin: "0px",
        background: "none",
        position: "relative",
        display: "block",
        lineHeight: "1.2em",
        color: "#202124",
        fontWeight: "500",
        fontSize: "26px",
        paddingTop: "2rem",
        marginBottom: "2rem",
        paddingLeft: "1rem"
    },

    formPhone: {
      paddingLeft: "3rem"
    },

    urDetailWrap: {
        // -webkit-textSize-adjust: "100%",
        // -webkit-tap-highlight-color: "rgba(0,0,0,0)",
        fontFamily: "'Muli',sans-serif",
        fontSize: "15px",
        color: "#667488",
        lineHeight: "24px",
        boxSizing: "border-box",
        width: "100%",
        display: "block",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "0 !important",
        backgroundColor: "#fff",
        padding: "0 2em",
        borderRadius: "6px",
        boxShadow: "0 0 10px 2px rgba(0,0,0,0.1)",
        borderBottom: "3px solid #03a84e"
    },

    inputGroup:  {
        // -webkit-textSize-adjust: "100%",
        // -webkit-tap-highlight-color: "rgba(0,0,0,0)",
        fontFamily: "'Muli',sans-serif",
        fontSize: "15px",
        color: "#667488",
        lineHeight: "24px",
        boxSizing: "border-box",
        position: "relative",
        display: "table",
        borderCollapse: "separate",
        width: "100%"
    },

    formControl:  {
        // -webkit-textSize-adjust: "100%",
        // -webkit-tap-highlight-color: "rgba(0,0,0,0)",
        borderCollapse: "separate",
        boxSizing: "border-box",
        margin: "0",
        
        fontFamily: "inherit",
        padding: "6px 12px",
        lineHeight: "1.42857143",
        transition: "border-color ease-in-out .15s,boxShadow ease-in-out .15s",
        backgroundColor: "#fbfdff",
        position: "relative",
        zIndex: "2",
        float: "left",
        display: "table-cell",
        
        height: "52px",
        width: "100%",
        color: "#707c88",
        fontWeight: "400",
        fontSize: "16px",
        marginBottom: "15px",
        boxShadow: "none",
        border: "1px solid #ccddea",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0"
    },

    bottomMrg:  {
        paddingTop: "2rem",
        paddingBottom: "1rem",
    },

    container:  {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto"
    },

    indiaPhone:  {
        position: "absolute",
        zIndex: "6",
        top: "0.8rem",
        left: "0.8rem",
        fontSize: "1.4rem"
    },
    greenbtnproceed: {
        backgroundColor: "#00b851",
        marginTop: "1rem",
        padding: "0.5rem 2rem",
        borderRadius: "5px",
        color: "#fff",
        boxShadow: "7px 7px 20px #00c95463",
        marginLeft: "60%",
      }
});

export default CompanyProfile;