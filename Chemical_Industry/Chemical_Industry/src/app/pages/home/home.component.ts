import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  inquiryForm!: FormGroup;
  formSubmitted = false;
  formSuccess = false;

  stats = [
    { value: 2012, label: 'Year Founded', suffix: '', prefix: '' },
    { value: 6000, label: 'MT Annual Capacity', suffix: '+', prefix: '' },
    { value: 9, label: 'Industry Segments', suffix: '+', prefix: '' },
    { value: 100, label: 'Products Offered', suffix: '+', prefix: '' },
  ];

  animatedStats = [0, 0, 0, 0];

  industries = [
    { icon: '⚙️', title: 'Drilling Chemicals', desc: 'Advanced additives for enhanced drilling performance and well bore stability.', link: '/industries/drilling-chemicals', color: '#1a3c5e' },
    { icon: '🏭', title: 'Production Chemicals', desc: 'Oilfield chemical solutions engineered to maximise production performance.', link: '/industries/production-chemicals', color: '#2563a8' },
    { icon: '🔬', title: 'Refinery Chemicals', desc: 'Specialty additives for refineries to improve fuel quality and processing.', link: '/industries/refinery-chemicals', color: '#0ea5e9' },
    { icon: '💧', title: 'Lubricant Chemicals', desc: 'High-performance lubricant additives for demanding industrial applications.', link: '/industries/lubricant-chemicals', color: '#10b981' },
    { icon: '⛽', title: 'Fuel Additives', desc: 'Refinery and terminal fuel treatment solutions for optimal performance.', link: '/industries/refinery-fuel-additives', color: '#f59e0b' },
    { icon: '🧪', title: 'Speciality Chemicals', desc: 'Custom polymers and specialty chemicals for diverse industry needs.', link: '/industries/speciality-chemicals', color: '#8b5cf6' },
    { icon: '💦', title: 'Water Treatment', desc: 'Coagulants, flocculants, antiscalants and biocides for water systems.', link: '/industries/water-treatment', color: '#06b6d4' },
    { icon: '🏗️', title: 'Custom Manufacturing', desc: 'Contract R&D and manufacturing tailored to your specifications.', link: '/industries/custom-manufacturing', color: '#ec4899' },
  ];

  strengths = [
    { icon: '🌱', title: 'EHS Commitment', desc: 'High commitment towards Environment, Health and Safety in all operations.' },
    { icon: '💡', title: 'Innovation Culture', desc: 'Vibrant culture of continuous innovation and research-driven development.' },
    { icon: '🔗', title: 'Surfactant Chemistry', desc: 'Strong platform for surfactant-based chemistry with proprietary know-how.' },
    { icon: '👥', title: 'Expert Manpower', desc: 'Trained and dedicated professionals with decades of field experience.' },
    { icon: '🏭', title: 'Scalable Infrastructure', desc: 'Versatile manufacturing setup with 6000+ MT per annum capacity.' },
    { icon: '🚚', title: 'Dynamic Supply Chain', desc: 'Efficient sourcing and logistics for seamless supply chain management.' },
  ];

  timeline = [
    { year: '2012', event: 'Incorporation of Project Private Limited' },
    { year: '2013', event: 'R&D activity started at the Industrial Area' },
    { year: '2014', event: 'First lead molecule from R&D got into commercial scale manufacturing' },
    { year: '2015', event: 'Expansion activity of Project gets started' },
    { year: '2016', event: 'Manufacturing plant commissioned — production capacity 6000 MT per annum' },
    { year: '2017', event: 'SULFANIL — novel non-triazine H2S scavenger — commercialised for petroleum industries' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      product: [''],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.initScrollReveal();
    this.initCounters();
  }

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
  }

  initCounters() {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.stats.forEach((stat, i) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                this.animatedStats[i] = stat.value;
                clearInterval(timer);
              } else {
                this.animatedStats[i] = Math.floor(current);
              }
            }, duration / steps);
          });
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const statsEl = document.querySelector('.stats-section');
    if (statsEl) statsObserver.observe(statsEl);
  }

  onInquirySubmit() {
    this.formSubmitted = true;
    if (this.inquiryForm.valid) {
      this.formSuccess = true;
      this.inquiryForm.reset();
      this.formSubmitted = false;
      setTimeout(() => this.formSuccess = false, 5000);
    }
  }
}
