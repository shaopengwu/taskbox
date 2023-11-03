"use strict";(self.webpackChunktaskbox=self.webpackChunktaskbox||[]).push([[458],{"./src/app/components/task.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,actionsData:()=>actionsData,default:()=>task_stories});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),task_component=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),__webpack_require__("./src/app/components/task.component.ts"));const actionsData={onPinTask:(0,chunk_KKE3V3AL.aD)("onPinTask"),onArchiveTask:(0,chunk_KKE3V3AL.aD)("onArchiveTask")},task_stories={title:"Task",component:task_component.Z,excludeStories:/.*Data$/,tags:["autodocs"],render:args=>({props:{...args,onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}})},Default={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},Pinned={args:{task:{...Default.args?.task,state:"TASK_PINNED"}}},Archived={args:{task:{...Default.args?.task,state:"TASK_ARCHIVED"}}}},"./src/app/components/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>task_component});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let RandomIdService=class RandomIdService{getId(){return Math.random().toFixed(10).substring(2)}};RandomIdService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],RandomIdService);let TaskComponent=class TaskComponent{constructor(idGenerator){this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter,this.idStr=idGenerator.getId()}onPin(id){this.onPinTask.emit(id),console.log("pined",id)}onArchive(id){console.log("archived",id,this.onArchiveTask),this.onArchiveTask.emit(id)}static#_=this.ctorParameters=()=>[{type:RandomIdService}];static#_2=this.propDecorators={task:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]}};TaskComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-task",template:'\n    <div class="list-item {{ task?.state }}">\n      <label\n        [attr.aria-label]="\'archiveTask-\' + task?.id"\n        for="checked-{{ task?.id }}-{{idStr}}"\n        class="checkbox"\n      >\n        <input\n          type="checkbox"\n          disabled="true"\n          [defaultChecked]="task?.state === \'TASK_ARCHIVED\'"\n          name="checked-{{ task?.id }}"\n          id="checked-{{ task?.id }}-{{idStr}}"\n        />\n        <span class="checkbox-custom" (click)="onArchive(task?.id)"></span>\n      </label>\n      <label\n        [attr.aria-label]="task?.title + \'\'"\n        for="title-{{ task?.id }}-{{idStr}}"\n        class="title"\n      >\n        <input\n          type="text"\n          [value]="task?.title"\n          readonly="true"\n          id="title-{{ task?.id }}-{{idStr}}"\n          name="title-{{ task?.id }}"\n          placeholder="Input title"\n        />\n      </label>\n\n      <button\n        *ngIf="task?.state !== \'TASK_ARCHIVED\'"\n        class="pin-button"\n        [attr.aria-label]="\'pinTask-\' + task?.id"\n        (click)="onPin(task?.id)"\n      >\n        <span class="icon-star"></span>\n      </button>\n    </div>\n  '})],TaskComponent);const task_component=TaskComponent}}]);