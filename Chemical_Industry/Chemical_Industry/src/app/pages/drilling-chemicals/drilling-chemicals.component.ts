import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';

@Component({
  selector: 'app-drilling-chemicals',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './drilling-chemicals.component.html',
  styleUrls: ['./drilling-chemicals.component.css']
})
export class DrillingChemicalsComponent implements AfterViewInit {
  constructor(private sr: ScrollRevealService) {}
  ngAfterViewInit() { this.sr.init(); }

  products = [
    { name: 'H2S Scavenger', desc: 'Non-triazine based product that reacts with H2S in an irreversible reaction, preventing its release and reducing corrosion for improved safety. Designed for bubble tower applications and continuous injection into wellhead, infield or transmission lines.' },
    { name: 'H2S Scavenger with Scale Inhibitor', desc: 'Combines excellent H2S scavenging with scale inhibition. Features prompt reaction with hydrogen sulfide, effective at low dosage rates, controls scaling without negative impact on downstream operations.' },
    { name: 'Cloud Point Glycols / Lubricants', desc: 'Low-toxic, versatile cloud point glycols for shale control. Designed for low-to-moderate salinity water systems. Usable in wells with low, moderate and high formation temperature, in isolation or combined with salts and polyamines.' },
    { name: 'Extreme Pressure Lubricants', desc: 'General and special purpose extreme pressure lubricants reducing torque, drag and wall sticking. Ideal for highly deviated well bores where a tough lubricating film is needed between the wall cake and drill string.' },
    { name: 'Foam Control Agents / Defoamers / Antifoams', desc: 'Surfactant-based foam control products that spread over gas/liquid interfaces, preventing foam-forming materials from rising and providing a stable surface layer that will not sustain foam.' },
    { name: 'Polyamine Based Shale Stabilizers', desc: 'Amine-based shale inhibitors formulated to stabilize reactive shales and clays in water-based drilling fluids. Highly effective in inhibiting clay swelling, preventing bit balling and reducing torque and drag.' },
    { name: 'ROP Enhancers', desc: 'Low-toxic versatile ROP enhancers for medium-to-high salinity systems. Provides improved wellbore stability, lubricity, high temperature filtration control, plus reduced dilution rates and bit balling.' },
    { name: 'Drilling Detergents', desc: 'Additives that reduce the surface tension of water-based mud systems and the sticking tendency of water-sensitive formulations.' },
    { name: 'HTHP Fluid Loss Reducing Additives', desc: 'Advanced polymer-based HTHP fluid loss reducing agent for high performance water-based drilling fluid systems. Available in solid and liquid forms. Designed to be stable up to 225°C.' },
    { name: 'Stable Foaming Agent for Drilling Fluids', desc: 'Surface-active products that generate stable micro bubbles in presence of air to develop specific gravity below 0.8. Used in water-based drilling fluids.' },
    { name: 'Surfactant for Spacer Fluids', desc: 'Surfactants used in spacer formulations before cementing oil wells drilled with oil-based muds. Designed to clean up and displace oil/synthetic-based muds and solids for better cementation.' },
    { name: 'Deflocculants / Thinners', desc: 'Anionic acrylic co-polymers for water-based mud systems to control rheological properties and impart high temperature stability.' },
    { name: 'Pipe Freeing Agents', desc: 'Specifically designed to assist in freeing stuck pipes. Lubricates and dehydrates filter cake from water-based fluids, creating cracks in the mud cake to alleviate differentially stuck drill pipes.' },
    { name: 'Wetting Agents', desc: 'Change natural water-wetting characteristics of drilled solids and weighting agents in oil muds to preferentially oil-wetting. Used as supplementary oil mud additive for improving fluid loss and emulsion stability.' },
    { name: 'Emulsifier for Invert Emulsions', desc: 'Provides excellent water-in-oil emulsion especially with high water percentage and high electrolyte concentration. Can be used along with primary and secondary emulsifiers.' },
    { name: 'Emulsifier for Oil Based Mud', desc: 'Available as Primary Emulsifier (for highly stable invert emulsion fluid), Secondary Emulsifier (multi-functional, higher stability with preferential wetting), and standard Emulsifier (good stable emulsification with high tolerance for contaminants).' },
  ];
}
