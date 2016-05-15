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
  if(collection.length === undefined){
    newArray.push(collection);
  }

  for(var i = 0; i < collection.length ; i++){
    newArray.push(collection[i]);
  }

  return newArray;
}

module.exports = double_to_one;
