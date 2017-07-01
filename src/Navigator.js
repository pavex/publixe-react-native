/**
 * Publixe for React Native
 * Copyright 2016-present, Pavel Machacek
 * @fileoverview Navigator component
 * @author pavex@ines.cz
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';


/**
 */
export default class Navigator extends React.Component {


/**
 */
	static propTypes = {
		initialScene: React.PropTypes.func.isRequired
	};





/**
 * @private
 * @type {array)
 */
	_childs = [];





/**
 * Push component into navigator
 * @private
 * @param {React.Component} component
 * @param {Object} props
 */
	_push(component, props) {
		this._childs.push({
			component: component,
			props: props
		});
	};





/**
 * Pop component from navigator
 * @private
 */
	_pop() {
		this._childs.splice(this._childs.length - 1, 1);
	};





/**
 * @param {React.Component} component
 * @param {Object} props
 */	
	open(component, props) {
		this._push(component, props);
		this.forceUpdate();
	};





/**
 */
	close() {
		this._pop();
		this.forceUpdate();
	};





/**
 * @private
 * @param {React.Component} component
 * @param {object} props
 * @return {React.Element}
 */
	_renderScene(component, props) {
		return (
			<View style={[StyleSheet.absoluteFillObject, {backgroundColor: '#fff', elevation: 9}]}>
				{React.createElement(component, props)}
			</View>
		);
	};





/**
 * @private
 * @return {Array<React.Element>}
 */
	_renderChilds() {
		var elements = [];
		for (i in this._childs) {
			const {component, props} = this._childs[i];
			props.navigator = this;
			props.application = this.props.application;
			elements.push([this._renderScene(component, props)]);
		}
		return elements;
	};





/**
 */
	render() {
		const props = {
			navigator: this,
			application: this.props.application,
		};
		return (
			<View style={StyleSheet.absoluteFillObject}>
				{this._renderScene(this.props.initialScene, props)}
				{this._renderChilds()}
			</View>
		);
	};


}

