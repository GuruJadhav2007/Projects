import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-lubricant-chemicals', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./lubricant-chemicals.component.html', styleUrls:['./lubricant-chemicals.component.css']
})
export class LubricantChemicalsComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  products = [
    { name:'Viscosity Index Improvers (VII)', desc:'Polymer-based additives that minimize the change in viscosity of lubricants with temperature variation, maintaining optimal film strength across operating ranges.' },
    { name:'Pour Point Depressants for Lubricants', desc:'Polymers that modify wax crystal growth in base oils, lowering the pour point and ensuring proper flow of lubricants at low temperatures.' },
    { name:'Antioxidants for Lubricants', desc:'Inhibit oxidative degradation of lubricating oils, extending oil life and protecting metal surfaces from corrosive wear.' },
    { name:'Anti-Wear Additives', desc:'Provide a protective film on metal surfaces at low-to-moderate pressures, reducing friction and wear to extend equipment life.' },
    { name:'Extreme Pressure (EP) Additives', desc:'React with metal surfaces under high-pressure conditions to form a protective film, preventing metal-to-metal contact and catastrophic wear.' },
    { name:'Corrosion Inhibitors for Lubricants', desc:'Adsorb on metal surfaces to prevent corrosion and rust in lubricating systems, protecting ferrous and non-ferrous metals.' },
    { name:'Detergent / Dispersant Additives', desc:'Keep engine parts and lubrication systems clean by neutralizing acids and dispersing soot, varnish and sludge deposits.' },
    { name:'Friction Modifiers', desc:'Reduce boundary friction between metal surfaces, improving fuel economy and reducing operating temperatures.' },
    { name:'Emulsifiers for Metal Working Fluids', desc:'Provide stable oil-in-water emulsions for metal working applications, balancing lubrication, cooling and rust protection.' },
    { name:'Foam Inhibitors for Lubricants', desc:'Reduce surface tension of lubricating oils to control foam formation, ensuring consistent oil performance and system protection.' },
  ];
}
