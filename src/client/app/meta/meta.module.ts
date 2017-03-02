import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaComponent } from './meta.component';
import { SharedModule } from '../shared/shared.module';
import { GithubUsersService } from '../shared/services/github-users.service';

/**
 * Module for displaying people and search results
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [MetaComponent],
  exports: [MetaComponent],
  providers: [GithubUsersService]
})
export class MetaModule { }
