import './style.css'

import { targetComponent } from './components/target'
AFRAME.registerComponent('target-img', targetComponent)

import { uiComponent } from './components/ui'
AFRAME.registerComponent('ui', uiComponent)

import { mobileComponent } from './components/mobile'
AFRAME.registerComponent('mobile', mobileComponent)
