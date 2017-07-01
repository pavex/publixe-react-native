/**
 * Publixe for React Native
 * Copyright 2016-present, Pavel Machacek
 * @fileoverview Base application component with navigator
 * @author pavex@ines.cz
 */
import React from 'react';
import Navigator from './Navigator.js';


/**
 */
export default class Application extends React.Component {


/**
 * @return {Publixe.Navigator}
 */	
	getNavigator() {
		return this.refs.navigator;
	};





/**
 * @type {Publixe.Scene}
 */
	_intialScene = null;





/**
 * Set initial scene view
 * @param {Publixe.Scene} component
 */
	setInitialScene(component) {
		this._intialScene = component;
	};





/** 
 * @private
 * @return {Publixe.Scene}
 */
	_getInitialScene() {
		return this._intialScene;
	};





/**
 */
	render() {
		return (
			<Navigator ref="navigator"
				application={this}
				initialScene={this._getInitialScene()}
			/>
		);
	};


}
