import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput,Pressable, CheckBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CreateResume = () =>{
    const arr = [{sub: "Mathematics", point: 0},
                ];

  return(<> 
  <View>
    <View>
              <View>
              <Pressable onPress={() => setQno(0)}>Go Back</Pressable>
                <View style={styles.headingcreatefile}><Text>Choose your Desired Subject</Text></View>
              </View>
            </View>
            <View>
              <View style={styles.addFeild}>
                <View style={styles.profileCard}>
                  <View style={styles.urDetailWrap}>
                    <View style={styles.bottomMrg}>
                    {arr.map((subj) => (
                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <Pressable
                            style={styles.formControl}
                            onPress={() => setQno(subj.point)}
                          >
                          {subj.sub}
                          </Pressable>
                        </View>
                      </View>
                     ))}

                    </View>
                  </View>
                </View>
                <View>
                  <View>
                    <Pressable style={styles.greenbtnproceed}>Proceed</Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
</>)
}

const currQue = () =>{
  if(qno == 0) return CreateResume();
}

  return (
    <ScrollView>
        <View style={[styles.container, { marginTop: "0rem" }]}>
          {currQue()}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    headingcreatefile:  {
        textAlign: "left",
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
        paddingBottom: "0",
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
        padding: "12px 12px",
        lineHeight: "1.42857143",
        transition: "border-color ease-in-out .15s,boxShadow ease-in-out .15s",
        backgroundColor: "#fbfdff",
        position: "relative",
        zIndex: "2",
        float: "left",
        display: "table-cell",
        
        height: "48px",
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

export default CandidateQuestionary;