import React, { Component } from 'react';
import Home from '../pages/Home.js';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView 
} from 'react-native';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpinnerButton from 'react-native-spinner-button';
const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {
  }
});
const axios = require('axios').default;
export default class Loginform extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { isShowingLoader: false, email: '', password:'' };
  }

callSignup = async () => {

if(this.state.email && this.state.password) {
    this.setState({isShowingLoader: true});
    try{
      console.log("comethisform")
    console.log(this.state.email)
    console.log(this.state.password)
        
        const formData = new FormData();
        formData.append('method', 'login');
        formData.append('email_address', this.state.email);
        formData.append('password', this.state.password);
        axios({
        url    : 'https://miamidata.com/mvpapi/webservices.php',
        method : 'POST',
        data   : formData,
        headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                        //console.log("response :", response);
                        //console.log("responseid :", response.data.userid);
                        //this.setState({ articleId: response.data.id });
                        this.setState({isShowingLoader: false});
                        if(response.data.success)
                        {
                            console.log("responseid :", response.data.data.username);
                            console.log("userid:",response.data.data.id);
                            AsyncStorage.setItem('USERID', response.data.data.id);
                            AsyncStorage.setItem('emailaddress', response.data.data.email_address);
                            if(response.data.data.is_admin)
                            {
                              Actions.admindashboard();
                            }
                            else
                            {
                              Actions.admindashboard();
                            }
                               
                        }
                        else
                        {
                            Alert.alert(
                                'Message',
                                response.data.message,
                                [
                                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                                ],
                                {cancelable: false},
                            )   
                        }
            })
            .catch((e) => 
            {
              console.error(e);
              console.log("error from image :");
            });

    } catch (error) {
        console.log(error);
        this.setState({isShowingLoader: false});
        Alert.alert(
            'Error',
            'Something went wrong!',
            [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        )
    }
    } else {
    Alert.alert(
        'Error',
        'Please enter required fields!',
        [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
    )
}
}

	render(){
		return(

      
			<View style={styles.container}>
          <View style={styles.logingheading}>
            <Text style={styles.clswelcome}>Welcome, </Text>
            <Text style={styles.clswelcomesub}>Sign in to continue!</Text>
          </View>
          <TextInput style={styles.inputBox} 
              onChangeText={(email) => this.setState({email})}  
              placeholder="Email"
              placeholderTextColor = "#000"
              selectionColor="#fff"
              keyboardType="email-address"
              selectionColor="#000"
              />
          <TextInput style={styles.inputBox}  
              onChangeText={(password) => this.setState({password})} 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#000"
              ref={(input) => this.password = input}
              selectionColor="#000"
              />  
              <SpinnerButton
                  buttonStyle={styles.button}
                  isLoading={this.state.isShowingLoader}
                  indicatorCount={10}
                  onPress={this.callSignup}
                >
                <Text style={styles.buttonText}>{this.props.type}</Text>
              </SpinnerButton>
  		</View>
      
			)
	}
}

const styles = StyleSheet.create({
  container : {
    
  },
  clswelcome:{
    fontSize:28,
    fontWeight:'bold'
  },
  clswelcomesub:{
    fontSize:24,
  },
  logingheading:{
    marginTop:20,
    marginBottom:30,
  },
  inputBox: {
     width:350,
     height:50,
     backgroundColor:'rgb(235, 236, 240)',
     borderRadius: 10,
     paddingHorizontal:12,
     fontSize:16,
     color:'#000',
     marginVertical: 10
  },
  button: {
    width:350,
    backgroundColor:'#000',
     borderRadius: 10,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
    textAlign:'center'
  },
  buttonStyle:{
    borderRadius: 10,
    margin: 20,
  }
  
});