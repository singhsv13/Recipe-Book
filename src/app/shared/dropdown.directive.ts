import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector : '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    constructor(private elRef : ElementRef){}
    
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}