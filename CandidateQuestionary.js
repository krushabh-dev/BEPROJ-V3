import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput,Pressable, CheckBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CandidateQuestionary = ({ navigation }) => {
  const [qno, setQno] = useState(0);
  const QuestionOne = () => {
  return (
<View>
            <View>
              <View>
                <View style={styles.headingcreatefile}><Text>Select Current Level of Education</Text></View>
              </View>
            </View>
            <View>
              <View style={styles.addFeild}>
                <View style={styles.profileCard}>
                  <View style={styles.urDetailWrap}>
                    <View style={styles.bottomMrg}>
                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <Pressable
                            style={styles.formControl}
                            onPress={() => setQno(1)}
                          >
                          <Text>10th</Text>
                          </Pressable>
                        </View>
                      </View>

                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <Pressable
                            style={styles.formControl}
                            onPress={() => setQno(2)}
                          >
                          <Text>12th (Science)</Text>
                          </Pressable>
                        </View>
                      </View>

                      <View style={styles.colMd12}>
                        <View style={styles.inputGroup}>
                          <Pressable
                            style={styles.formControl}
                          >
                          <Text>Diploma</Text>
                          </Pressable>
                        </View>
                      </View>

                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <Pressable
                            style={styles.formControl}
                          >
                          <Text>Graduation</Text>
                          </Pressable>
                        </View>
                      </View>

                      <View style={styles.colMd6}>
                        <View style={styles.inputGroup}>
                          <Pressable
                            style={styles.formControl}
                          >
                          <Text>Post-Graduation</Text>
                          </Pressable>
                        </View>
                      </View>

                      <View style={styles.colMd12}>
                        <View style={styles.inputGroup}>
                          <Pressable
                            style={styles.formControl}
                          >
                          <Text>Doctorate (Ph.D.)</Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <View>
                    <Pressable style={styles.greenbtnproceed}><Text>Proceed</Text></Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
  )
}

const QuestionTwo = () =>{
    const arr = [{sub: "Mathematics", point: 0},
                 {sub: "Science", point: 0},
                 {sub: "Econnomics", point: 1},
                 {sub: "Social Science", point: 1},
                 {sub: "Computers", point: 1},
                 {sub: "Management", point: 1},
                 {sub: "Language - English/Hindi/etc", point: 1}
                 ];

  return(<> 
  <View>
    <View>
              <View>
              <Pressable onPress={() => setQno(0)}><Text>Go Back</Text></Pressable>
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
                          <Text>{subj.sub}</Text>
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

const QuestionThree = () =>{

  const arr = [{sub: "PCM", point: 0}, {sub: "PCB", point: 1}];

  return(<> 
  
  <View>
   <Pressable onPress={() => setQno(0)}><Text>Go Back</Text></Pressable>
    <View>
              <View>
                <View style={styles.headingcreatefile}><Text>Choose your Selected Subjects</Text></View>
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
                          >
                          <Text>{subj.sub}</Text>
                          </Pressable>
                        </View>
                      </View>
                     ))}
                     
                    </View>
                  </View>
                </View>
                <View>
                  <View>
                    <Pressable style={styles.greenbtnproceed}><Text>Proceed</Text></Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
</>)
}

const currQue = () =>{
  if(qno == 0) return QuestionOne();
  else if(qno == 1) return QuestionTwo();
  else if(qno == 2) return QuestionThree();
}

  return (
    <ScrollView>
        <View style={[styles.container, { marginTop: "0rem" }]}>
         <Text> {currQue()}</Text>
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