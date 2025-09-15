import { Component } from '@angular/core';
import { UiShell } from './ui-shell/ui-shell';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UiShell],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'Desire AI Project';
}
