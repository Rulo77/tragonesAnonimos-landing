import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {

  currentFragment: string | null = null;
  currentPath: string = '';

  private router = inject(Router);
  private location = inject(Location);

  isMenuOpen = false;
  isScrolled = false;
  isContactoVisible = false;


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll suave al top
      const fragment = this.router.parseUrl(this.router.url).fragment;
      const urlTree = this.router.parseUrl(this.router.url);
      this.currentFragment = fragment;
      this.currentPath = urlTree.root.children['primary']?.segments.map(s => s.path).join('/') || '';

      window.scrollTo({ top: 0, behavior: 'smooth' });

    });
  }

  ngAfterViewInit(): void {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      const observer = new IntersectionObserver(
        (entries) => {
          this.isContactoVisible = entries[0].isIntersecting;
        },
        {
          threshold: 0.5, // al menos 50% del footer visible
        }
      );
      observer.observe(contacto);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  isActive(route: string): boolean {
    return this.currentPath === route && !this.isContactoVisible;
  }

  navigateTo(route: string, fragment?: string): void {
    this.router.navigate([route], { fragment: fragment });
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isActiveInicio(): boolean {
    return this.currentPath === '' && !this.currentFragment;
  }


  navigateToContacto(): void {
    this.location.replaceState(this.router.url.split('#')[0] + '#contacto');
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }
}
