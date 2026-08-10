import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from '../../shared/services/scroll-reveal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  formSubmitted = false;
  formSuccess = false;

  constructor(private fb: FormBuilder, private sr: ScrollRevealService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit() { this.sr.init(); }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      this.formSuccess = true;
      this.contactForm.reset();
      this.formSubmitted = false;
      setTimeout(() => this.formSuccess = false, 5000);
    }
  }
}
