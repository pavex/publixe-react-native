/**
 * Publixe for React Native
 * Copyright 2016-present, Pavel Machacek
 * @fileoverview Default page/scene component
 * @author pavex@ines.cz
 */
import React from 'react';


/**
 */
export default class Scene extends React.Component {


/**
 */
	static propTypes = {
		navigator: React.PropTypes.object.isRequired,
		parent: React.PropTypes.object,
		application: React.PropTypes.object,
		onWillUnmount: React.PropTypes.func
	};





/**
 */
	componentWillUnmount() {
		if (this.props.onWillUnmount) {
			this.props.onWillUnmount.call(this);
		}
	}





/**
 * Get parent scene on React.Navigator
 * @return {Publixe.Scene}
 */
	parent() {
		return this.props.parent;
	};





/**
 * Get main application controller with React.Navigator
 * @return {Publixe.Application}
 */
	application() {
		return this.props.application;
	};





/**
 * Open/push new scene into React.Navigator
 * @param {Publixe.Scene} component
 * @param {Object=} opt_props
 */
	open(component, opt_props) {
		var props = opt_props || {};
		props.parent = this;
		this.props.navigator.open(component, props);
	};





/**
 * Close current scene
 */
	close() {
		this.props.navigator.close();
	};





};

