import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
})
export class childComponent implements OnInit {
  // @Input() child: string = '';
  @Output() child = new EventEmitter<string>();

  @ViewChild('name') name: ElementRef;

  ngOnInit() {}

  viewchild() {
    console.log(this.name.nativeElement.value);
  }

  addString(value: string) {
    this.child.emit(value);
  }
  constructor() {}
}
