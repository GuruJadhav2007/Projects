import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-refinery-fuel-additives', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./refinery-fuel-additives.component.html', styleUrls:['./refinery-fuel-additives.component.css']
})
export class RefineryFuelAdditivesComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  products = [
    { name:'Cetane Improvers', desc:'Substantially increases diesel cetane number, improving ignition quality and combustion efficiency while reducing engine emissions.' },
    { name:'Octane Boosters', desc:'Enhances the octane rating of gasoline, allowing higher engine compression ratios for improved power output and performance.' },
    { name:'Lubricity Improvers', desc:'Restores lubricity to low-sulfur and ultra-low-sulfur diesel fuels, protecting fuel injection equipment and reducing friction-related wear.' },
    { name:'Antioxidants for Fuels', desc:'Prevent oxidative degradation and gum/sediment formation in fuels during storage and distribution, extending fuel stability.' },
    { name:'Fuel Stabilizers', desc:'Maintain fuel quality during extended storage periods, preventing colour degradation, sediment formation, and viscosity changes.' },
    { name:'Corrosion Inhibitors for Fuels', desc:'Protect metal surfaces in fuel storage tanks, pipelines and distribution systems from corrosion by fuel and water.' },
    { name:'Antistatic Additives', desc:'Reduce static electricity buildup in hydrocarbon fuels during high-speed transfer, improving safety in storage and pipeline operations.' },
    { name:'Drag Reducers', desc:'Polymeric additives that reduce turbulent flow resistance in pipelines, increasing throughput capacity without additional pumping energy.' },
    { name:'Demulsifiers for Fuel', desc:'Facilitate rapid separation of water from fuel emulsions in refinery storage and processing operations.' },
    { name:'Cold Flow Improvers', desc:'Modify wax crystal growth in diesel fuels to improve low-temperature operability, CFPP and pour point values.' },
  ];
}
