import React, { Component } from 'react';
import Locations from '../pages/Locations.js';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert,ScrollView,KeyboardAvoidingView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Home extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {firsttimedata:true,isShowingLoader: false, name: '', companyname: '', contractor:'Air Conditioning', city:'', statename:'', zipcode:'',storeuserid:''};
    }
    
    
callSignup = async () => {
   
   console.log(this.state.name)
         console.log(this.state.companyname)
         console.log(this.state.contractor+"::contractorname")
         console.log(this.state.city)
         console.log(this.state.statename)
         console.log(this.state.zipcode)
         console.log(this.state.storeuserid+":::STOREID")
   if(this.state.name && this.state.companyname && this.state.contractor && this.state.city && this.state.statename && this.state.zipcode) {
      this.setState({isShowingLoader: true});
      try{
         AsyncStorage.setItem('jobname', this.state.name);
         Actions.locations()
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
callDashboard = async () => {
   
   console.log("calling dashboard function");
   Actions.admindashboard();
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
      })
      .then(res => {
         console.log("COME TO STORE DATA");
         console.log(this.state.storeuserid+":::DATA NOT FOUND");

         const url = "https://miamidata.com/mvpapi/webservices.php?method=getProfile&userid="+this.state.storeuserid;
         console.log(url);
         fetch(url,{
            method:'GET'
         })
         .then(response =>response.json())
         .then(data =>{
            this.setState({name:data.data.fullname});
            this.setState({companyname:data.data.companyname});
            this.setState({city:data.data.city});
            this.setState({statename:data.data.state});
            this.setState({zipcode:data.data.zipcode});
            this.setState({contractor:data.data.contractor});
            this.setState({firsttimedata:false})
         });
      });
   }
}
   render() {
      return (
         <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
         <ScrollView>
         <View style={styles.container}>
         <View style={styles.fieldSet}>
            <Text style={styles.legend}>Job Name</Text>
            <View>
               <TextInput style={styles.inputBox}
                  onChangeText={(name) => this.setState({name})} 
                  placeholder = "Name"
                  placeholderTextColor = "#000"
                  selectionColor="#000"
               />
            </View>
            <View>
               <TextInput style={styles.inputBox}
                  onChangeText={(companyname) => this.setState({companyname})} 
                  placeholder = "Company Name"
                  placeholderTextColor = "#000"
                  selectionColor="#000"
               />
            </View>
            {/*<DropDownPicker
                  items={[
                     {label: 'Air Conditioning', value: 'Air Conditioning'},
                     {label: 'Test 1', value: 'Test 1'}
                  ]}
                  defaultValue={this.state.contractor}
                  containerStyle={{height: 50,width:350}}
                  style={{backgroundColor: 'rgb(235, 236, 240)',borderTopLeftRadius: 10, borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderColor:'rgb(235, 236, 240)'}}
                  itemStyle={{
                     justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{backgroundColor: 'rgb(235, 236, 240)'}}
                  onChangeItem={item => this.setState({
                     contractor: item.value
                  })}
                  selectedLabelStyle={{
                     color: '#000'
                  }}
               />*/}
            <View>
               <TextInput style={styles.inputBox} 
                  onChangeText={(city) => this.setState({city})} 
                  placeholder = "City"
                  placeholderTextColor = "#000"
                  selectionColor="#000"
               />
            </View>
            <View>
               <TextInput style={styles.inputBox} 
                  onChangeText={(statename) => this.setState({statename})} 
                  placeholder = "State"
                  placeholderTextColor = "#000"
                  selectionColor="#000"
               />
            </View>
            <View>
               <TextInput style={styles.inputBox} 
                  onChangeText={(zipcode) => this.setState({zipcode})} 
                  placeholder = "Zipcode"
                  placeholderTextColor = "#000"
                  selectionColor="#000"
                  maxLength={5}
               />
            </View>
         </View>   
               <TouchableOpacity onPress={this.callSignup} style={styles.button}>
                  <Text style={styles.buttonText}>Submit</Text>
               </TouchableOpacity>
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
      justifyContent :'center',
      marginTop:30
   },
   inputBox: {
      width:350,
      height:50,
      backgroundColor:'rgb(235, 236, 240)',
      borderRadius: 5,
      paddingHorizontal:12,
      fontSize:16,
      color:'#000000',
      marginVertical: 10
   },
   PickerBox:{
     width:350,
     height:50,
     backgroundColor:'rgba(235, 236, 240,0.2)',
     fontSize:16,
     color:'#000',
   },
   button: {
      width:300,
      backgroundColor:'#000',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        marginTop: 20,  
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#fff',
      textAlign:'center'
    },
    btndahsbuttonText:{
      fontSize:18,
      fontWeight:'500'
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
   clscheckboxrow:{
      flexDirection: "row"
   }
   
 });