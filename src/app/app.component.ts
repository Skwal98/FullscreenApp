import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public get isFullScreen(): boolean {
    return window.innerHeight == screen.height;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    fromEvent(window, 'resize').subscribe(() => {
      this._cd.detectChanges();
    });
  }

  openFullScreen() {
    this.document.documentElement.requestFullscreen();
  }
}
