import React, { Component } from 'react';
import Locations from './Locations.js';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../components/Logo';
import { WebView } from 'react-native-webview';
import SpinnerButton from 'react-native-spinner-button';
const axios = require('axios').default;
export default class Pdfview extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {
         storeuserid:'',
         firsttimedata:true,
         pdffilename:'',
         pagetype:'',
         isLoading:'',
         isShowingLoader:'',
         email_address:'',
      };
   }
   callSignup = async () => {
      this.setState({isShowingLoader: true});
      this.setState({ isLoading: true });
      try{
         
         console.log("Click Event Call-------");
         console.log(this.state.storeuserid);
         console.log(this.state.pdffilename);
         console.log(this.state.pagetype);
         console.log("email_address::"+this.state.email_address);
         const formData = new FormData();
         formData.append('method', 'resendemail');
         formData.append('user_id', this.state.storeuserid);
         formData.append('pdffilename', this.state.pdffilename);
         formData.append('page_type', this.state.pagetype);
         formData.append('email_address', this.state.email_address);         
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
                  Alert.alert(
                     'Message',
                     response.data.message,
                     [
                        {text: 'OK', onPress: () => Actions.admindashboard()},
                     ],
                     {cancelable: false},
                  )
                  
            })
            .catch((e) => 
            {
               console.error(e);
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
 }
   goCreateNewPermit = async () => {
      Actions.home()
   } 
   componentDidMount(){
      if(this.state.firsttimedata)
      {
         AsyncStorage.getItem('USERID').then((value) => {
            console.log(value);
            if (value) {
              this.setState({
                  storeuserid: value
               });
            }
            this.setState({firsttimedata:false})
         });
         this.setState({
            pdffilename: this.props.data
         });
         this.setState({
            pagetype:this.props.pagetype
         });
      }
   }
   render() {
      
      return (
         

         <View style={styles.container}>
            <WebView source={{ uri: 'http://miamidata.com/mvpapi/pdf_files/'+this.props.data }} />
            <View style={styles.containerInput}>
               <TextInput style={styles.inputBoxWarrperFirst} 
                  onChangeText={(email_address) => this.setState({email_address})}  
                  placeholder="Email Address"
                  placeholderTextColor = "#000"
                  selectionColor="#fff"
                  keyboardType="default"  
               /> 
            </View>
            <SpinnerButton
                  buttonStyle={styles.container1}
                  isLoading={this.state.isShowingLoader}
                  indicatorCount={10}
                  onPress={this.callSignup}
               >
               <Text style={styles.buttonText}>Resend Email</Text>
            </SpinnerButton>
         </View>
            
      )
   }
}
const styles = StyleSheet.create({
   container: { flex: 1, padding: 16, paddingTop: 4, backgroundColor: '#fff' },
   container1 : {
      backgroundColor:'#000',
      alignItems:'center',
      justifyContent :'center',
      padding:5,
      fontSize:12,
      borderRadius: 25,
      marginVertical: 5,
      paddingVertical: 5,
   },
   button: {
      width:300,
      backgroundColor:'#000',
       borderRadius: 25,
        marginVertical: 30,
        paddingVertical: 13,
        alignItems:'center',
        justifyContent :'center'  
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#fff',
      textAlign:'center'
    },
      containerInput:{
         flexDirection: 'row'
      },
      inputBoxWarrperFirst:{
         flex:5,
         height:50,
         backgroundColor:'rgb(235, 236, 240)',
         borderRadius: 5,
         paddingHorizontal:6,
         fontSize:18,
         color:'#000000',
         marginVertical: 10,
         marginRight:5
      },
 });