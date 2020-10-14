import { createInput } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input('alertMessage') alertMessage = 'Message';

  constructor() { }

  ngOnInit(): void {
  }

  demoClick() {
    alert(this.alertMessage)
  }
}
