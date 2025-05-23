///
/// Copyright © 2016-2025 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tb-link-expired',
  templateUrl: './link-expired.component.html',
  styleUrls: ['./link-expired.component.scss']
})
export class LinkExpiredComponent extends PageComponent {

  isPasswordLinkExpired: boolean;
  title: string;
  message: string;

  constructor(protected store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router) {
    super(store);
    this.isPasswordLinkExpired = this.route.snapshot.data.passwordLinkExpired;
    this.title = this.isPasswordLinkExpired ? 'login.reset-password-link-expired' : 'login.activation-link-expired';
    this.message = this.isPasswordLinkExpired ? 'login.reset-password-link-expired-message' :
      'login.activation-link-expired-message';
  }

  navigateToLoginPage() {
    this.router.navigateByUrl('login');
  }
}
