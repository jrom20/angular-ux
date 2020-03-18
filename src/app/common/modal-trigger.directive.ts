import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[ux-modal-trigger]'
})
export class ModalTiggerDirective implements OnInit
{
    private elem: HTMLElement;

    constructor(@Inject(JQ_TOKEN) private $:any, ref: ElementRef) {
        this.elem = ref.nativeElement;
    }

    ngOnInit()
    {
        this.elem.addEventListener('click', e=>{
            this.$('#ux-modal').modal({});
        });
    }
}