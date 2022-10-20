import React, { Component,useState } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert,Switch,ScrollView,KeyboardAvoidingView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpinnerButton from 'react-native-spinner-button';
const axios = require('axios').default;
const getCurrentDate=()=>{

   var date = new Date().getDate();
   var month = new Date().getMonth() + 1;
   var year = new Date().getFullYear();

   //Alert.alert(date + '-' + month + '-' + year);
   // You can turn it in to your desired format
   console.log(year+ '-' +  month + '-' +date);
   return year+ '-' +  month + '-' +date;//format: dd-mm-yyyy;
}
export default class Datachangehollywood extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {storeuserid:'',permitapplication:'',job_name:'',txtaddress:'',txtunit:'',txtcity:'',txtzipcode:'',txtManufacturerExistingUnit:'',txtManufacturerNewUnit:'',txtSeerEerExisting:'',txtSeerEerNew:'',txtPackageHeatPumpModeExisting:'',txtPackageHeatPumpModeNew:'',txtCondensingUnitModelExisting:'',txtCondensingUnitModelNew:'',txtAHUModelExisting:'',txtAHUModelNew:'',txtModelExisting:'',txtModelNew:'',txtKWStripHeatExisting:'',txtKWStripHeatNew:'',MinimumCircuitAmpExisting_CU:'',MinimumCircuitAmpExisting_AHUPKG:'',MinimumCircuitAmpNew_CU:'',MinimumCircuitAmpNew_AHUPKG:'',MaxOvercurrentProExisting_CU:'',MaxOvercurrentProExisting_AHUPKG:'',MaxOvercurrentProNew_CU:'',MaxOvercurrentProNew_AHUPKG:'',SizeofDisconnectNew_CU:'',SizeofDisconnectNew_AHUPKG:'',SizeofDisconnectExisting_CU:'',SizeofDisconnectExisting_AHUPKG:'',Willanewstand:'',Willaductsmoke:'',Istheduct:'',WilltheAClocation:'',txtCompanyName:'',txtflstate:'',isShowingLoader:false,firsttimedata:true,locationname:''};
   }
   toggleMinimumCircuitAmpExisting_CU = (value) => {
      this.setState({MinimumCircuitAmpExisting_CU: value})
   }
   toggleMinimumCircuitAmpExisting_AHUPKG = (value) => {
      this.setState({MinimumCircuitAmpExisting_AHUPKG: value})
   }
   toggleMinimumCircuitAmpNew_CU = (value) => {
      this.setState({MinimumCircuitAmpNew_CU: value})
   }
   toggleMinimumCircuitAmpNew_AHUPKG = (value) => {
      this.setState({MinimumCircuitAmpNew_AHUPKG: value})
   }
   toggleMaxOvercurrentProExisting_CU = (value) => {
      this.setState({MaxOvercurrentProExisting_CU: value})
   }
   toggleMaxOvercurrentProExisting_AHUPKG = (value) => {
      this.setState({MaxOvercurrentProExisting_AHUPKG: value})
   }
   toggleMaxOvercurrentProNew_CU = (value) => {
      this.setState({MaxOvercurrentProNew_CU: value})
   }
   toggleMaxOvercurrentProNew_AHUPKG = (value) => {
      this.setState({MaxOvercurrentProNew_AHUPKG: value})
   }
   toggleSizeofDisconnectNew_CU = (value) => {
      this.setState({SizeofDisconnectNew_CU: value})
   }
   toggleSizeofDisconnectNew_AHUPKG = (value) => {
      this.setState({SizeofDisconnectNew_AHUPKG: value})
   }
   toggleSizeofDisconnectExisting_CU = (value) => {
      this.setState({SizeofDisconnectExisting_CU: value})
   }
   toggleSizeofDisconnectExisting_AHUPKG = (value) => {
      this.setState({SizeofDisconnectExisting_AHUPKG: value})
   }
   toggleWillanewstand = (value) => {
      this.setState({Willanewstand: value})
   }
   toggleWillaductsmoke = (value) => {
      this.setState({Willaductsmoke: value})
   }
   toggleIstheduct = (value) => {
      this.setState({Istheduct: value})
   }
   toggleWilltheAClocation = (value) => {
      this.setState({WilltheAClocation: value})
   }

   callSignup = async () => {
      this.setState({isShowingLoader: true});
      console.log(this.state.locationname);
      try{
         if(this.state.job_name != "")
         {
            console.log(this.state.locationname);
            console.log(this.state.job_name);
            console.log(this.state.MinimumCircuitAmpExisting_CU);
            console.log(this.state.MinimumCircuitAmpExisting_AHUPKG);
            const formData = new FormData();
            formData.append('method', 'insertDatachange');
            formData.append('user_id', this.state.storeuserid);
            formData.append('locationname', this.state.locationname);
            formData.append('job_name', this.state.job_name);
            formData.append('txtaddress', this.state.txtaddress);
            formData.append('txtunit', this.state.txtunit);
            formData.append('txtcity', this.state.txtcity);
            formData.append('txtzipcode', this.state.txtzipcode);
            formData.append('txtManufacturerExistingUnit', this.state.txtManufacturerExistingUnit);
            formData.append('txtManufacturerNewUnit', this.state.txtManufacturerNewUnit);
            formData.append('txtSeerEerExisting', this.state.txtSeerEerExisting);
            formData.append('txtSeerEerNew', this.state.txtSeerEerNew);
            formData.append('txtPackageHeatPumpModeExisting', this.state.txtPackageHeatPumpModeExisting);
            formData.append('txtPackageHeatPumpModeNew', this.state.txtPackageHeatPumpModeNew);
            formData.append('txtCondensingUnitModelExisting', this.state.txtCondensingUnitModelExisting);
            formData.append('txtCondensingUnitModelNew', this.state.txtCondensingUnitModelNew);
            formData.append('txtAHUModelExisting', this.state.txtAHUModelExisting);
            formData.append('txtAHUModelNew', this.state.txtAHUModelNew);
            formData.append('txtModelExisting', this.state.txtModelExisting);
   
            formData.append('txtModelNew', this.state.txtModelNew);
            formData.append('txtKWStripHeatExisting', this.state.txtKWStripHeatExisting);
            formData.append('txtKWStripHeatNew', this.state.txtKWStripHeatNew);
            formData.append('MinimumCircuitAmpExisting_CU', this.state.MinimumCircuitAmpExisting_CU);
            formData.append('MinimumCircuitAmpExisting_AHUPKG', this.state.MinimumCircuitAmpExisting_AHUPKG);
            formData.append('MinimumCircuitAmpNew_CU', this.state.MinimumCircuitAmpNew_CU);
   
            formData.append('MinimumCircuitAmpNew_AHUPKG', this.state.MinimumCircuitAmpNew_AHUPKG);
            formData.append('MaxOvercurrentProExisting_CU', this.state.MaxOvercurrentProExisting_CU);
            formData.append('MaxOvercurrentProExisting_AHUPKG', this.state.MaxOvercurrentProExisting_AHUPKG);
            formData.append('MaxOvercurrentProNew_CU', this.state.MaxOvercurrentProNew_CU);
            formData.append('MaxOvercurrentProNew_AHUPKG', this.state.MaxOvercurrentProNew_AHUPKG);
            formData.append('SizeofDisconnectNew_CU', this.state.SizeofDisconnectNew_CU);
            formData.append('SizeofDisconnectNew_AHUPKG', this.state.SizeofDisconnectNew_AHUPKG);
   
            formData.append('SizeofDisconnectExisting_CU', this.state.SizeofDisconnectExisting_CU);
            formData.append('SizeofDisconnectExisting_AHUPKG', this.state.SizeofDisconnectExisting_AHUPKG);
            formData.append('Willanewstand', this.state.Willanewstand);
            formData.append('Willaductsmoke', this.state.Willaductsmoke);
            formData.append('Istheduct', this.state.Istheduct);
   
            formData.append('WilltheAClocation', this.state.WilltheAClocation);
            formData.append('txtCompanyName', this.state.txtCompanyName);
            formData.append('txtflstate', this.state.txtflstate);
   
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
                     console.log("response :", response);
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
                     this.setState({isShowingLoader: true});   
               })
               .catch((e) => 
               {
                  console.error(e);
                  console.log("error from image :");
               });
               
         }
         else
         {
            Alert.alert(
               'Error',
               'Please enter required fields',
               [
               {text: 'OK', onPress: () => console.log('OK Pressed')},
               ],
               {cancelable: false},
           )
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
 }
   componentDidMount(){
      if(this.state.firsttimedata)
      {
         AsyncStorage.getItem('locationname').then((locationvalue) => {
            if (locationvalue) {
              this.setState({
                  locationname: locationvalue
               });
            }
         });
         AsyncStorage.getItem('jobname').then((jobname) => {
            if (jobname) {
              this.setState({
                  job_name: jobname
               });
            }
         });

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
               //this.setState({data:data})
               //console.log(data.data);
               //console.log(data.data.ContractingCo);
               //this.setState({job_name:data.data.ContractingCo});
               this.setState({emailaddress:data.data.ContactEmail});
               this.setState({txtaddress:data.data.CompanyAddress});
               this.setState({txtcity:data.data.CompanyCity});
               this.setState({txtzipcode:data.data.CompanyZip});
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
               <Text style={styles.legend}>General</Text>
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        value={this.state.job_name} 
                        onChangeText={(job_name) => this.setState({job_name})}  
                        placeholder="Job Name"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        value={this.state.txtaddress} 
                        onChangeText={(txtaddress) => this.setState({txtaddress})}  
                        placeholder="Address"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                     <TextInput style={styles.inputBoxWarrperFirst} 
                              onChangeText={(txtunit) => this.setState({txtunit})}  
                              placeholder="Unit#"
                              placeholderTextColor = "#000000"
                              selectionColor="#000"
                              keyboardType="default"
                           />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                        value={this.state.txtcity} 
                        onChangeText={(txtcity) => this.setState({txtcity})}  
                        placeholder="City"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.txtzipcode} 
                           onChangeText={(txtzipcode) => this.setState({txtzipcode})}  
                           placeholder="Zipcode"
                           placeholderTextColor = "#000000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtManufacturerExistingUnit) => this.setState({txtManufacturerExistingUnit})}  
                           placeholder="Manufacturer Existing"
                           placeholderTextColor = "#000000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtManufacturerNewUnit) => this.setState({txtManufacturerNewUnit})}  
                        placeholder="Manufacturer New"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtSeerEerExisting) => this.setState({txtSeerEerExisting})}  
                           placeholder="SEER (2)/EER (3) Existing"
                           placeholderTextColor = "#000000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtSeerEerNew) => this.setState({txtSeerEerNew})}  
                        placeholder="SEER (2)/EER (3) New"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                        onChangeText={(txtPackageHeatPumpModeExisting) => this.setState({txtPackageHeatPumpModeExisting})}  
                        placeholder="Package/Heat Pump Model Existing #"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtPackageHeatPumpModeNew) => this.setState({txtPackageHeatPumpModeNew})}  
                        placeholder="Package/Heat Pump Model New #"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                     <TextInput style={styles.inputBoxWarrperFirst} 
                        onChangeText={(txtCondensingUnitModelExisting) => this.setState({txtCondensingUnitModelExisting})}  
                        placeholder="Condensing Unit Model Existing #"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtCondensingUnitModelNew) => this.setState({txtCondensingUnitModelNew})}  
                        placeholder="Condensing Unit Model New #"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtAHUModelExisting) => this.setState({txtAHUModelExisting})}  
                           placeholder="AHU Model Existing #"
                           placeholderTextColor = "#000000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtAHUModelNew) => this.setState({txtAHUModelNew})}  
                        placeholder="AHU Model New #"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtModelExisting) => this.setState({txtModelExisting})}  
                           placeholder="Model Existing #"
                           placeholderTextColor = "#000000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtModelNew) => this.setState({txtModelNew})}  
                        placeholder="Model New #"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtKWStripHeatExisting) => this.setState({txtKWStripHeatExisting})}  
                           placeholder="KW Strip Heat Existing"
                           placeholderTextColor = "#000000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtKWStripHeatNew) => this.setState({txtKWStripHeatNew})}  
                        placeholder="KW Strip Heat New"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
            </View>
            
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Minimum Circuit Amp Existing</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>C/U</Text>
                     <Switch 
                        onValueChange={this.toggleMinimumCircuitAmpExisting_CU}
                        value={this.state.MinimumCircuitAmpExisting_CU}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>AHU/PKG</Text>
                     <Switch 
                        onValueChange={this.toggleMinimumCircuitAmpExisting_AHUPKG}
                        value={this.state.MinimumCircuitAmpExisting_AHUPKG}
                     />
                  </View>
               </View>
               
               
            </View>
            
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Minimum Circuit Amp New</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>C/U</Text>
                     <Switch 
                        onValueChange={this.toggleMinimumCircuitAmpNew_CU}
                        value={this.state.MinimumCircuitAmpNew_CU}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>AHU/PKG</Text>
                     <Switch 
                        onValueChange={this.toggleMinimumCircuitAmpNew_AHUPKG}
                        value={this.state.MinimumCircuitAmpNew_AHUPKG}
                     />
                  </View>
               </View>
            </View>

            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Maximum Overcurrent Protection Existing</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>C/U</Text>
                     <Switch 
                        onValueChange={this.toggleMaxOvercurrentProExisting_CU}
                        value={this.state.MaxOvercurrentProExisting_CU}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>AHU/PKG</Text>
                     <Switch 
                        onValueChange={this.toggleMaxOvercurrentProExisting_AHUPKG}
                        value={this.state.MaxOvercurrentProExisting_AHUPKG}
                     />
                  </View>
               </View>
               
            </View>

            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Maximum Overcurrent Protection New</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>C/U</Text>
                     <Switch 
                        onValueChange={this.toggleMaxOvercurrentProNew_CU}
                        value={this.state.MaxOvercurrentProNew_CU}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>AHU/PKG</Text>
                     <Switch 
                        onValueChange={this.toggleMaxOvercurrentProNew_AHUPKG}
                        value={this.state.MaxOvercurrentProNew_AHUPKG}
                     />
                  </View>
               </View>
               
            </View>

            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Size of Disconnect Existing</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>C/U</Text>
                     <Switch 
                        onValueChange={this.toggleSizeofDisconnectNew_CU}
                        value={this.state.SizeofDisconnectNew_CU}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>AHU/PKG</Text>
                     <Switch 
                        onValueChange={this.toggleSizeofDisconnectNew_AHUPKG}
                        value={this.state.SizeofDisconnectNew_AHUPKG}
                     />
                  </View>
               </View>
            </View>

            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Size of Disconnect New</Text>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>C/U</Text>
                  <Switch 
                     onValueChange={this.toggleSizeofDisconnectExisting_CU}
                     value={this.state.SizeofDisconnectExisting_CU}
                  />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>AHU/PKG</Text>
                  <Switch 
                     onValueChange={this.toggleSizeofDisconnectExisting_AHUPKG}
                     value={this.state.SizeofDisconnectExisting_AHUPKG}
                  />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Will a new stand, curb or curb adapter be installed?</Text>
                  <Switch 
                     onValueChange={this.toggleWillanewstand}
                     value={this.state.Willanewstand}
                  />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Will a duct smoke detector be installed or reconnected?</Text>
                  <Switch 
                     onValueChange={this.toggleWillaductsmoke}
                     value={this.state.Willaductsmoke}
                  />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Is the duct s/d connected to an Fire Alarm Panel?</Text>
                  <Switch 
                     onValueChange={this.toggleIstheduct}
                     value={this.state.Istheduct}
                  />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Will the A/C location will be the same?</Text>
                  <Switch 
                     onValueChange={this.toggleWilltheAClocation}
                     value={this.state.WilltheAClocation}
                  />
               </View>
               <View style={styles.clscheckboxrow}>
                  <TextInput style={styles.inputBox} 
                     onChangeText={(txtCompanyName) => this.setState({txtCompanyName})}  
                     placeholder="Company Name"
                     placeholderTextColor = "#000000"
                     selectionColor="#000"
                     keyboardType="default"
                  />
               </View>
               <View style={styles.clscheckboxrow}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtflstate) => this.setState({txtflstate})}  
                        placeholder="FL State or Co. License #"
                        placeholderTextColor = "#000000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
            </View>

           
            
            
            <SpinnerButton
                  buttonStyle={styles.button}
                  isLoading={this.state.isShowingLoader}
                  indicatorCount={10}
                  onPress={this.callSignup}
                >
                <Text style={styles.buttonText}>Submit</Text>
              </SpinnerButton>
         </View>
         </ScrollView>	
         </KeyboardAvoidingView>
      )
   }
}
const styles = StyleSheet.create({
   container : {
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      justifyContent :'center',
      padding:20
   },
   inputBox: {
      width:350,
      height:50,
      backgroundColor:'rgb(235, 236, 240)',
      borderRadius: 5,
      paddingHorizontal:12,
      fontSize:15,
      color:'#000000',
      marginVertical: 10
   },
   PickerBox:{
     width:300,
     height:45,
     backgroundColor:'rgba(235, 236, 240,0.2)',
     fontSize:16,
     color:'#000000',
   },
   button: {
     width:300,
     backgroundColor:'#000',
      borderRadius: 25,
       marginVertical: 30,
       paddingVertical: 13
   },
   buttonText: {
     fontSize:16,
     fontWeight:'500',
     color:'#FFF',
     textAlign:'center'
   },
   clstitletext:{
      width:350,
      fontSize: 16,
      fontWeight: "bold",
      color:'#00a6dd',
      backgroundColor:'#f0f9fe',
      paddingBottom:10,
      paddingTop:10,
      marginBottom:20,
      marginTop:20,
      paddingHorizontal:12,
   },
   clscheckboxlabel:{
      width:300,
      fontSize: 18,
      color:'#000000',
      padding:"2%"
   },
   datepickerwarraper:{
      marginTop:"3%",
      marginBottom:"3%",
      color:'#000000',
   },
   datepickerinput:{
      width:300,
      color:'#000000',
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
   flexDirection: "row",
   marginBottom:5
  },
  clscheckboxrowFirst:{
   flex:3,
   marginBottom:5
  },
  clscheckboxrowLast:{
   flex:3,
   marginBottom:5
  },
  containerInput:{
   flexDirection: 'row'
},
Inputwrapper:{
   flex:3,
},
inputBoxWarrperFirst:{
   flex:5,
   height:35,
   backgroundColor:'rgb(235, 236, 240)',
   borderRadius: 5,
   paddingHorizontal:6,
   fontSize:14,
   color:'#000000',
   marginVertical: 5,
   marginRight:5
},
inputBoxWarrperSecond:{
   flex:5,
   height:35,
   backgroundColor:'rgb(235, 236, 240)',
   borderRadius: 5,
   paddingHorizontal:6,
   fontSize:14,
   color:'#000000',
   marginVertical: 5,
   marginLeft:5
}

   
 });