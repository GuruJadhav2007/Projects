import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-infrastructure', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./infrastructure.component.html', styleUrls:['./infrastructure.component.css']
})
export class InfrastructureComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
}
