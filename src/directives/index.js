import clickOutside from '@/directives/click-outside';
import Vue from 'vue';

export default function registerDirectives() {
  clickOutside(Vue);
}
