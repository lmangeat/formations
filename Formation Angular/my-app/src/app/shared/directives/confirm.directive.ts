import { Directive, Input, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: '[confirm]'
})
export class ConfirmDirective {
  @Input('confirm') message: string;
  // @Input() onConfirm: Function;
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();

  @HostListener('click')
  onpenDialog() {
    if(window.confirm(this.message)) {
      this.onConfirm.emit();
    }

  }
}
