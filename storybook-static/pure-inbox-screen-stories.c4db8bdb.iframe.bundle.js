(self.webpackChunktaskbox=self.webpackChunktaskbox||[]).push([[63],{"./src/app/components/pure-inbox-screen.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,WithInteractions:()=>WithInteractions,default:()=>pure_inbox_screen_stories});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let PureInboxScreenComponent=class PureInboxScreenComponent{static#_=this.propDecorators={error:[{type:core.Input}]}};PureInboxScreenComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-pure-inbox-screen",template:'\n    <div *ngIf="error" class="page lists-show">\n      <div class="wrapper-message">\n        <span class="icon-face-sad"></span>\n        <p class="title-message">Oh no!</p>\n        <p class="subtitle-message">Something went wrong</p>\n      </div>\n    </div>\n\n    <div *ngIf="!error" class="page lists-show">\n      <nav>\n        <h1 class="title-page">Taskbox</h1>\n      </nav>\n      <app-task-list></app-task-list>\n    </div>\n  '})],PureInboxScreenComponent);const pure_inbox_screen_component=PureInboxScreenComponent;var ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),task_component=__webpack_require__("./src/app/components/task.component.ts"),ngxs_store_operators=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store-operators.js");const actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK",actions_ERROR="APP_ERROR";class ArchiveTask{static#_=this.type=actions_ARCHIVE_TASK;constructor(payload){this.payload=payload}}class PinTask{static#_=this.type=actions_PIN_TASK;constructor(payload){this.payload=payload}}class AppError{static#_=this.type=actions_ERROR;constructor(payload){this.payload=payload}}let TasksState=class TasksState{static getError(state){return state.error}static getAllTasks(state){return state.tasks}pinTask({getState,setState},{payload}){const task=getState().tasks.find((task=>task.id===payload));if(task){const updatedTask={...task,state:"TASK_PINNED"};setState((0,ngxs_store_operators.r$)({tasks:(0,ngxs_store_operators.$G)((pinnedTask=>pinnedTask?.id===payload),updatedTask)}))}}archiveTask({getState,setState},{payload}){const task=getState().tasks.find((task=>task.id===payload));if(task){const updatedTask={...task,state:"TASK_ARCHIVED"};setState((0,ngxs_store_operators.r$)({tasks:(0,ngxs_store_operators.$G)((archivedTask=>archivedTask?.id===payload),updatedTask)}))}}setAppError({patchState,getState},{payload}){patchState({error:!getState().error})}};(0,tslib_es6.gn)([(0,ngxs_store.aU)(PinTask)],TasksState.prototype,"pinTask",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(ArchiveTask)],TasksState.prototype,"archiveTask",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(AppError)],TasksState.prototype,"setAppError",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)()],TasksState,"getError",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)()],TasksState,"getAllTasks",null),TasksState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"taskbox",defaults:{tasks:[{id:"1",title:"1 Something",state:"TASK_INBOX"},{id:"2",title:"2 Something more",state:"TASK_INBOX"},{id:"3",title:"3 Something else",state:"TASK_INBOX"},{id:"4",title:"4 Something again",state:"TASK_INBOX"}],status:"idle",error:!1}}),(0,core.Injectable)()],TasksState);let TaskListComponent=class TaskListComponent{constructor(store){this.store=store,this.tasks$=store.select((state=>state.taskbox.tasks))}archiveTask(id){this.store.dispatch(new ArchiveTask(id))}pinTask(id){this.store.dispatch(new PinTask(id))}static#_=this.ctorParameters=()=>[{type:ngxs_store.yh}]};TaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-task-list",template:'\n    <app-pure-task-list\n      [tasks]="tasks$ | async"\n      (onArchiveTask)="archiveTask($event)"\n      (onPinTask)="pinTask($event)"\n    ></app-pure-task-list>\n  '})],TaskListComponent);const task_list_component=TaskListComponent;var pure_task_list_component=__webpack_require__("./src/app/components/pure-task-list.component.ts");let TaskModule=class TaskModule{};TaskModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,ngxs_store.$l.forFeature([TasksState])],exports:[task_component.Z,task_list_component],declarations:[task_component.Z,task_list_component,pure_task_list_component.Z],providers:[]})],TaskModule);var esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js");const pure_inbox_screen_stories={component:pure_inbox_screen_component,title:"PureInboxScreen",tags:["autodocs"],decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,TaskModule]}),(0,dist.applicationConfig)({providers:[ngxs_store.yh,(0,core.importProvidersFrom)(ngxs_store.$l.forRoot([TasksState]))]})]},Default={},Error={args:{error:!0}},WithInteractions={play:(_ref=(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,esm.uh)(canvasElement);yield esm.BX.click(canvas.getByLabelText("pinTask-1")),yield esm.BX.click(canvas.getByLabelText("pinTask-3")),yield esm.BX.click(canvas.getByLabelText("archiveTask-1").getElementsByTagName("span")[0])})),function play(_x){return _ref.apply(this,arguments)})};var _ref},"./src/app/components/pure-task-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>pure_task_list_component});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let PureTaskListComponent=class PureTaskListComponent{constructor(){this.tasksInOrder=[],this.loading=!1,this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}set tasks(arr){const initialTasks=[...arr.filter((t=>"TASK_PINNED"===t.state)),...arr.filter((t=>"TASK_PINNED"!==t.state))],filteredTasks=initialTasks.filter((t=>"TASK_INBOX"===t.state||"TASK_PINNED"===t.state));this.tasksInOrder=[...filteredTasks,...initialTasks.filter((t=>"TASK_ARCHIVED"===t.state))],console.log("filtered Tasks",filteredTasks),console.log("Tasks In Orders",this.tasksInOrder)}static#_=this.propDecorators={tasksInOrder:[{type:core.Input}],loading:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}],tasks:[{type:core.Input}]}};PureTaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-pure-task-list",template:'<div class="list-items">\n  <app-task *ngFor="let task of tasksInOrder" [task]="task" (onArchiveTask)="onArchiveTask.emit($event)"\n    (onPinTask)="onPinTask.emit($event)">\n  </app-task>\n  <div *ngIf="!loading && tasksInOrder.length === 0 && !loading" class="" wrapper-message>\n    <span class="icon-check"></span>\n    <p class="title-message">You have no tasks</p>\n    <p class="subtitle-message">Sit back and relax</p>\n  </div>\n  <div *ngIf="loading">\n    <div class="loading-item" *ngFor="let item of [1,2,3,4,5,6]">\n      <span class="glow-checkbox"></span>\n      <span class="glow-text">\n        <span>Loading</span><span>cool</span><span>state</span>\n      </span>\n    </div>\n  </div>\n\n\n</div>\n'})],PureTaskListComponent);const pure_task_list_component=PureTaskListComponent},"./src/app/components/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>task_component});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let RandomIdService=class RandomIdService{getId(){return Math.random().toFixed(10).substring(2)}};RandomIdService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],RandomIdService);let TaskComponent=class TaskComponent{constructor(idGenerator){this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter,this.idStr=idGenerator.getId()}onPin(id){this.onPinTask.emit(id),console.log("pined",id)}onArchive(id){console.log("archived",id,this.onArchiveTask),this.onArchiveTask.emit(id)}static#_=this.ctorParameters=()=>[{type:RandomIdService}];static#_2=this.propDecorators={task:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]}};TaskComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-task",template:'\n    <div class="list-item {{ task?.state }}">\n      <label\n        [attr.aria-label]="\'archiveTask-\' + task?.id"\n        for="checked-{{ task?.id }}-{{idStr}}"\n        class="checkbox"\n      >\n        <input\n          type="checkbox"\n          disabled="true"\n          [defaultChecked]="task?.state === \'TASK_ARCHIVED\'"\n          name="checked-{{ task?.id }}"\n          id="checked-{{ task?.id }}-{{idStr}}"\n        />\n        <span class="checkbox-custom" (click)="onArchive(task?.id)"></span>\n      </label>\n      <label\n        [attr.aria-label]="task?.title + \'\'"\n        for="title-{{ task?.id }}-{{idStr}}"\n        class="title"\n      >\n        <input\n          type="text"\n          [value]="task?.title"\n          readonly="true"\n          id="title-{{ task?.id }}-{{idStr}}"\n          name="title-{{ task?.id }}"\n          placeholder="Input title"\n        />\n      </label>\n\n      <button\n        *ngIf="task?.state !== \'TASK_ARCHIVED\'"\n        class="pin-button"\n        [attr.aria-label]="\'pinTask-\' + task?.id"\n        (click)="onPin(task?.id)"\n      >\n        <span class="icon-star"></span>\n      </button>\n    </div>\n  '})],TaskComponent);const task_component=TaskComponent},"?4f7e":()=>{}}]);