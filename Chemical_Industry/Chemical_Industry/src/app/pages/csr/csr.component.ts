import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-csr', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./csr.component.html', styleUrls:['./csr.component.css']
})
export class CsrComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
}
