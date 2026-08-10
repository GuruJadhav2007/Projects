import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({
  selector: 'app-business-history',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './business-history.component.html',
  styleUrls: ['./business-history.component.css']
})
export class BusinessHistoryComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  timeline = [
    { year:'2012', event:'Incorporation of Project Private Limited', detail:'Founded with a vision to be a globally recognized specialty chemicals manufacturer, headquartered at City, State.', icon:'🏢' },
    { year:'2013', event:'R&D Activity Started at the Industrial Area', detail:'Established a dedicated research and development laboratory at the Industrial Area to drive innovation in specialty chemical formulations.', icon:'🔬' },
    { year:'2014', event:'First Commercial Scale Manufacturing', detail:'First lead molecule from R&D successfully transitioned into commercial scale manufacturing — a major milestone validating our innovation model.', icon:'⚗️' },
    { year:'2015', event:'Expansion Activity Initiated', detail:'Expansion of facility infrastructure commenced to increase capacity and meet growing market demand across multiple industries.', icon:'📈' },
    { year:'2016', event:'Manufacturing Plant Commissioned', detail:'Full-scale manufacturing plant commissioned with a production capacity of 6000 MT per annum — GMP standard facility.', icon:'🏭' },
    { year:'2017', event:'SULFANIL — Novel H2S Scavenger Commercialized', detail:'Novel non-triazine based H2S scavenger SULFANIL by Project successfully commercialized and supplies started to various petroleum industries.', icon:'⭐' },
  ];
}
