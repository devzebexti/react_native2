import React, { Component } from 'react';
import Buildpermit from '../pages/Buildpermit.js';
import LetterofTransmittal from '../pages/LetterofTransmittal.js';
import Datachangehollywood from '../pages/Datachangehollywood.js';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Permitforms extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {permitapplication:'1',permitforms:[
         {label: 'Building Permit Application', value: '1'},
         {label: 'Data Change Out Form', value: '2'},
         {label: 'Letter of Transmittal', value: '3'}
      ],locationsvar:''};
   }
   callSignup = async () => {
      console.log(this.state.permitapplication+"::permitapplication")
      if(this.state.permitapplication){
         try{
            if(this.state.permitapplication == "1")
            {
               Actions.buildpermit()
            }
            else if(this.state.permitapplication == "2")
            {
               Actions.datachangehollywood()
            }
            else if(this.state.permitapplication == "3")
            {
               Actions.letterofTransmittal()
            }
            
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
   componentDidMount(){
      AsyncStorage.getItem('locationname').then((value) => {
         if (value) {
           this.setState({
               locationsvar: value
            });
         }
      })
      .then(res => {
         console.log(this.state.locationsvar);
         if(this.state.locationsvar == 'Ft. Lauderdale')
         {
            this.setState({
               permitforms: [
                  {label: 'Building Permit Application', value: '1'},
                  {label: 'Data Change Out Form', value: '2'}
               ]
            });
         }
         else
         {
            this.setState({
               permitforms: [
                  {label: 'Building Permit Application', value: '1'},
                  {label: 'Data Change Out Form', value: '2'},
                  {label: 'Letter of Transmittal', value: '3'}
               ]
            });
         }
      });
   }
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Permit Forms</Text>
               <DropDownPicker
                     items={this.state.permitforms}
                     defaultValue={this.state.permitapplication}
                     containerStyle={{height: 50,width:350}}
                     style={{backgroundColor: 'rgb(235, 236, 240)',borderTopLeftRadius: 10, borderTopRightRadius: 10,
                     borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderColor:'rgb(235, 236, 240)',zIndex: 10,}}
                     itemStyle={{
                        justifyContent: 'flex-start'
                     }}
                     dropDownStyle={{backgroundColor: 'rgb(235, 236, 240)'}}
                     onChangeItem={item => this.setState({
                        permitapplication: item.value
                     })}
                     selectedLabelStyle={{
                        color: '#000'
                     }}
                  />
            </View>
               <TouchableOpacity onPress={this.callSignup} style={styles.button}>
                  <Text style={styles.buttonText}>Submit</Text>
               </TouchableOpacity>
         </View>	
         
      )
   }
}
const styles = StyleSheet.create({
   container : {
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      justifyContent :'center'
   },
   inputBox: {
     width:300,
     height:45,
     backgroundColor:'rgb(235, 236, 240)',
     borderRadius: 15,
     paddingHorizontal:12,
     fontSize:16,
     color:'#ffffff',
     marginVertical: 10
   },
   PickerBox:{
     width:300,
     height:45,
     backgroundColor:'rgba(235, 236, 240,0.2)',
     fontSize:16,
     color:'#ffffff',
   },
   button: {
     width:300,
     backgroundColor:'#000000',
      borderRadius: 25,
       marginVertical: 10,
       paddingVertical: 13,
       marginTop: 90,  
       zIndex: 3,
   },
   buttonText: {
     fontSize:16,
     fontWeight:'500',
     color:'#FFFFFF',
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
   clscheckboxrow:{
      flexDirection: "row"
   }
   
 });