import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class TitleService {

  constructor(private ts: Title, private route: ActivatedRoute,
    private uas: UserAuthService) {}

  public setAppTitle(title: string): void {
    this.ts.setTitle(title+ " | " + this.uas.defaultTitle);
  }
}