import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;
  activeSubDropdown: string | null = null;

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeDropdown = null;
      this.activeSubDropdown = null;
    }
  }

  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
    this.activeSubDropdown = null;
  }

  toggleSubDropdown(name: string) {
    this.activeSubDropdown = this.activeSubDropdown === name ? null : name;
  }

  closeAll() {
    this.activeDropdown = null;
    this.activeSubDropdown = null;
    this.isMobileMenuOpen = false;
  }
}
