import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-custom-manufacturing', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./custom-manufacturing.component.html', styleUrls:['./custom-manufacturing.component.css']
})
export class CustomManufacturingComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  capabilities = [
    { icon:'🔬', t:'Contract R&D', d:'Custom research and development services to formulate application-specific chemical solutions tailored to your exact requirements.' },
    { icon:'⚗️', t:'Pilot Scale Trials', d:'Pilot plant facilities to validate formulations and processes before committing to full commercial-scale production.' },
    { icon:'🏭', t:'Commercial Manufacturing', d:'Full-scale GMP manufacturing capacity of 6000+ MT per annum to produce your custom chemical at commercial volumes.' },
    { icon:'📋', t:'Regulatory Support', d:'Dedicated Regulatory Affairs team to assist with compliance documentation, MSDS preparation, and global regulatory requirements.' },
    { icon:'🤝', t:'Confidentiality & IP Protection', d:'Strict confidentiality agreements and IP protection protocols to safeguard your proprietary formulations and processes.' },
    { icon:'🚚', t:'Supply Chain Management', d:'End-to-end supply chain support including raw material sourcing, logistics and timely delivery of finished products.' },
  ];
  process = [
    { step:'01', t:'Consultation', d:'We understand your specific requirements, application challenges and target specifications.' },
    { step:'02', t:'R&D & Formulation', d:'Our chemists develop and test formulations in our laboratory to meet your performance criteria.' },
    { step:'03', t:'Pilot Trial', d:'Validated formulations are scaled up through pilot trials to ensure manufacturing feasibility.' },
    { step:'04', t:'Commercial Production', d:'Approved formulations move to full-scale GMP manufacturing for consistent, quality production.' },
    { step:'05', t:'Quality Assurance', d:'Rigorous QC testing ensures every batch meets your specifications before dispatch.' },
  ];
}
