/*
 Copyright 2017 VMware, Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {DeleteVchModalComponent} from './delete-vch-modal.component';
import {VicVmViewService} from '../services/vm-view.service';
import {CreateVchWizardService} from '../create-vch-wizard/create-vch-wizard.service';
import {ExtendedUserSessionService} from '../services/extended-usersession.service';

const routes: Routes = [
  {path: ':id', component: DeleteVchModalComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DeleteVchModalComponent
  ],
  providers: [
    VicVmViewService,
    CreateVchWizardService,
    ExtendedUserSessionService
  ],
  exports: [
    DeleteVchModalComponent
  ]
})
export class DeleteVchModalModule { }
