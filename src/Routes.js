import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Locations from './pages/Locations.js'
import Permitforms from './pages/Permitforms.js'
import Buildpermit from './pages/Buildpermit.js'
import LetterofTransmittal from './pages/LetterofTransmittal.js'
import Datachangehollywood from './pages/Datachangehollywood.js'
import Admindashboard from './pages/Admindashboard.js'
import Pdfview from './pages/Pdfview.js'
import Profile from './pages/Profile.js'

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router navigationBarStyle={{ marginTop: 10 }}>
		      	<Scene key = "root">
					<Scene key = "login" component = {Login} title = "Login" />
					<Scene key = "signup" component = {Signup} title = "Signup" />
					<Scene key = "profile" component = {Profile} title = "Profile" />
					<Scene key = "admindashboard" component = {Admindashboard} title = "Dashboard" hideNavBar={true} />
					<Scene key = "pdfview" component = {Pdfview} title = "Preview" />
					<Scene key = "home" component = {Home} title = "Job Name" />
					<Scene key = "locations" component = {Locations} title = "Locations" />
					<Scene key = "permitforms" component = {Permitforms} title = "Permit Forms" />
					<Scene key = "buildpermit" component = {Buildpermit} title = "Build Permit" />
					<Scene key = "letterofTransmittal" component = {LetterofTransmittal} title = "Letter Of Transmittal" />
					<Scene key = "datachangehollywood" component = {Datachangehollywood} title = "Data Change Hollywood" />
		      	</Scene>
		   	</Router>
			)
	}
}