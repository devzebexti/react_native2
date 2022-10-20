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

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
         <ScrollView>
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			</View>	
      </ScrollView>
      </KeyboardAvoidingView>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#fff',
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
