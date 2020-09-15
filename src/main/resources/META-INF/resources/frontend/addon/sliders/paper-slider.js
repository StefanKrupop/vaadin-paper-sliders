import '@polymer/polymer/polymer-element.js';
import '@polymer/paper-slider/paper-slider.js'
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from "@polymer/polymer";

import { ControlStateMixin } from '@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { ElementMixin } from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

class VaadinPaperSlider extends 
  ElementMixin(
      ControlStateMixin(
        ThemableMixin(PolymerElement))) { 

    static get template() {
        return html`
        <style include="paper-single-slider-shared-styles">
        /* polymer-cli linter breaks with empty line */          
        </style>
        <paper-slider 
            class="singleSlider"
            on-value-change="onValueChanged" 
            min="[[min]]" 
            max="[[max]]" 
            value="{{value}}">    
        </paper-slider>
    `;
    }

    // ::slotted(map)

    static get is() {
        return 'vaadin-paper-slider';
    }

    static get properties() {

        console.log("**** - At properties()");

        return {
            min: {
                type: Number
            },
            max: {
                type: Number
            },
            value: {
                type: Number
            }
        }
    }

    updateConfig() {

        console.log("**** - At updateConfig()");

    }

    ready() {
        super.ready();

        console.log("**** - at ready()");

    }
}

customElements.define(VaadinPaperSlider.is, VaadinPaperSlider);
export {VaadinPaperSlider};

// // <link rel="import" href="../../bower_components/polymer/polymer-element.html">
// // <link rel="import" href="../../bower_components/paper-slider/paper-slider.html"/>
//
// <dom-module id="vaadin-paper-slider">
//     <template>
//         <paper-slider on-value-change="onValueChanged" min="[[min]]" max="[[max]]" value="{{value}}"></paper-slider>
//     </template>
//     <script>
//         class VaadinPaperSlider extends Polymer.Element {
//             static get is() {
//                 return 'vaadin-paper-slider';
//             }
//         }
//         customElements.define(VaadinPaperSlider.is, VaadinPaperSlider);
//     </script>
// </dom-module>
//
