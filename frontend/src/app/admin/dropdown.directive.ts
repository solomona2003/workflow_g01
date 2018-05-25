
import { Directive, HostListener, HostBinding, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnDestroy {
  private timer = null;
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') scheduleTimeout() {
    this.cancelTimeout();

    this.timer = setTimeout(() => {
      this.timer = null;
      this.isOpen = false;
    }, 200);
  }

  @HostListener('mouseenter') cancelTimeout() {
    const t = this.timer;
    this.timer = null;

    if (t !== null) {
      clearTimeout(t);
    }

  }

  ngOnDestroy() {
    this.cancelTimeout();
  }

}
