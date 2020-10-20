const path = require('path');
const express = require('express');
const { nowDateIso, nowDateKorean } = require('./modules/sample');
console.log(  nowDateIso() );
console.log(  nowDateKorean()  );