import '@polymer/polymer/polymer-element.js';
import '@polymer/paper-slider/paper-slider.js'
import '@belomx/paper-range-slider/paper-range-slider.js'
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
        <paper-range-slider single-slider
            class="singleSlider"
            on-value-change="onValueChanged" 
            min="[[min]]" 
            max="[[max]]"
            pin="[[pin]]"
            always-show-pin="[[alwaysShowPin]]"
            snaps="[[snaps]]"
            value-max="{{value}}"
            display-function="{{generateLabel}}">
        </paper-range-slider>
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
            },
            pin: {
                type: Boolean
            },
            expand: {
                type: Boolean
            },
            snaps: {
                type: Boolean
            }
        }
    }

    generateLabel (value) {
        return value;
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