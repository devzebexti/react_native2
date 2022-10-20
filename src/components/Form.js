import React, { Component } from 'react';;
import Form from '../components/Loginform';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios').default;
export default class Logo extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { isShowingLoader: false, username: '', email: '', password:'' };
  }
callSignup = async () => {
  
  if(this.state.username && this.state.email && this.state.password) {
    this.setState({isShowingLoader: true});
    try{
      console.log(this.state.username)
      console.log(this.state.email)
      console.log(this.state.password)
        
        const formData = new FormData();
        formData.append('method', 'signup');
        formData.append('username', this.state.username);
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
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
         <ScrollView>
			<View style={styles.container}>
          <View style={styles.logingheading}>
            <Text style={styles.clswelcome}>Create account, </Text>
            <Text style={styles.clswelcomesub}>Sign up to get started!</Text>
          </View>
          <View>
              <TextInput style={styles.inputBox} 
                onChangeText={(username) => this.setState({username})} 
                placeholder = "Username "
                placeholderTextColor = "#000"
                selectionColor="#fff"
                selectionColor="#000"
              />
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
         
           <TouchableOpacity onPress={this.callSignup} style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
      </ScrollView>
      </KeyboardAvoidingView>
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
    paddingHorizontal:16,
    fontSize:16,
    color:'#000',
    marginVertical: 10
  },
  button: {
    width:350,
    backgroundColor:'#000',
     borderRadius: 10,
      marginVertical: 10,
      paddingVertical: 13,
    marginTop:30  
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
   fieldSet:{
      marginTop: 20,
      paddingHorizontal: 10,
      paddingTop: 25,
      paddingBottom: 20,
      borderRadius: 5,
      borderWidth: 3,
      alignItems: 'center',
      borderColor: '#f3a041'
  },
  legend:{
      position: 'absolute',
      top: -15,
      left: 10,
      fontWeight: 'bold',
      backgroundColor: '#f3a041',
      color:'#FFF',
      fontSize: 15,
      fontWeight: "bold",
      padding:5
  },
  
});