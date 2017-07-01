/**
 * Publixe for React Native
 * Copyright 2016-present, Pavel Machacek
 * @fileoverview Publixe package
 * @author pavex@ines.cz
 */
'use strict';
import Application from './Application.js';
import Navigator from './Navigator.js';
import Scene from './Scene.js';


/**
 */
var Publixe = {

// Application controller
	Application: Application,
	Navigator: Navigator,

// Exteded component/Scene component with Navigator
	Scene: Scene,

};





/**
 * Export
 */
module.exports = Publixe;

