import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-logo',
  templateUrl: './menu-bar-logo.component.html',
  styleUrls: ['./menu-bar-logo.component.css']
})
export class MenuBarLogoComponent {

  @Input()
  logo: string = ''
  @Input()
  linkLogo: string = ''

}
