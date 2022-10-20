import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../components/Logo';
import Form from '../components/Loginform';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
    AsyncStorage.getItem('USERID').then((value) => {
      if (value) {
        Actions.admindashboard()
      }
    });
		return(
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
         <ScrollView>
			<View style={styles.container}>
				<Logo/>
				<Form type="Login"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>	
      </ScrollView>
      </KeyboardAvoidingView>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:18,
    flexDirection:'row',
    marginBottom:30
  },
  signupText: {
  	color:'#000',
  	fontSize:18
  },
  signupButton: {
  	color:'#000000',
  	fontSize:18,
  	fontWeight:'500'
  }
});
