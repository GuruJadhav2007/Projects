import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-terminal-cargo', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./terminal-cargo.component.html', styleUrls:['./terminal-cargo.component.css']
})
export class TerminalCargoComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  products = [
    { name:'Fuel Corrosion Inhibitors', desc:'Protect storage tanks, marine vessels, and cargo pipelines from corrosion during fuel storage, transfer and transportation.' },
    { name:'Antistatic Additives for Terminals', desc:'Prevent hazardous static charge buildup during high-speed fuel loading and unloading operations at terminals and cargo facilities.' },
    { name:'Cold Flow Improvers for Marine', desc:'Ensure reliable cold flow properties of marine diesel and heavy fuel oil in cold weather conditions for uninterrupted vessel operations.' },
    { name:'Demulsifiers for Terminal Use', desc:'Facilitate rapid water separation from cargo fuel at terminals, ensuring delivered fuel meets water content specifications.' },
    { name:'Biocide for Fuel Storage', desc:'Control microbial growth in fuel storage tanks that can cause corrosion and filter blocking in terminal operations.' },
    { name:'Stability Additives', desc:'Prevent sediment, gum, and sludge formation in bulk fuel storage, maintaining fuel quality over extended storage periods.' },
    { name:'Sludge Dispersants', desc:'Disperse existing sludge and sediment in storage tanks, preventing filter and nozzle blockages during fuel transfer.' },
    { name:'Tank Cleaner Additives', desc:'Specialized formulations for tank cleaning operations, removing residues and preparing tanks for cargo change.' },
  ];
}
