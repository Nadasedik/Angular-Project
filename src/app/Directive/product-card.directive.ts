import { Directive ,ElementRef,Input,HostListener,OnChanges} from '@angular/core';

@Directive({
  selector: '[shadow]'
})
export class ProductCardDirective implements OnChanges{
@Input() BGColor:string="rgba(0,0,0,0.8)"
@Input('shadow') BGColo:string="red"
  constructor(private elemRef:ElementRef) { 
    
    
  }
  ngOnChanges(): void {
    
    this.elemRef.nativeElement.style.boxShadow=` 10px 10px 5px 0px ${this.BGColo}`
    
   // console.log("colerchange")
  }
  @HostListener('mouseover') onMouseOver()
  {
    this.elemRef.nativeElement.style.boxShadow=`7px 2px 7px 7px  ${this.BGColor}`
     
    //console.log("mouseover")

  }
  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.boxShadow="10px 10px 4px 0px rgba(0,0,0,0.4)"
    //console.log("mouseout")

  }

}
