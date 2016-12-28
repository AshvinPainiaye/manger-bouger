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

	var Consommateur = (function () {
	    function Consommateur() {
	    }
	    Consommateur.prototype.getNbCalorie = function (taille, poids, age, sexe) {
	        var nbCalorie;
	        if (sexe == "femme") {
	            nbCalorie = 9.740 * poids + 172.9 * taille - 4.737 * age + 667.051;
	        }
	        else if (sexe == "homme") {
	            nbCalorie = 13.707 * poids + 492.3 * taille - 6.673 * age + 77.607;
	        }
	        console.log(nbCalorie);
	        return nbCalorie;
	    };
	    Consommateur.prototype.submit = function () {
	        var taille = parseFloat(document.getElementById('taille').value);
	        var poids = parseInt(document.getElementById('poids').value);
	        var age = parseInt(document.getElementById('age').value);
	        var homme = document.getElementById('homme');
	        var sexe;
	        homme.checked ? sexe = 'homme' : sexe = 'femme';
	        return [taille, poids, age, sexe];
	    };
	    return Consommateur;
	}());
	var consommateur = new Consommateur();
	var submit = document.getElementById('submitConsommateur');
	submit.onsubmit = function (e) {
	    e.preventDefault();
	    var info = consommateur.submit();
	    var result = consommateur.getNbCalorie(info[0], info[1], info[2], info[3]);
	    document.getElementById('resultConsommateur').innerHTML = result.toString() + ' kcal';
	};


/***/ }
/******/ ]);