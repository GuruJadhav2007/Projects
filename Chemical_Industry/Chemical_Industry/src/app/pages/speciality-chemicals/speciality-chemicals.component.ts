import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-speciality-chemicals', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./speciality-chemicals.component.html', styleUrls:['./speciality-chemicals.component.css']
})
export class SpecialityChemicalsComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  products = [
    { name:'Speciality Polymers — Flexible Packaging', desc:'Polyesters developed for flexible packaging applications, offering excellent barrier properties, clarity, and processability for food, pharmaceutical and industrial packaging.' },
    { name:'Speciality Polymers — Coating & Lamination', desc:'Polyesters for coating and lamination applications offering adhesion, flexibility, chemical resistance and compatibility with various substrates.' },
    { name:'Rheology Modifiers / Viscosity Modifiers', desc:'Versatile solution for formulators and paint professionals for contractor-quality paints. Play a significant role in enhancing paint quality — transforming good formulations into great, robust paint products.' },
    { name:'Antistatic Agents', desc:'Reduce static buildup in polymers. Provide positive impact of reducing handling problems during transport and storage, and also reduce dust build-up on finished plastic and polymer parts.' },
    { name:'Polymer Additives — Processing Aids', desc:'Additives that improve the processing of polymers during manufacturing — reducing viscosity, improving flow, and preventing equipment fouling.' },
    { name:'Coupling Agents', desc:'Improve adhesion between polymer matrix and inorganic fillers or reinforcing agents, enhancing mechanical properties of composite materials.' },
  ];
}
