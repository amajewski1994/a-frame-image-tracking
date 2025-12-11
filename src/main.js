import './style.css'
console.log('main')
import { targetComponent } from './components/target'
AFRAME.registerComponent('target-img', targetComponent)

import { uiComponent } from './components/ui'
AFRAME.registerComponent('ui', uiComponent)
