import { defHttp } from '/@/utils/http/axios';

<<<<<<< HEAD
export function workBenchData() {
=======
export function getWorkbenchData() {
>>>>>>> 61bfed2d487820a404a8b373c61e709bbbc8b2e1
  return defHttp.get({ url: '/workbench' });
}
