import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/HelloWorld.vue';

const CustomElement = wrap(Vue, VueWebComponent);

window.customElements.define('my-custom-element', CustomElement);