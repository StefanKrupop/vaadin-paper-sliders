import '@polymer/polymer/polymer-element.js';
import '@belomx/paper-range-slider/paper-range-slider.js'
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {PolymerElement} from "@polymer/polymer";

import { ControlStateMixin } from '@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { ElementMixin } from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

class VaadinPaperRangeSlider extends 
  ElementMixin(
      ControlStateMixin(
        ThemableMixin(PolymerElement))) { 

    static get template() {
        return html`
        <style include="paper-range-slider-shared-styles">
        /* polymer-cli linter breaks with empty line */          
        </style>
        <paper-range-slider
                class="rangeSlider"
                always-show-pin="[[alwaysShowPin]]"
                on-change="onValueChanged"
                min="[[min]]"
                max="[[max]]"
                value-min="{{lowerValue}}"
                value-max="{{upperValue}}"
                value-diff-min="[[valueDiffMin]]"
                value-diff-max="[[valueDiffMax]]"
                display-function="{{generateLabel}}">
        </paper-range-slider>     
    `;
    }

    // ::slotted(map)

    static get is() {
        return 'vaadin-paper-range-slider';
    }

    static get properties() {

        console.log("**** - At properties()");

        return {
            alwaysShowPin: {
                type: Boolean
            },
            min: {
                type: Number
            },
            max: {
                type: Number
            },
            valueMin: {
                type: Number
            },
            valueMax: {
                type: Number
            },
            valueDiffMin: {
                type: Number
            },
            valueDiffMax: {
                type: Number
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

customElements.define(VaadinPaperRangeSlider.is, VaadinPaperRangeSlider);
export {VaadinPaperRangeSlider};