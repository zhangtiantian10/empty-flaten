'use strict';

function double_to_one(collection) {
  var newArray = buildNewArray(collection);

  return newArray;
}

function buildNewArray(collection) {
  var newArray = [];

  for (var i = 0; i < collection.length; i++) {
    newArray = getElement(newArray,collection[i]);
  }

  return newArray;
}

function getElement(newArray, collection) {

  for(var i = 0; i < collection.length ; i++){
    if(isExit(collection[i],newArray)){
      newArray.push(collection[i]);
    }
  }

  return newArray;
}

function isExit(element, newArray) {

  for(var i = 0 ; i < newArray.length ; i++){
    if(element === newArray[i]){

      return false;
    }
  }

  return true;
}

module.exports = double_to_one;
