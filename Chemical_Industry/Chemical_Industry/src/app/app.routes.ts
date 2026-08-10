import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'overview/vision-mission',
    loadComponent: () => import('./pages/vision-mission/vision-mission.component').then(m => m.VisionMissionComponent)
  },
  {
    path: 'overview/business-history',
    loadComponent: () => import('./pages/business-history/business-history.component').then(m => m.BusinessHistoryComponent)
  },
  {
    path: 'overview/qhse',
    loadComponent: () => import('./pages/qhse/qhse.component').then(m => m.QhseComponent)
  },
  {
    path: 'overview/infrastructure',
    loadComponent: () => import('./pages/infrastructure/infrastructure.component').then(m => m.InfrastructureComponent)
  },
  {
    path: 'overview/csr',
    loadComponent: () => import('./pages/csr/csr.component').then(m => m.CsrComponent)
  },
  {
    path: 'industries/drilling-chemicals',
    loadComponent: () => import('./pages/drilling-chemicals/drilling-chemicals.component').then(m => m.DrillingChemicalsComponent)
  },
  {
    path: 'industries/production-chemicals',
    loadComponent: () => import('./pages/production-chemicals/production-chemicals.component').then(m => m.ProductionChemicalsComponent)
  },
  {
    path: 'industries/refinery-chemicals',
    loadComponent: () => import('./pages/refinery-chemicals/refinery-chemicals.component').then(m => m.RefineryChemicalsComponent)
  },
  {
    path: 'industries/lubricant-chemicals',
    loadComponent: () => import('./pages/lubricant-chemicals/lubricant-chemicals.component').then(m => m.LubricantChemicalsComponent)
  },
  {
    path: 'industries/refinery-fuel-additives',
    loadComponent: () => import('./pages/refinery-fuel-additives/refinery-fuel-additives.component').then(m => m.RefineryFuelAdditivesComponent)
  },
  {
    path: 'industries/terminal-cargo',
    loadComponent: () => import('./pages/terminal-cargo/terminal-cargo.component').then(m => m.TerminalCargoComponent)
  },
  {
    path: 'industries/speciality-chemicals',
    loadComponent: () => import('./pages/speciality-chemicals/speciality-chemicals.component').then(m => m.SpecialityChemicalsComponent)
  },
  {
    path: 'industries/water-treatment',
    loadComponent: () => import('./pages/water-treatment/water-treatment.component').then(m => m.WaterTreatmentComponent)
  },
  {
    path: 'industries/custom-manufacturing',
    loadComponent: () => import('./pages/custom-manufacturing/custom-manufacturing.component').then(m => m.CustomManufacturingComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];
