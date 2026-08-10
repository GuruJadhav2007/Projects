import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';
@Component({ selector:'app-refinery-chemicals', standalone:true, imports:[RouterLink,CommonModule],
  templateUrl:'./refinery-chemicals.component.html', styleUrls:['./refinery-chemicals.component.css']
})
export class RefineryChemicalsComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }
  products = [
    { name:'Pour Point Depressant for Fuel', desc:'Polymer additives that interfere with higher hydrocarbon crystallization, modifying crystal structure to lower the pour point of the fuel.' },
    { name:'Pour Point Depressant for Heavy Fuel', desc:'Specialized polymers designed to interfere with higher hydrocarbon crystallization, lowering the pour point of heavy fuel oils for better flow.' },
    { name:'Fuel Oil Emulsifier', desc:'Used to prepare emulsion fuel compounds (water emulsified in heavy oil). Reduces viscosity for lower temperature flow and energy savings in pumping.' },
    { name:'De-Emulsifier Concentrates', desc:'Facilitates economical demulsification of water from water-oil emulsions in refinery operations.' },
    { name:'Deoilers', desc:'Remove or free emulsified oil from separated water in refineries for effective water management.' },
    { name:'PPD for Biodiesel', desc:'Prevents and modifies wax crystallization in biodiesels to ensure trouble-free winter operations, lowering pour point and improving pumpability.' },
    { name:'Antioxidants / Stabilizers', desc:'Terminates free radical chain reactions and prevents oxidation degradation without affecting other fuel properties.' },
    { name:'Corrosion Inhibitors', desc:'Adsorbs on metallic surfaces at temperatures exceeding 210°C, forming a protective film for high-temperature corrosion protection.' },
    { name:'Corrosion Inhibitor and Lubricity Enhancer', desc:'Provides corrosion protection to pipelines, tanks and equipment for gasoline, diesel, ethanol, heating oils and aviation fuels; also enhances lubricity of all finished fuels including jet fuels.' },
    { name:'Cetane Improvers', desc:'Substantially increases diesel cetane number, improving ignition performance and reducing diesel vehicle emissions.' },
    { name:'Lubricity Improvers for Diesel', desc:'Imparts lubricity to diesel lost during desulfurization processes (removal of natural lubricity components with sulfur).' },
    { name:'Octane Boosters', desc:'Improves the octane number of gasoline, allowing higher compression ratios and improved performance in high-compression engines.' },
    { name:'Multi-Functional Additives for Gasoline', desc:'Complete performance package for gasoline meeting challenges of modern Direct Injection Gasoline (DIG) technology while delivering excellence in traditional Port Fuel Injection (PFI) engine platforms.' },
    { name:'Dewaxing Aids', desc:'Used at very low treat rates; interacts with long chain paraffins improving filtration speed and higher oil yield, providing superior low-temperature performance.' },
    { name:'Antifouling Agents', desc:'Prevents coking and scale forming in feedstock heat exchangers, improves heat transfer, and prolongs working cycles of processing units.' },
    { name:'Foam Control Agents / Defoamers / Antifoams', desc:'Used in delayed coking units to inhibit foaming in the coking tower, lowers foam height, improves tower utilization rate and adds to processing capacity.' },
    { name:'Sludge Breakers', desc:'Rapidly dissolves and fluidizes sludge, wax, gum and tar formations while separating water from oil/water emulsions.' },
  ];
}
