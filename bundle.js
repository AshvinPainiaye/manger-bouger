/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	var Consommateur = (function () {
	    function Consommateur(taille, poids, age, sexe) {
	        this.taille = taille;
	        this.poids = poids;
	        this.age = age;
	        this.sexe = sexe;
	        var submit = document.getElementById('submitConsommateur');
	        submit.addEventListener("submit", function (event) { console.log(event); });
	    }
	    Object.defineProperty(Consommateur.prototype, "nbCalorie", {
	        get: function () {
	            var nbCalorie;
	            if (this.Sexe == "femme") {
	                nbCalorie = 9.740 * this.Poids + 172.9 * this.Taille - 4.737 * this.Age + 667.051;
	            }
	            else {
	                nbCalorie = 13.707 * this.Poids + 492.3 * this.Taille - 6.673 * this.Age + 77.607;
	            }
	            console.log(nbCalorie);
	            return nbCalorie;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Consommateur.prototype, "Taille", {
	        get: function () {
	            return this.taille;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Consommateur.prototype, "Poids", {
	        get: function () {
	            return this.poids;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Consommateur.prototype, "Age", {
	        get: function () {
	            return this.age;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Consommateur.prototype, "Sexe", {
	        get: function () {
	            return this.sexe;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Consommateur;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Consommateur;
	var consommateur = new Consommateur(195, 90, 21, "femme");
	consommateur.nbCalorie;


/***/ }
/******/ ]);