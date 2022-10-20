import React, { Component,useState } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert,Switch,ScrollView,ActivityIndicator,KeyboardAvoidingView,Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from 'moment';
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
export default class LetterofTransmittal extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {storeuserid:'',permitapplication:'',special_instructions:'',date:getCurrentDate(),letterdate:'',email_address:'',project_reference:'',Planning:'',Zoning:'',Engineering:'',Fire:'',WaterSewer:'',Drainage:'',Landscape:'',CRA:'',Structural:'',Electrical:'',Plumbing:'',Mechanical:'',ReserveCapacityChanges:'',letterfrom:'',address:'',emailaddress:'',contact:'',phone:'',fax:'',HandDelivery:'',PostalDelivery:'',DropDelivery:'',SpecialDelivery:'',EmailDelivery:'',Initial:'',Corrected:'',Revised:'',shopdrawings:'',structuralsteel:'',woodtrusses:'',glassglazing:'',productapprovals:'',fireprotection:'',Other:'',spotsurvey:'',finalsurvey:'',energy:'',specialinspectorletter:'',soilreports:'',inspectionreports:'',energycalcs:'',siteplans:'',othertwo:'',pilelogs:'',condoapproval:'',turtleglass:'',windloads:'',subpermit:'',outsideagencies:'',ArchitecturalSheet:'',FireSheet:'',StructuralSheet:'',ZoningSheet:'',ElectricalSheet:'',EngineeringSheet:'',MechanicalSheet:'',RCCSheet:'',PlumbingSheet:'',DrainageSheet:'',WaterSheet:'',SewerSheet:'',CRASheet:'',LandscapeSheet:'',special_instructions:'',buttonDisabled:false,isLoading: false,isShowingLoader:false,firsttimedata:true,locationname:'',ArchitecturalSheetText:'',FireSheetText:'',sDateTimePickerVisible: false};
   }
   showDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: true });
   };

   hideDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: false });

   };
   handleDatePicked = date => {
      console.log("A date has been picked: ", date);
      this.setState({ letterdate: Moment(date).format('MM/DD/YYYY')});
      this.hideDateTimePicker();
   };
   callSignup = async () => {
      this.setState({isShowingLoader: true});
      this.setState({ isLoading: true });
      try{
         
         
         console.log(this.state.storeuserid);
         const formData = new FormData();
         formData.append('method', 'letteroftrasmittal');
         formData.append('locationname', this.state.locationname);
         formData.append('user_id', this.state.storeuserid);
         formData.append('letter_date', this.state.letterdate);
         formData.append('email_address', this.state.email_address);
         formData.append('project_reference', this.state.project_reference);
         formData.append('Planning', this.state.Planning);
         formData.append('Zoning', this.state.Zoning);
         formData.append('Engineering', this.state.Engineering);
         formData.append('Fire', this.state.Fire);
         formData.append('Water_Sewer', this.state.WaterSewer);
         formData.append('Drainage', this.state.Drainage);
         formData.append('Landscape', this.state.Landscape);
         formData.append('CRA', this.state.CRA);
         formData.append('Structural', this.state.Structural);
         formData.append('Electrical', this.state.Electrical);
         formData.append('Plumbing', this.state.Plumbing);
         formData.append('Mechanical', this.state.Mechanical);
         formData.append('ReserveCapacityChanges', this.state.ReserveCapacityChanges);
         formData.append('letterfrom', this.state.letterfrom);
         formData.append('address', this.state.address);

         formData.append('emailaddress', this.state.emailaddress);
         formData.append('contact', this.state.contact);
         formData.append('phone', this.state.phone);

         formData.append('fax', this.state.fax);
         formData.append('HandDelivery', this.state.HandDelivery);
         formData.append('PostalDelivery', this.state.PostalDelivery);

         formData.append('DropDelivery', this.state.DropDelivery);

         formData.append('SpecialDelivery', this.state.SpecialDelivery);
         formData.append('EmailDelivery', this.state.EmailDelivery);

         formData.append('Initial', this.state.Initial);
         formData.append('Corrected', this.state.Corrected);
         formData.append('Revised', this.state.Revised);

         formData.append('shopdrawings', this.state.shopdrawings);
         formData.append('structuralsteel', this.state.structuralsteel);

         formData.append('woodtrusses', this.state.woodtrusses);
         formData.append('glassglazing', this.state.glassglazing);
         formData.append('productapprovals', this.state.productapprovals);

         formData.append('fireprotection', this.state.fireprotection);
         formData.append('Other', this.state.Other);

         formData.append('spotsurvey', this.state.spotsurvey);
         formData.append('finalsurvey', this.state.finalsurvey);
         formData.append('energy', this.state.energy);

         formData.append('specialinspectorletter', this.state.specialinspectorletter);
         formData.append('soilreports', this.state.soilreports);
         formData.append('inspectionreports', this.state.inspectionreports);
         formData.append('energycalcs', this.state.energycalcs);
         formData.append('siteplans', this.state.siteplans);
         formData.append('othertwo', this.state.othertwo);
         formData.append('pilelogs', this.state.pilelogs);
         formData.append('condoapproval', this.state.condoapproval);

         formData.append('turtleglass', this.state.turtleglass);
         formData.append('windloads', this.state.windloads);
         formData.append('subpermit', this.state.subpermit);
         formData.append('outsideagencies', this.state.outsideagencies);
         formData.append('planssubmitted', this.state.planssubmitted);
         formData.append('architecturalsheet', this.state.ArchitecturalSheet);
         formData.append('firesheet', this.state.FireSheet);
         formData.append('structuralsheet', this.state.StructuralSheet);
         formData.append('zoningsheet', this.state.ZoningSheet);
         formData.append('ElectricalSheet', this.state.ElectricalSheet);
         formData.append('EngineeringSheet', this.state.EngineeringSheet);
         formData.append('MechanicalSheet', this.state.MechanicalSheet);
         formData.append('RCCSheet', this.state.RCCSheet);
         formData.append('PlumbingSheet', this.state.PlumbingSheet);
         formData.append('DrainageSheet', this.state.DrainageSheet);
         formData.append('WaterSheet', this.state.WaterSheet);
         formData.append('SewerSheet', this.state.SewerSheet);
         formData.append('CRASheet', this.state.CRASheet);
         formData.append('LandscapeSheet', this.state.LandscapeSheet);
         formData.append('SpecialInstructions', this.state.special_instructions);

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
                  this.setState({ isLoading: false })
                  Alert.alert(
                     'Message',
                     response.data.message,
                     [
                        {text: 'OK', onPress: () => Actions.admindashboard()},
                     ],
                     {cancelable: false},
                  )
                  this.setState({isShowingLoader: false});   
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
   togglePlanning = (value) => {
      this.setState({Planning: value})
   }
   toggleZoning = (value)=>{
      this.setState({Zoning: value})
   }
   toggleEngineering = (value)=>{
      this.setState({Engineering: value})
   }
   toggleFire = (value)=>{
      this.setState({Fire: value})
   }
   toggleWaterSewer = (value)=>{
      this.setState({WaterSewer: value})
   }
   toggleDrainage = (value)=>{
      this.setState({Drainage: value})
   }
   toggleLandscape = (value)=>{
      this.setState({Landscape: value})
   }
   toggleCRA = (value)=>{
      this.setState({CRA: value})
   }
   toggleStructural = (value)=>{
      this.setState({Structural: value})
   }
   toggleElectrical = (value)=>{
      this.setState({Electrical: value})
   }
   togglePlumbing = (value)=>{
      this.setState({Plumbing: value})
   }
   toggleMechanical = (value)=>{
      this.setState({Mechanical: value})
   }
   toggleReserveCapacityChanges = (value)=>{
      this.setState({ReserveCapacityChanges: value})
   }
   toggleHandDelivery = (value)=>{
      this.setState({HandDelivery: value})
   }
   togglePostalDelivery = (value)=>{
      this.setState({PostalDelivery: value})
   }
   toggleDropDelivery = (value)=>{
      this.setState({DropDelivery: value})
   }
   toggleSpecialDelivery = (value)=>{
      this.setState({SpecialDelivery: value})
   }
   toggleEmailDelivery = (value)=>{
      this.setState({EmailDelivery: value})
   }
   toggleInitial = (value)=>{
      this.setState({Initial: value})
   }
   toggleCorrected = (value)=>{
      this.setState({Corrected: value})
   }
   toggleRevised = (value)=>{
      this.setState({Revised: value})
   }
   toggleshopdrawings = (value)=>{
      this.setState({shopdrawings: value})
   }
   togglestructuralsteel = (value)=>{
      this.setState({structuralsteel: value})
   }
   togglewoodtrusses = (value)=>{
      this.setState({woodtrusses: value})
   }
   toggleglassglazing = (value)=>{
      this.setState({glassglazing: value})
   }
   toggleproductapprovals = (value)=>{
      this.setState({productapprovals: value})
   }
   togglefireprotection = (value)=>{
      this.setState({fireprotection: value})
   }
   toggleOther = (value)=>{
      this.setState({Other: value})
   }
   togglespotsurvey = (value)=>{
      this.setState({spotsurvey: value})
   }
   togglefinalsurvey = (value)=>{
      this.setState({finalsurvey: value})
   }
   toggleenergy = (value)=>{
      this.setState({energy: value})
   }
   togglespecialinspectorletter = (value)=>{
      this.setState({specialinspectorletter: value})
   }
   togglesoilreports = (value)=>{
      this.setState({soilreports: value})
   }
   toggleinspectionreports = (value)=>{
      this.setState({inspectionreports: value})
   }
   toggleenergycalcs = (value)=>{
      this.setState({energycalcs: value})
   }
   togglesiteplans = (value)=>{
      this.setState({siteplans: value})
   }
   toggleothertwo = (value)=>{
      this.setState({othertwo: value})
   }
   togglepilelogs = (value)=>{
      this.setState({pilelogs: value})
   }
   togglecondoapproval = (value)=>{
      this.setState({condoapproval: value})
   }
   toggleturtleglass = (value)=>{
      this.setState({turtleglass: value})
   }
   togglewindloads = (value)=>{
      this.setState({windloads: value})
   }
   togglesubpermit = (value)=>{
      this.setState({subpermit: value})
   }
   toggleoutsideagencies = (value)=>{
      this.setState({outsideagencies: value})
   }
   toggleArchitecturalSheet = (value)=>{
      this.setState({ArchitecturalSheet: value})
   }
   toggleFireSheet = (value)=>{
      this.setState({FireSheet: value})
   }
   toggleStructuralSheet = (value)=>{
      this.setState({StructuralSheet: value})
   }
   toggleZoningSheet = (value)=>{
      this.setState({ZoningSheet: value})
   }
   toggleElectricalSheet = (value)=>{
      this.setState({ElectricalSheet: value})
   }
   toggleEngineeringSheet = (value)=>{
      this.setState({EngineeringSheet: value})
   }
   toggleMechanicalSheet = (value)=>{
      this.setState({MechanicalSheet: value})
   }
   toggleRCCSheet = (value)=>{
      this.setState({RCCSheet: value})
   }
   togglePlumbingSheet = (value)=>{
      this.setState({PlumbingSheet: value})
   }
   toggleDrainageSheet = (value)=>{
      this.setState({DrainageSheet: value})
   }
   toggleWaterSheet = (value)=>{
      this.setState({WaterSheet: value})
   }
   toggleSewerSheet = (value)=>{
      this.setState({SewerSheet: value})
   }
   toggleCRASheet = (value)=>{
      this.setState({CRASheet: value})
   }
   toggleLandscapeSheet = (value)=>{
      this.setState({LandscapeSheet: value})
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
                  project_reference: jobname
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
               this.setState({letterfrom:data.data.ContractingCo});
               this.setState({contact:data.data.ContactPhone});
               this.setState({emailaddress:data.data.ContactEmail});
               this.setState({address:data.data.CompanyAddress});
               this.setState({txtCompanyCity:data.data.CompanyCity});
               this.setState({txtCompanyState:data.data.CompanyState});
               this.setState({txtCompanyZip:data.data.CompanyZip});
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
               <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
               <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                  locale="en_GB"
               />
               <View style={styles.datepickerwarraper}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(letterdate) => this.setState({letterdate})}
                        value={this.state.letterdate}  
                        placeholder="Letter Date"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                        onChangeText={(email_address) => this.setState({email_address})}  
                        placeholder="Email Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     /> 
                  <TextInput style={styles.inputBoxWarrperSecond} 
                           onChangeText={(project_reference) => this.setState({project_reference})}  
                           placeholder="Project/Reference"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />       
               </View>
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>For Review By: (check all applicable spaces)</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Planning</Text>
                     <Switch 
                           onValueChange={this.togglePlanning}
                           value={this.state.Planning}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Zoning</Text>
                     <Switch 
                           onValueChange={this.toggleZoning}
                           value={this.state.Zoning}
                        />
                  </View>
                  
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Engineering</Text>
                     <Switch 
                           onValueChange={this.toggleEngineering}
                           value={this.state.Engineering}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Fire</Text>
                     <Switch 
                           onValueChange={this.toggleFire}
                           value={this.state.Fire}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Water / Sewer</Text>
                     <Switch 
                           onValueChange={this.toggleWaterSewer}
                           value={this.state.WaterSewer}
                        />
                  </View>
                  
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>CRA</Text>
                     <Switch 
                           onValueChange={this.toggleCRA}
                           value={this.state.CRA}
                        />
                  </View>
               </View>   
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowLast}>
                        <Text style={styles.clscheckboxlabel}>Drainage</Text>
                        <Switch 
                              onValueChange={this.toggleDrainage}
                              value={this.state.Drainage}
                           />
                     </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Landscape</Text>
                     <Switch 
                           onValueChange={this.toggleLandscape}
                           value={this.state.Landscape}
                        />
                  </View>   
               </View>
            </View>  
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Discipline:</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Structural</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleStructural}
                           value={this.state.Structural}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Electrical</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleElectrical}
                           value={this.state.Electrical}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Plumbing</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglePlumbing}
                           value={this.state.Plumbing}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Mechanical</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleMechanical}
                           value={this.state.Mechanical}
                        />
                  </View>
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Reserve Capacity Changes</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleReserveCapacityChanges}
                        value={this.state.ReserveCapacityChanges}
                     />
               </View>
            </View> 
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>General:</Text>  
               <View style={styles.clscheckboxrow}>
                  <TextInput style={styles.inputBox} 
                        value={this.state.letterfrom} 
                        onChangeText={(letterfrom) => this.setState({letterfrom})}  
                        placeholder="From"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <TextInput style={styles.inputBox} 
                        value={this.state.address} 
                        onChangeText={(address) => this.setState({address})}  
                        placeholder="Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst}
                           value={this.state.emailaddress} 
                           onChangeText={(emailaddress) => this.setState({emailaddress})}  
                           placeholder="Email Address"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="email-address"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        value={this.state.contact} 
                        onChangeText={(contact) => this.setState({contact})}  
                        placeholder="Contact"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.phone} 
                           onChangeText={(phone) => this.setState({phone})}  
                           placeholder="Phone"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="phone-pad"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(fax) => this.setState({fax})}  
                        placeholder="Fax"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="phone-pad"
                     />      
               </View>
            </View>      
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>WE ARE SUBMITTING TO YOU</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Hand Delivery</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleHandDelivery}
                           value={this.state.HandDelivery}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Postal Delivery</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglePostalDelivery}
                           value={this.state.PostalDelivery}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Drop Delivery</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleDropDelivery}
                           value={this.state.DropDelivery}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Special Delivery</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleSpecialDelivery}
                           value={this.state.SpecialDelivery}
                        />
                  </View>
               </View>
               
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Email Delivery</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleEmailDelivery}
                        value={this.state.EmailDelivery}
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Initial (original) set of plans</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleInitial}
                        value={this.state.Initial}
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Corrected (non-permitted) plans</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleCorrected}
                        value={this.state.Corrected}
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Revised (permitted) plans</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleRevised}
                        value={this.state.Revised}
                     />
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Shop Drawings</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleshopdrawings}
                           value={this.state.shopdrawings}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Structural Steel</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglestructuralsteel}
                           value={this.state.structuralsteel}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Wood Trusses</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglewoodtrusses}
                           value={this.state.woodtrusses}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Glass/Glazing</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleglassglazing}
                           value={this.state.glassglazing}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Product Approvals</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleproductapprovals}
                           value={this.state.productapprovals}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Fire Protection</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglefireprotection}
                           value={this.state.fireprotection}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Other</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleOther}
                           value={this.state.Other}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Spot Survey</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglespotsurvey}
                           value={this.state.spotsurvey}
                        />
                  </View>
               </View>
               
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Final Survey</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.togglefinalsurvey}
                        value={this.state.finalsurvey}
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Energy (insulation) certification</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleenergy}
                        value={this.state.energy}
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Special inspector letter / form</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.togglespecialinspectorletter}
                        value={this.state.specialinspectorletter}
                     />
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Soil Reports</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglesoilreports}
                           value={this.state.soilreports}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Inspection Reports</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleinspectionreports}
                           value={this.state.inspectionreports}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Energy calcs</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleenergycalcs}
                           value={this.state.energycalcs}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Site plans</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglesiteplans}
                           value={this.state.siteplans}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Energy calcs</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleenergycalcs}
                           value={this.state.energycalcs}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Site plans</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglesiteplans}
                           value={this.state.siteplans}
                        />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Other</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleothertwo}
                           value={this.state.othertwo}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Pile Logs</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglepilelogs}
                           value={this.state.pilelogs}
                        />
                  </View>
               </View>
               
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Condo/ H.O. approval</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.togglecondoapproval}
                        value={this.state.condoapproval}
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Turtle glass I.D.</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleturtleglass}
                        value={this.state.turtleglass}
                     />
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Wind Loads</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglewindloads}
                           value={this.state.windloads}
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Sub-Permit</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglesubpermit}
                           value={this.state.subpermit}
                        />
                  </View>
               </View>
               
               
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Outside Agencies</Text>
                  <Switch style={styles.clscheckboxval}
                        onValueChange={this.toggleoutsideagencies}
                        value={this.state.outsideagencies}
                     />
               </View>
            </View>   
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>PLANS SUBMITTED</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Architectural Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleArchitecturalSheet}
                           value={this.state.ArchitecturalSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.ArchitecturalSheetText} 
                           onChangeText={(ArchitecturalSheetText) => this.setState({ArchitecturalSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Fire Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleFireSheet}
                           value={this.state.FireSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.FireSheetText} 
                           onChangeText={(FireSheetText) => this.setState({FireSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Structural Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleStructuralSheet}
                           value={this.state.StructuralSheet}
                        />
                        <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.StructuralSheetText} 
                           onChangeText={(StructuralSheetText) => this.setState({StructuralSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Zoning Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleZoningSheet}
                           value={this.state.ZoningSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.ZoningSheetText} 
                           onChangeText={(ZoningSheetText) => this.setState({ZoningSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Electrical Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleElectricalSheet}
                           value={this.state.ElectricalSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.ElectricalSheetText} 
                           onChangeText={(ElectricalSheetText) => this.setState({ElectricalSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Engineering Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleEngineeringSheet}
                           value={this.state.EngineeringSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.ElectricalSheetText} 
                           onChangeText={(ElectricalSheetText) => this.setState({ElectricalSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />      
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Mechanical Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleMechanicalSheet}
                           value={this.state.MechanicalSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.MechanicalSheetText} 
                           onChangeText={(MechanicalSheetText) => this.setState({MechanicalSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>RCC Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleRCCSheet}
                           value={this.state.RCCSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.RCCSheetText} 
                           onChangeText={(RCCSheetText) => this.setState({RCCSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Plumbing Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.togglePlumbingSheet}
                           value={this.state.PlumbingSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.PlumbingSheetText} 
                           onChangeText={(PlumbingSheetText) => this.setState({PlumbingSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Drainage Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleDrainageSheet}
                           value={this.state.DrainageSheet}
                        />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.DrainageSheetText} 
                           onChangeText={(DrainageSheetText) => this.setState({DrainageSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        /> 
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Water Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleWaterSheet}
                           value={this.state.WaterSheet}
                        />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.WaterSheetText} 
                           onChangeText={(WaterSheetText) => this.setState({WaterSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Sewer Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleSewerSheet}
                           value={this.state.SewerSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.SewerSheetText} 
                           onChangeText={(SewerSheetText) => this.setState({SewerSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>CRA Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleCRASheetl}
                           value={this.state.CRASheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.CRASheetText} 
                           onChangeText={(CRASheetText) => this.setState({CRASheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Landscape Sheet</Text>
                     <Switch style={styles.clscheckboxval}
                           onValueChange={this.toggleLandscapeSheet}
                           value={this.state.LandscapeSheet}
                        />
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           value={this.state.LandscapeSheetText} 
                           onChangeText={(LandscapeSheetText) => this.setState({LandscapeSheetText})}  
                           placeholder=""
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                        />   
                  </View>
               </View>
               
               
               <View style={styles.clscheckboxrow}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(special_instructions) => this.setState({special_instructions})}  
                        placeholder="Special Instructions"
                        placeholderTextColor = "#000"
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
      backgroundColor:'#FFF',
      alignItems:'center',
      justifyContent :'center',
      padding:20,
      fontSize:12,
   },
   inputBox: {
      width:350,
      height:35,
      backgroundColor:'rgb(235, 236, 240)',
      borderRadius: 5,
      paddingHorizontal:12,
      fontSize:17,
      color:'#000000',
      marginVertical: 10
   },
   PickerBox:{
     width:300,
     height:45,
     backgroundColor:'rgb(235, 236, 240)',
     fontSize:16,
     color:'#000',
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
     color:'#fff',
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
      color:'#000',
      padding:"2%"
   },
   datepickerwarraper:{
      marginTop:"1%",
      marginBottom:"1%",
      color:'#000',
   },
   datepickerinput:{
      width:300,
      color:'#000',
   },
   horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
   },
   fieldSet:{
      marginTop: 20,
      paddingHorizontal: 10,
      paddingTop: 15,
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