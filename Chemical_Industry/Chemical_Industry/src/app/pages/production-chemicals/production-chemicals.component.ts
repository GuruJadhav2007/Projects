import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-production-chemicals', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./production-chemicals.component.html', styleUrls:['./production-chemicals.component.css']
})
export class ProductionChemicalsComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  products = [
    { name:'H2S Scavenger', desc:'Non-triazine based product for irreversible reaction with H2S, preventing release and reducing corrosion. Designed for wellhead, infield or transmission line injection.' },
    { name:'H2S Scavenger with Scale Inhibitor', desc:'Combined H2S scavenging with scale inhibition. Prompt reaction with hydrogen sulfide, effective at low dosage rates, controls scaling without negative impact on downstream operations.' },
    { name:'Corrosion Inhibitors', desc:'Adsorbs on metallic surfaces, protecting by forming a film barrier that provides reliable corrosion protection at the surface level.' },
    { name:'Foam Control Agents / Defoamers / Antifoams', desc:'Surfactant-based foam control that spreads over gas/liquid interfaces, preventing foam-forming materials from surfacing and providing stable non-foaming layers.' },
    { name:'Pour Point Depressant / Crude Oil Flow Improvers', desc:'Polymers that interfere with wax crystallization, modifying crystal structure. Diminishes waxy aggregates ability to inter-lock, resulting in lower pour point of crude oil.' },
    { name:'Paraffin / Wax Dispersants', desc:'Liquid organic surface-active chemicals for crude oil to control paraffin deposition. Oil-soluble and water-dispersible formulation effective in removing and preventing paraffin buildup in production equipment.' },
    { name:'Asphaltene Dispersants', desc:'Substitutes natural resins to prevent asphaltene particles from forming large deposits. Based on polymeric technology with multiple anchoring groups compatible with crude oil.' },
    { name:'Deoilers / Reverse Emulsifiers', desc:'Removes free or emulsified oil from separated water in oil fields, facilitating water treatment and disposal compliance.' },
    { name:'Mutual Solvents', desc:'Prevents emulsion block formation in the invasion zone in an oil well, increasing crude flow from the formation.' },
    { name:'Sludge Breakers', desc:'Rapidly dissolves and fluidizes sludge, wax, gum and tar formations while effectively separating water from oil or water emulsions.' },
    { name:'Deemulsifier Concentrates', desc:'Facilitates demulsification of water from water-in-oil emulsions. Acts by coalescence of water droplets and promotes dropping of water, enabling economical processing.' },
  ];
}
