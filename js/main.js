// 'use strict'
import './data.js';
import './genaration.js';
import {makeActive, makeDeactive} from './form-activation.js';
import {validateForm} from './form-validation.js';

makeDeactive();
makeActive();
validateForm();
