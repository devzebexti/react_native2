import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert,Switch,isCheckedNew,ScrollView,KeyboardAvoidingView,Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import CheckBox from 'react-native-check-box'
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios').default;
import SpinnerButton from 'react-native-spinner-button';

export default class Profile extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {
         data:[],
         data1:[],
         data2:[],
         tableHead: ['Id', 'Jobname','Action'],
         tableData: [
            ['1', '2','3']
         ],
         storeuserid:'',
         emailaddress:'',
         firsttimedata:true,
         secondtimedata:true,
         threetimedata:true,
         showWebView: false,
         pdffilename:'',
         txtContractingCo:'',
         txtContactPhone:'',
         txtContactEmail:'',
         txtCompanyAddress:'',
         txtCompanyCity:'',
         txtCompanyState:'',
         txtCompanyZip:'',
         firsttimedata:true,
         txtFullname:'',
         txtCompanyname:'',
         txtCity:'',
         txtState:'',
         txtZipcode:'',
         contractor:'Air Conditioning',
      };
   }
    goCreateNewPermit() {
        AsyncStorage.setItem('USERID', '');
        AsyncStorage.setItem('emailaddress', '');
        Actions.login();
    }
    goUdateProfile = async () => {
      let USERID = await AsyncStorage.getItem('USERID');  
      //console.log("====comethisaction===");
      //console.log(USERID);
      console.log(this.state.txtFullname);
      console.log(this.state.txtCompanyname);
      console.log(this.state.txtCity);
      console.log(this.state.txtState);

      const formData = new FormData();
      formData.append('method', 'updateUserProfile');
      formData.append('user_id', USERID);
      formData.append('ContractingCo', this.state.txtContractingCo);
      formData.append('ContactPhone', this.state.txtContactPhone);
      formData.append('ContactEmail', this.state.txtContactEmail);
      formData.append('CompanyAddress', this.state.txtCompanyAddress);
      formData.append('CompanyCity', this.state.txtCompanyCity);
      formData.append('CompanyState', this.state.txtCompanyState);
      formData.append('CompanyZip', this.state.txtCompanyZip);
      formData.append('fullname', this.state.txtFullname);
      formData.append('companyname', this.state.txtCompanyname);
      formData.append('city', this.state.txtCity);
      formData.append('state', this.state.txtState);
      formData.append('zipcode', this.state.txtZipcode);
      formData.append('contractor', this.state.contractor);
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
                if(response.data.data.profile_status){
                  AsyncStorage.setItem('profile_status', 'Yes');
                }
                else
                {
                  AsyncStorage.setItem('profile_status', 'No');
                }
                
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
    }
    componentDidMount(){
      if(this.state.firsttimedata)
      {
         this.setState({firsttimedata:false});
         AsyncStorage.getItem('emailaddress').then((value) => {
            if (value) {
              this.setState({
                emailaddress: value
               });
            }
          }); 
         AsyncStorage.getItem('USERID').then((value) => {
            //console.log(value);
            if (value) {
              this.setState({
                  storeuserid: value
               });
            }
         })
         .then(res => {
            //console.log("COME TO STORE DATA");
            //console.log(this.state.storeuserid+":::DATA NOT FOUND");

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
               this.setState({txtFullname:data.data.fullname});
               this.setState({txtCompanyname:data.data.companyname});
               this.setState({txtCity:data.data.city});
               this.setState({txtState:data.data.state});
               this.setState({txtZipcode:data.data.zipcode});
               
               
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
                  
                  <View style={styles.profileimgbox}>
                     <Image  style={{width:120, height: 120}}
                        source={require('../images/profile_l.png')}/>
                  </View>
                  <Text style={styles.clspagetitle}>{this.state.emailaddress}</Text>
                  <TouchableOpacity onPress={this.goCreateNewPermit} style={styles.button}>
                     <Text style={styles.buttonText}>Log Out</Text>
                  </TouchableOpacity>

                  <View style={styles.fieldSet}>
                     <Text style={styles.legend}>General</Text>   
                     <View style={styles.containerInput}>
                        <TextInput style={styles.inputBoxWarrperFirst} 
                                 value={this.state.txtFullname}
                                 onChangeText={(txtFullname) => this.setState({txtFullname})}  
                                 placeholder="Full Name"
                                 placeholderTextColor = "#000"
                                 selectionColor="#fff"
                                 keyboardType="default"
                              />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                              value={this.state.txtCompanyname}
                              onChangeText={(txtCompanyname) => this.setState({txtCompanyname})}  
                              placeholder="Company Name"
                              placeholderTextColor = "#000"
                              selectionColor="#fff"
                              keyboardType="default"
                           />      
                     </View>
                     <DropDownPicker
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
                     />
                     <View style={styles.containerInput}>
                        <TextInput style={styles.inputBoxWarrperFirst} 
                                 value={this.state.txtCity}
                                 onChangeText={(txtCity) => this.setState({txtCity})}  
                                 placeholder="City"
                                 placeholderTextColor = "#000"
                                 selectionColor="#fff"
                                 keyboardType="default"
                              />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                              value={this.state.txtState}
                              onChangeText={(txtState) => this.setState({txtState})}  
                              placeholder="State"
                              placeholderTextColor = "#000"
                              selectionColor="#fff"
                              keyboardType="default"
                           />      
                     </View>
                     <View style={styles.containerInput}>
                        <TextInput style={styles.inputBoxWarrperFirst} 
                                 value={this.state.txtZipcode}
                                 onChangeText={(txtZipcode) => this.setState({txtZipcode})}  
                                 placeholder="Zipcode"
                                 placeholderTextColor = "#000"
                                 selectionColor="#fff"
                                 keyboardType="default"
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
                              selectionColor="#fff"
                              keyboardType="default"
                           />
                     </View>
                     
                     <View style={styles.textboxwrraper}>
                           <TextInput style={styles.inputBox} 
                              value={this.state.txtContactEmail}
                              onChangeText={(txtContactEmail) => this.setState({txtContactEmail})}  
                              placeholder="Contracting Email"
                              placeholderTextColor = "#000"
                              selectionColor="#fff"
                              keyboardType="default"
                           />
                     </View>
                     <View style={styles.textboxwrraper}>
                           <TextInput style={styles.inputBox} 
                              value={this.state.txtCompanyAddress}
                              onChangeText={(txtCompanyAddress) => this.setState({txtCompanyAddress})}  
                              placeholder="Company Address"
                              placeholderTextColor = "#000"
                              selectionColor="#fff"
                              keyboardType="default"
                           />
                     </View>
                     <View style={styles.containerInput}>
                        <TextInput style={styles.inputBoxWarrperFirst} 
                                 value={this.state.txtContactPhone}
                                 onChangeText={(txtContactPhone) => this.setState({txtContactPhone})}  
                                 placeholder="Contracting Phone"
                                 placeholderTextColor = "#000"
                                 selectionColor="#fff"
                                 keyboardType="default"
                              />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                              value={this.state.txtCompanyCity}
                              onChangeText={(txtCompanyCity) => this.setState({txtCompanyCity})}  
                              placeholder="Company City"
                              placeholderTextColor = "#000"
                              selectionColor="#fff"
                              keyboardType="default"
                           />      
                     </View>
                     <View style={styles.containerInput}>
                        <TextInput style={styles.inputBoxWarrperFirst} 
                                 value={this.state.txtCompanyState}
                                 onChangeText={(txtCompanyState) => this.setState({txtCompanyState})}  
                                 placeholder="Company State"
                                 placeholderTextColor = "#000"
                                 selectionColor="#fff"
                                 keyboardType="default"
                              />
                        <TextInput style={styles.inputBoxWarrperSecond} 
                              value={this.state.txtCompanyZip}
                              onChangeText={(txtCompanyZip) => this.setState({txtCompanyZip})}  
                              placeholder="Company Zip"
                              placeholderTextColor = "#000"
                              selectionColor="#fff"
                              keyboardType="default"
                              maxLength={5}
                           />      
                     </View>
                  </View>
                  <View style={styles.containerInputButton}>
                     <TouchableOpacity onPress={this.goUdateProfile} style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                     </TouchableOpacity>
                  </View>
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
    marginTop:30,
    padding:20
 },
   head: { height: 40, backgroundColor: '#808B97' },
   text: { margin: 6 },
   row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
   btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
   btnText: { textAlign: 'center', color: '#fff' },
   clspagetitle:{textAlign: 'center', fontSize:27,fontWeight:'500',marginBottom:0},
   clsnewpermit:{textAlign: 'center', fontSize:16,fontWeight:'500',color:'#fff'},
   clspermithistory:{textAlign: 'center', fontSize:18,marginBottom:8,marginTop:15},
   clsnewpermitblock: {
      width:300,
      backgroundColor:'#000',
      borderRadius: 25,
      paddingVertical: 10,
      justifyContent: 'center',
      width: '45%',
      height: '5%',
    },
    button: {
        width:300,
        backgroundColor:'#000',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#FFF',
        textAlign:'center'
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
         height:50,
         backgroundColor:'rgb(235, 236, 240)',
         borderRadius: 5,
         paddingHorizontal:15,
         fontSize:14,
         color:'#000000',
         marginVertical: 5,
         marginRight:5
      },
      inputBoxWarrperSecond:{
         flex:5,
         height:50,
         backgroundColor:'rgb(235, 236, 240)',
         borderRadius: 5,
         paddingHorizontal:15,
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
      },
      containerInputButton:{
         marginTop:15
      }
 });