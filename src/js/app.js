import PageMaker from './PageMaker';
import StateService from './StateStorage';
import PageController from './controller';

const data = [
  {
    id: 'todo',
    title: 'Todo',
  },
  {
    id: 'in-progress',
    title: 'In progress',
  },
  {
    id: 'done',
    title: 'Done',
  },
];

const pageMaker = new PageMaker(data);
pageMaker.bindToDOM(document.querySelector('.page'));

const stateService = new StateService(localStorage);
const pageCtrl = new PageController(pageMaker, stateService);

pageCtrl.init();
