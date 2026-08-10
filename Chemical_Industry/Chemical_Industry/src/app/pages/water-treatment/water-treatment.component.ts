import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-water-treatment', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./water-treatment.component.html', styleUrls:['./water-treatment.component.css']
})
export class WaterTreatmentComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  products = [
    { name:'Coagulants', desc:'Destabilize suspended particles in water by neutralizing electric charges, allowing fine particles to clump together for easier removal during treatment.' },
    { name:'Flocculants', desc:'High molecular weight polymers that bridge destabilized particles into larger flocs, accelerating settling and improving clarification efficiency.' },
    { name:'Antiscalants', desc:'Prevent scale formation in water systems by interfering with crystal growth of mineral salts such as calcium carbonate and calcium sulfate.' },
    { name:'Biocides', desc:'Control microbial growth, algae, and biofilm formation in cooling towers, water treatment systems, and industrial water circuits.' },
    { name:'Corrosion Inhibitors for Water Systems', desc:'Protect metal surfaces in cooling towers, boilers and pipelines from corrosion caused by dissolved oxygen and aggressive water chemistry.' },
    { name:'Defoamers for Water Treatment', desc:'Control and eliminate foam in wastewater treatment processes, aeration tanks and effluent treatment plants.' },
    { name:'pH Adjusters / Neutralizers', desc:'Adjust and stabilize pH levels in water treatment processes to optimal ranges for chemical treatment efficiency.' },
    { name:'Sludge Conditioners', desc:'Improve dewatering characteristics of sludge in wastewater treatment, reducing sludge volume and disposal costs.' },
    { name:'Reverse Osmosis (RO) Membrane Cleaners', desc:'Specialized cleaning chemicals for RO membrane systems, removing fouling and scaling to restore membrane performance.' },
    { name:'Boiler Water Treatment Chemicals', desc:'Comprehensive treatment program for boiler feed water including oxygen scavengers, scale inhibitors and condensate corrosion inhibitors.' },
    { name:'Cooling Water Treatment Chemicals', desc:'Multi-functional treatment formulations for cooling water systems addressing scale, corrosion, and microbiological control simultaneously.' },
  ];
}
