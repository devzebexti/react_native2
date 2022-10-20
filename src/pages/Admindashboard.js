import React, { Component } from 'react';
import Locations from '../pages/Locations.js';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity, Text, View,StyleSheet,TextInput,Animated,Alert,Button} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../components/Logo';
import { WebView } from 'react-native-webview';

export default class Admindashboard extends Component<{}> {
   constructor(props) {
      super(props);
      this.state = {
         data:[],
         data1:[],
         data2:[],
         tableHead: ['Jobname','Action'],
         tableData: [
            ['2','3']
         ],
         storeuserid:'',
         firsttimedata:true,
         secondtimedata:true,
         threetimedata:true,
         showWebView: false,
         pdffilename:'',
         profile_status:''
      };
   }
   goCreateNewPermit = async () => {
      //console.log("=====PROFILE STATUS=====");
      //console.log(this.state.profile_status);
      if(this.state.profile_status)
      {
         Actions.home();
      }
      else{
         Actions.profile();
      }
      
   } 
   goProfile = async () => {
      Actions.profile()
   } 
   componentDidMount(){
      if(this.state.firsttimedata)
      {
         this.setState({firsttimedata:false})
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

            const urlprofile = "https://miamidata.com/mvpapi/webservices.php?method=getProfile&userid="+this.state.storeuserid;
            console.log(urlprofile);
            fetch(urlprofile,{
               method:'GET'
            })
            .then(response =>response.json())
            .then(data =>{
               //this.setState({data:data})
               //console.log('====start user data123456======');
               //console.log(data.data);
               this.setState({profile_status:data.data.profile_status});
               //console.log('====end user data======');
               
            });

            const url = "https://miamidata.com/mvpapi/webservices.php?method=getDataChangeList&id="+this.state.storeuserid;
            console.log(url);
            fetch(url,{
               method:'GET'
            })
            .then(response =>response.json())
            .then(data =>{
               //this.setState({data:data})
               //console.log(data.data);
               this.setState({data:data.data})
               this.setState({firsttimedata:false})
            });

            const url1 = "https://miamidata.com/mvpapi/webservices.php?method=getPermitList&id="+this.state.storeuserid;
            //console.log(url1);
            fetch(url1,{
               method:'GET'
            })
            .then(response =>response.json())
            .then(data =>{
               //this.setState({data:data})
               //console.log(data.data);
               this.setState({data1:data.data})
               this.setState({secondtimedata:false})
            });

            const url2 = "https://miamidata.com/mvpapi/webservices.php?method=getLetteroftrasmittal&id="+this.state.storeuserid;
            //console.log(url2);
            fetch(url2,{
               method:'GET'
            })
            .then(response =>response.json())
            .then(data =>{
               //this.setState({data:data})
               //console.log(data.data);
               this.setState({data2:data.data})
               this.setState({threetimedata:false})
            });
         });
      }
   }
   
   _alertIndex(index,data,pagetype,rowData) {
      //console.log("FILE NAME ::: "+data);
      //console.log();
      if(data != "")
      {
         const pdf_file = "https://miamidata.com/mvpapi/pdf_files/"+data;
         //Alert.alert(pdf_file);
         Actions.pdfview({ data: data,pagetype:pagetype});
         //this.setState({showWebView: true});
         //this.setState({pdffilename: data});
      }
      else
      {
         Alert.alert(`File Not Found...`);
      }
      
    }

   render() {
      const data = this.state;
      const state = this.state;
      //console.log(data.data);
      const element = (data, index,pagetype,rowData) => (
         <TouchableOpacity onPress={() => this._alertIndex(index,data,pagetype,rowData)}>
           <View style={styles.btn}>
             <Text style={styles.btnText}>View PDF</Text>
           </View>
         </TouchableOpacity>
       );
       
      return (
         
         <View style={styles.container}>

               <View style={styles.clscheckboxrow}>
                  <Text style={styles.clspagetitle}>Dashboard</Text>
                  <TouchableOpacity onPress={this.goProfile} style={styles.clsprofileblock}>
                     <Text style={styles.clsprofiletext}>Profile</Text>
                  </TouchableOpacity>
               </View>
               <TouchableOpacity onPress={this.goCreateNewPermit} style={styles.clsnewpermitblock}>
                  <Text style={styles.clsnewpermit}>Create New Permit</Text>
               </TouchableOpacity>
               
               <Text style={styles.clspermithistory}>Data Change</Text>
               <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff',padding:'15px'}} style={{width:'100%'}}>
               <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
               {
                  data.data.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                     {
                        rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 1 ? element(cellData, index,1,rowData) : cellData} textStyle={styles.text}/>
                        ))
                     }
                  </TableWrapper>
                  ))
               }
               </Table>
               <Text style={styles.clspermithistory}>Permit History</Text>
               <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff',padding:'15px'}} style={{width:'100%'}}>
               <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
               {
                  data.data1.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                     {
                        rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 1 ? element(cellData, index,2,rowData) : cellData} textStyle={styles.text}/>
                        ))
                     }
                  </TableWrapper>
                  ))
               }
               </Table>
               <Text style={styles.clspermithistory}>Letter of trasmittal</Text>
               <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff',padding:'15px'}} style={{width:'100%'}}>
               <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
               {
                  data.data2.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                     {
                        rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 1 ? element(cellData, index,3,rowData) : cellData} textStyle={styles.text}/>
                        ))
                     }
                  </TableWrapper>
                  ))
               }
               </Table>
         </View>
            
      )
   }
}
const styles = StyleSheet.create({
   container: { flex: 1, padding: 16, paddingTop: 4, backgroundColor: '#fff',marginTop:60},
   head: { height: 40, backgroundColor: '#808B97' },
   text: { margin: 6 },
   clsprofiletext:{color:'#78B7BB',fontSize:21,fontWeight:'bold',textAlign: 'right'},
   row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
   btn: { width: 125, height: 50, backgroundColor: '#78B7BB',  borderRadius: 1 },
   btnText: { textAlign: 'center', color: '#fff',fontSize:20,padding: 5,marginTop:5},
   clspagetitle:{fontSize:21,fontWeight:'500',width:300},
   clsnewpermit:{textAlign: 'center', fontSize:16,fontWeight:'500',color:'#fff'},
   clspermithistory:{textAlign: 'center', fontSize:23,marginBottom:8,marginTop:15,marginBottom:15},
   clsnewpermitblock: {
      width:300,
      backgroundColor:'#000',
      borderRadius: 10,
      paddingVertical: 10,
      alignSelf: 'flex-end',
      width: '45%',
      height: '5%',
   },
   clscheckboxrow:{
      flexDirection: "row",
      marginBottom:30
   }
 });