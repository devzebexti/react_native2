import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert,Switch,isCheckedNew,ScrollView,KeyboardAvoidingView,Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import CheckBox from 'react-native-check-box'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from 'moment';
const axios = require('axios').default;
import SpinnerButton from 'react-native-spinner-button';
export default class Buildpermit extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {storeuserid:'',txtapplicationdate:'',Building:'',Electrical:'',Plumbing:'',Mechanical:'',headOther:'',permitapplication:'',txtjob_name:'',txtunit:'',txtcity:'',txtTaxFolioNo:'',txtFloodZn:'',txtBFE:'',txtFloorArea:'',txtJobValue:'',txtBuildingUse:'',txtConstructionType:'',txtOccupancyGroup:'',txtPresentUse:'',txtProposedUsed:'',txtPropertyOwner:'',txtPhone:'',txtEmail:'',txtOwnerAddress:'',txtOwnerCity:'',txtOwnerState:'',txtOwnerZip:'',txtContractingCo:'',txtContactPhone:'',txtContactEmail:'',txtCompanyAddress:'',txtCompanyCity:'',txtCompanyState:'',txtCompanyZip:'',txtQualifierName:'',txtLicenseNumber:'',txtArchitect:'',txtArchitectPhone:'',txtArchitectEmail:'',txtArchitectAddress:'',txtArchitectCity:'',txtArchitectState:'',txtArchitectZip:'',txtBondingCompany:'',txtBondingAddress:'',txtBondingCity:'',txtBondingState:'',txtBondingZip:'',txtTitleholder:'',txtTitleholderAddress:'',txtTitleholderCity:'',txtTitleholderState:'',txtTitleholderZip:'',txtTitleholderZip:'',txtMortgageLender:'',txtMortgageLenderAddress:'',txtMortgageLenderCity:'',txtMortgageLenderState:'',txtMortgageLenderZip:'',DescWorkNew:'',DescWorkAddition:'',DescWorkRepair:'',DescWorkAlteration:'',DescWorkDemolition:'',DescWorkRevision:'',DescWorkOther:'',DescWorkAttachment:'',OwnerBuilder:'',isShowingLoader:false,txtDescriptionofwork:'',txtLegalDescription:'',firsttimedata:true,locationname:'',jobname:'',isDateTimePickerVisible: false};
   }
   showDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: true });
   };

   hideDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: false });

   };

   handleDatePicked = date => {
      console.log("A date has been picked: ", date);
      this.setState({ txtapplicationdate: Moment(date).format('MM/DD/YYYY')});
      
      this.hideDateTimePicker();
   };
   toggleBuilding = (value) => {
      this.setState({Building: value})
   }
   toggleElectrical = (value) => {
      this.setState({Electrical: value})
   }
   togglePlumbing = (value) => {
      this.setState({Plumbing: value})
   }
   toggleMechanical = (value) => {
      this.setState({Mechanical: value})
   }
   toggleheadOther = (value) => {
      this.setState({headOther: value})
   }
   toggleDescWorkNew = (value) => {
      this.setState({DescWorkNew: value})
   }
   toggleDescWorkAddition = (value) => {
      this.setState({DescWorkAddition: value})
   }
   toggleDescWorkRepair = (value) => {
      this.setState({DescWorkRepair: value})
   }
   toggleDescWorkAlteration = (value) => {
      this.setState({DescWorkAlteration: value})
   }
   toggleDescWorkDemolition = (value) => {
      this.setState({DescWorkDemolition: value})
   }
   toggleDescWorkRevision = (value) => {
      this.setState({DescWorkRevision: value})
   }
   toggleDescWorkOther = (value) => {
      this.setState({DescWorkOther: value})
   }
   toggleDescWorkAttachment = (value) =>{
      this.setState({DescWorkAttachment: value})
   }
   toggleOwnerBuilder = (value)=>{
      this.setState({OwnerBuilder: value})
   }

   callSignup = async () => {
        this.setState({isShowingLoader: true});
        try{
           console.log(this.state.DescWorkNew);
           
         const formData = new FormData();
         formData.append('method', 'insertBuildpermit');
         formData.append('locationname', this.state.locationname);
         formData.append('user_id', this.state.storeuserid);
         formData.append('Building', this.state.Building);
         formData.append('Electrical', this.state.Electrical);
         formData.append('Plumbing', this.state.Plumbing);
         formData.append('Mechanical', this.state.Mechanical);
         formData.append('HeadOther', this.state.headOther);
         formData.append('application_date', this.state.txtapplicationdate);
         formData.append('jobname', this.state.jobname);
         formData.append('job_name', this.state.txtjob_name);
         formData.append('unit', this.state.txtunit);
         formData.append('city', this.state.txtcity);
         formData.append('taxfoliono', this.state.txtTaxFolioNo);
         formData.append('floodzn', this.state.txtFloodZn);
         formData.append('bfe', this.state.txtBFE);
         formData.append('floorarea', this.state.txtFloorArea);
         formData.append('jobvalue', this.state.txtJobValue);
         formData.append('buildinguse', this.state.txtBuildingUse);
         formData.append('constructiontype', this.state.txtConstructionType);
         formData.append('occupancygroup', this.state.txtOccupancyGroup);
         formData.append('presentuse', this.state.txtPresentUse);
         formData.append('proposedused', this.state.txtProposedUsed);
         
         formData.append('DescWorkNew', this.state.DescWorkNew);
         formData.append('DescWorkAddition', this.state.DescWorkAddition);
         formData.append('DescWorkRepair', this.state.DescWorkRepair);
         formData.append('DescWorkAlteration', this.state.DescWorkAlteration);
         formData.append('DescWorkDemolition', this.state.DescWorkDemolition);
         formData.append('DescWorkRevision', this.state.DescWorkRevision);
         formData.append('DescWorkOther', this.state.DescWorkOther);
         formData.append('DescWorkAttachment', this.state.DescWorkAttachment);
         
         formData.append('descriptionofwork', this.state.txtDescriptionofwork);
         formData.append('legaldescription', this.state.txtLegalDescription);
         formData.append('propertyowner', this.state.txtPropertyOwner);
         formData.append('phone', this.state.txtPhone);
         formData.append('email', this.state.txtEmail);

         formData.append('OwnerAddress', this.state.txtOwnerAddress);
         formData.append('ownercity', this.state.txtOwnerCity);
         formData.append('ownerstate', this.state.txtOwnerState);

         formData.append('ownerzip', this.state.txtOwnerZip);
         formData.append('ContractingCo', this.state.txtContractingCo);
         formData.append('ContactPhone', this.state.txtContactPhone);

         formData.append('ContactEmail', this.state.txtContactEmail);

         formData.append('CompanyAddress', this.state.txtCompanyAddress);
         formData.append('CompanyCity', this.state.txtCompanyCity);

         formData.append('CompanyState', this.state.txtCompanyState);
         formData.append('CompanyZip', this.state.txtCompanyZip);
         formData.append('QualifierName', this.state.txtQualifierName);

         formData.append('OwnerBuilder', this.state.OwnerBuilder);
         formData.append('LicenseNumber', this.state.txtLicenseNumber);

         formData.append('Architect', this.state.txtArchitect);
         formData.append('ArchitectPhone', this.state.txtArchitectPhone);
         formData.append('ArchitectEmail', this.state.txtArchitectEmail);

         formData.append('ArchitectAddress', this.state.txtArchitectAddress);
         formData.append('ArchitectCity', this.state.txtArchitectCity);

         formData.append('ArchitectState', this.state.txtArchitectState);
         formData.append('ArchitectZip', this.state.txtArchitectZip);
         formData.append('BondingCompany', this.state.txtBondingCompany);

         formData.append('BondingAddress', this.state.txtBondingAddress);
         formData.append('BondingCity', this.state.txtBondingCity);
         formData.append('BondingState', this.state.txtBondingState);
         formData.append('BondingZip', this.state.txtBondingZip);
         formData.append('Titleholder', this.state.txtTitleholder);
         formData.append('TitleholderAddress', this.state.txtTitleholderAddress);
         formData.append('TitleholderCity', this.state.txtTitleholderCity);
         formData.append('TitleholderState', this.state.txtTitleholderState);

         formData.append('TitleholderZip', this.state.txtTitleholderZip);
         formData.append('MortgageLenderZip', this.state.txtMortgageLenderZip);
         formData.append('MortgageLender', this.state.txtMortgageLender);
         formData.append('MortgageLenderAddress', this.state.txtMortgageLenderAddress);
         
         formData.append('MortgageLenderCit', this.state.txtMortgageLenderCity);
         formData.append('MortgageLenderState', this.state.txtMortgageLenderState);
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
                  this.setState({isShowingLoader: false});
                     
            })
            .catch((e) => 
            {
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
   }
   componentDidMount(){
      if(this.state.firsttimedata)
      {
         AsyncStorage.getItem('jobname').then((jobname) => {
            if (jobname) {
              this.setState({
                  jobname: jobname
               });
            }
         });

         AsyncStorage.getItem('locationname').then((locationvalue) => {
            if (locationvalue) {
              this.setState({
                  locationname: locationvalue
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
               this.setState({txtContractingCo:data.data.ContractingCo});
               this.setState({txtContactPhone:data.data.ContactPhone});
               this.setState({txtContactEmail:data.data.ContactEmail});
               this.setState({txtCompanyAddress:data.data.CompanyAddress});
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
               <Text style={styles.legend}>Select One Trade</Text>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Building</Text>
                     <Switch 
                        onValueChange={this.toggleBuilding}
                        value={this.state.Building}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Electrical</Text>
                     <Switch 
                        onValueChange={this.toggleElectrical}
                        value={this.state.Electrical}
                     />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Plumbing</Text>
                     <Switch 
                        onValueChange={this.togglePlumbing}
                        value={this.state.Plumbing}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Mechanical</Text>
                     <Switch 
                        onValueChange={this.toggleMechanical}
                        value={this.state.Mechanical}
                     />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Other</Text>
                     <Switch 
                        onValueChange={this.toggleheadOther}
                        value={this.state.headOther}
                     />
                  </View>
               </View>
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>General</Text>
               <View style={styles.textboxwrraper}>
                  <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
                  <DateTimePicker
                     isVisible={this.state.isDateTimePickerVisible}
                     onConfirm={this.handleDatePicked}
                     onCancel={this.hideDateTimePicker}
                     locale="en_GB"
                  />
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtapplicationdate) => this.setState({txtapplicationdate})}
                        value={this.state.txtapplicationdate} 
                        placeholder="Application Date"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtjob_name) => this.setState({txtjob_name})}  
                        placeholder="Job Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  
                     <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtunit) => this.setState({txtunit})}  
                           placeholder="Unit"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  
                 
                     <TextInput style={styles.inputBoxWarrperSecond} 
                           onChangeText={(txtcity) => this.setState({txtcity})}  
                           placeholder="City"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />  
                  
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                        onChangeText={(txtTaxFolioNo) => this.setState({txtTaxFolioNo})}  
                        placeholder="Tax Folio No"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtFloodZn) => this.setState({txtFloodZn})}  
                        placeholder="Flood Zn"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />   
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                        onChangeText={(txtBFE) => this.setState({txtBFE})}  
                        placeholder="BFE"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtFloorArea) => this.setState({txtFloorArea})}  
                        placeholder="Floor Area"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />   
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtFloorArea) => this.setState({txtFloorArea})}  
                           placeholder="Floor Area"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtJobValue) => this.setState({txtJobValue})}  
                        placeholder="Job Value"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtBuildingUse) => this.setState({txtBuildingUse})}  
                        placeholder="Building Use"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtConstructionType) => this.setState({txtConstructionType})}  
                        placeholder="Construction Type"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtOccupancyGroup) => this.setState({txtOccupancyGroup})}  
                        placeholder="Occupancy Group"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtPresentUse) => this.setState({txtPresentUse})}  
                           placeholder="Present Use"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                           onChangeText={(txtProposedUsed) => this.setState({txtProposedUsed})}  
                           placeholder="Proposed Used"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />      
               </View>
               
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Description of Work</Text>
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtDescriptionofwork) => this.setState({txtDescriptionofwork})}  
                        placeholder="Description of Work"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>New</Text>
                     <Switch 
                        onValueChange={this.toggleDescWorkNew}
                        value={this.state.DescWorkNew}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Addition</Text>
                     <Switch 
                        onValueChange={this.toggleDescWorkAddition}
                        value={this.state.DescWorkAddition}
                     />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Repair</Text>
                     <Switch 
                        onValueChange={this.toggleDescWorkRepair}
                        value={this.state.DescWorkRepair}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Alteration</Text>
                     <Switch 
                        onValueChange={this.toggleDescWorkAlteration}
                        value={this.state.DescWorkAlteration}
                     />
                  </View>
               </View>
               <View style={styles.containerInput}>
                  <View style={styles.clscheckboxrowFirst}>
                     <Text style={styles.clscheckboxlabel}>Demolition</Text>
                     <Switch 
                        onValueChange={this.toggleDescWorkDemolition}
                        value={this.state.DescWorkDemolition}
                     />
                  </View>
                  <View style={styles.clscheckboxrowLast}>
                     <Text style={styles.clscheckboxlabel}>Revision</Text>
                     <Switch 
                        onValueChange={this.toggleDescWorkRevision}
                        value={this.state.DescWorkRevision}
                     />
                  </View>
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Other</Text>
                  <Switch 
                     onValueChange={this.toggleDescWorkOther}
                     value={this.state.DescWorkOther}
                  />
               </View>
               <View style={styles.textboxwrraper}>
                  <TextInput style={styles.inputBox} 
                        onChangeText={(txtLegalDescription) => this.setState({txtLegalDescription})}  
                        placeholder="Legal Description"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Attachment</Text>
                  <Switch 
                     onValueChange={this.toggleDescWorkAttachment}
                     value={this.state.DescWorkAttachment}
                  />
               </View>
            </View>   
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Property Owner</Text>
               
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtPropertyOwner) => this.setState({txtPropertyOwner})}  
                        placeholder="Property Owner"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtEmail) => this.setState({txtEmail})}  
                        placeholder="Email"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtOwnerAddress) => this.setState({txtOwnerAddress})}  
                        placeholder="Owner's Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtPhone) => this.setState({txtPhone})}  
                           placeholder="Phone"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtOwnerCity) => this.setState({txtOwnerCity})}  
                        placeholder="Owner City"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtOwnerState) => this.setState({txtOwnerState})}  
                           placeholder="Owner State"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtOwnerZip) => this.setState({txtOwnerZip})}  
                        placeholder="Owner Zip"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                        maxLength={5}
                     />      
               </View>
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Contracting Co.</Text>   
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        value={this.state.txtContractingCo}
                        onChangeText={(txtContractingCo) => this.setState({txtContractingCo})}  
                        placeholder="Contracting Co."
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox}
                        value={this.state.txtContactEmail} 
                        onChangeText={(txtContactEmail) => this.setState({txtContactEmail})}  
                        placeholder="Contracting Email"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        value={this.state.txtCompanyAddress} 
                        onChangeText={(txtCompanyAddress) => this.setState({txtCompanyAddress})}  
                        placeholder="Company Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.txtContactPhone} 
                           onChangeText={(txtContactPhone) => this.setState({txtContactPhone})}  
                           placeholder="Contracting Phone"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        value={this.state.txtCompanyCity} 
                        onChangeText={(txtCompanyCity) => this.setState({txtCompanyCity})}  
                        placeholder="Company City"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />      
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           value={this.state.txtCompanyState}
                           onChangeText={(txtCompanyState) => this.setState({txtCompanyState})}  
                           placeholder="Company State"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        value={this.state.txtCompanyZip}
                        onChangeText={(txtCompanyZip) => this.setState({txtCompanyZip})}  
                        placeholder="Company Zip"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                        maxLength={5}
                     />      
               </View>
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Qualifier</Text>   
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtQualifierName) => this.setState({txtQualifierName})}  
                        placeholder="Qualifier's Name"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clscheckboxlabel}>Owner-Builder</Text>
                  <Switch 
                     onValueChange={this.toggleOwnerBuilder}
                     value={this.state.OwnerBuilder}
                  />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtLicenseNumber) => this.setState({txtLicenseNumber})}  
                        placeholder="License Number"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Architect/Engineer’s</Text>    
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtArchitect) => this.setState({txtArchitect})}  
                        placeholder="Architect/Engineer's Name"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtArchitectEmail) => this.setState({txtArchitectEmail})}  
                        placeholder="Architect/Engineer's Email"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtArchitectAddress) => this.setState({txtArchitectAddress})}  
                        placeholder="Architect/Engineer's Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtArchitectPhone) => this.setState({txtArchitectPhone})}  
                           placeholder="Phone"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                           onChangeText={(txtArchitectCity) => this.setState({txtArchitectCity})}  
                           placeholder="City"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtArchitectState) => this.setState({txtArchitectState})}  
                           placeholder="State"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtArchitectZip) => this.setState({txtArchitectZip})}  
                        placeholder="Zip"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                        maxLength={5}
                     />      
               </View>
               
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Bonding</Text>   
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtBondingCompany) => this.setState({txtBondingCompany})}  
                        placeholder="Bonding Company"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtBondingAddress) => this.setState({txtBondingAddress})}  
                        placeholder="Bonding Company Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtBondingCity) => this.setState({txtBondingCity})}  
                        placeholder="Bonding City"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtBondingState) => this.setState({txtBondingState})}  
                           placeholder="Bonding State"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtBondingZip) => this.setState({txtBondingZip})}  
                        placeholder="Bonding Zip"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                        maxLength={5}
                     />      
               </View>
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Fee Simple Titleholder’s name</Text>     
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtTitleholder) => this.setState({txtTitleholder})}  
                        placeholder="Titleholder's name"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtTitleholderAddress) => this.setState({txtTitleholderAddress})}  
                        placeholder="Titleholder Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtTitleholderCity) => this.setState({txtTitleholderCity})}  
                        placeholder="Titleholder City"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.containerInput}>
                  <TextInput style={styles.inputBoxWarrperFirst} 
                           onChangeText={(txtTitleholderState) => this.setState({txtTitleholderState})}  
                           placeholder="Titleholder State"
                           placeholderTextColor = "#000"
                           selectionColor="#000"
                           keyboardType="default"
                        />
                  <TextInput style={styles.inputBoxWarrperSecond} 
                        onChangeText={(txtTitleholderZip) => this.setState({txtTitleholderZip})}  
                        placeholder="Titleholder Zip"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                        maxLength={5}
                     />      
               </View>
               
            </View>
            <View style={styles.fieldSet}>
               <Text style={styles.legend}>Mortgage Lender's</Text>   
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtMortgageLender) => this.setState({txtMortgageLender})}  
                        placeholder="Mortgage Lender's Name"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtMortgageLenderAddress) => this.setState({txtMortgageLenderAddress})}  
                        placeholder="Mortgage Lender's Address"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtMortgageLenderCity) => this.setState({txtMortgageLenderCity})}  
                        placeholder="Mortgage Lender City"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtMortgageLenderState) => this.setState({txtMortgageLenderState})}  
                        placeholder="Mortgage Lender State"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                     />
               </View>
               <View style={styles.textboxwrraper}>
                     <TextInput style={styles.inputBox} 
                        onChangeText={(txtMortgageLenderZip) => this.setState({txtMortgageLenderZip})}  
                        placeholder="Mortgage Lender Zip"
                        placeholderTextColor = "#000"
                        selectionColor="#000"
                        keyboardType="default"
                        maxLength={5}
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
      paddingLeft:20,
      paddingRight:20,
   },
   inputBox: {
      width:350,
      height:35,
      backgroundColor:'rgb(235, 236, 240)',
      borderRadius: 5,
      paddingHorizontal:6,
      fontSize:14,
      color:'#000000',
      marginVertical: 5
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
      color:'#000',
      padding:"2%"
   },
   datepickerwarraper:{
      marginTop:"3%",
      marginBottom:"3%",
      color:'#000',
   },
   datepickerinput:{
      width:300,
      color:'#FFFFFF',
   },
   clscheckboxbuild:{
      padding: 3,
      alignItems:'center',
      marginLeft:'15%'
   },
   clscheckboxrightbuild:{
      color:'#000',
   },
   clscheckboxlabel:{
      width:300,
      fontSize: 18,
      color:'#000',
      padding:"2%"
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
   },
   clscheckboxrowFirst:{
      flex:3,
      marginBottom:5
   },
   clscheckboxrowLast:{
      flex:3,
      marginBottom:5
   }   
 });