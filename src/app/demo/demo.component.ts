import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  @Input('titleMessage') titleMessage = 'Title';
  @Output('customEvent') customEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  onButtonClicked() {
    this.customEvent.emit('emitting string')
  }
}
