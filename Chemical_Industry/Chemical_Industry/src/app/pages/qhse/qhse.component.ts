import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-qhse', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./qhse.component.html', styleUrls:['./qhse.component.css']
})
export class QhseComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
}
