import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit, AfterViewInit {
  careerForm!: FormGroup;
  formSubmitted = false;
  formSuccess = false;

  values = [
    { icon: '🚀', t: 'Growth Opportunities', d: 'We invest in our employees through continuous learning, mentorship and career advancement programs.' },
    { icon: '🔬', t: 'Innovation-Driven Culture', d: 'Work alongside passionate chemists and engineers shaping the future of specialty chemicals.' },
    { icon: '🌿', t: 'Safety First', d: 'A workplace built on a foundation of high EHS standards and employee wellbeing.' },
    { icon: '🤝', t: 'Collaborative Environment', d: 'A team-oriented culture where every voice is valued and contributions are recognized.' },
  ];

  departments = ['Research & Development', 'Manufacturing & Production', 'Quality Assurance', 'Sales & Marketing', 'Supply Chain & Logistics', 'Regulatory Affairs', 'Human Resources', 'Finance & Accounts'];

  constructor(private fb: FormBuilder, private sr: ScrollRevealService) {}

  ngOnInit() {
    this.careerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      experience: ['', Validators.required],
      message: ['']
    });
  }

  ngAfterViewInit() { this.sr.init(); }

  onSubmit() {
    this.formSubmitted = true;
    if (this.careerForm.valid) {
      this.formSuccess = true;
      this.careerForm.reset();
      this.formSubmitted = false;
      setTimeout(() => this.formSuccess = false, 5000);
    }
  }
}
