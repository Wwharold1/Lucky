import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {

    regexStr: string = '^[0-9]*$';
    //Para validar que sea flotante enviaremos estos 2 parametros
    @Input() isFloat: boolean = false
    @Input() number
    constructor(private el: ElementRef) { }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let elValue = this.el.nativeElement.value
        let e = <KeyboardEvent>event;
        if(Number(elValue) == 0 && e.keyCode == 37) return e.preventDefault()
        if (!this.isFloat && [190, 110].indexOf(event.key) != -1) return e.preventDefault()
        //Valida que sea punto flotante
        if (this.isFloat && [190, 110].indexOf(event.key) != -1) {
            if (this.number && String(this.number).indexOf(".") > 0
                || !this.number) return e.preventDefault()
        }
        if ([46, 8, 9, 27, 13, 190].indexOf(e.keyCode) !== -1 ||
            //Allow: Numeric KeyBoard
            [96, 97, 98, 99, 100, 101, 102, 103, 104, 105].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        let ch = String.fromCharCode(e.keyCode);
        let regEx = new RegExp(this.regexStr);
        if (regEx.test(ch)) return;
        else e.preventDefault();
    }
}