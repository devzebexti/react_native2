import React, { Component } from 'react';
import Permitforms from '../pages/Permitforms.js';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';
import Logo from '../components/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Locations extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {locationsvar:'Ft. Lauderdale'};
   }
callSignup = async () => {
   console.log(this.state.locationsvar+"::locationsvar")
   if(this.state.locationsvar){
      try{
         AsyncStorage.setItem('locationname', this.state.locationsvar);
         Actions.permitforms()
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

   render() {
      return (
         <View style={styles.container}>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Locations</Text>
               
               <DropDownPicker
                     items={[
                        {label: 'Ft. Lauderdale', value: 'Ft. Lauderdale'},
                        {label: 'Hollywood', value: 'Hollywood'}
                     ]}
                     defaultValue={this.state.locationsvar}
                     containerStyle={{height: 50,width:350}}
                     style={{backgroundColor: 'rgb(235, 236, 240)',borderTopLeftRadius: 10, borderTopRightRadius: 10,
                     borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderColor:'rgb(235, 236, 240)'}}
                     itemStyle={{
                        justifyContent: 'flex-start'
                     }}
                     dropDownStyle={{backgroundColor: 'rgb(235, 236, 240)'}}
                     onChangeItem={item => this.setState({
                        locationsvar: item.value
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
      backgroundColor:'#FFF',
      alignItems:'center',
      justifyContent :'center',
      marginTop:30
   },
   inputBox: {
     width:300,
     height:45,
     backgroundColor:'rgba(235, 236, 240,0.2)',
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
     backgroundColor:'#000',
      borderRadius: 25,
       marginVertical: 10,
       paddingVertical: 13,
       marginTop: 60,  
   },
   buttonText: {
     fontSize:16,
     fontWeight:'500',
     color:'#fff',
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