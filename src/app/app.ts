import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // 1) Check for demo query parameter in current URL
    const urlParams = new URLSearchParams(window.location.search);
    let demoPath = urlParams.get('demo');
    
    // 2) If not found, check document.referrer (e.g., StackBlitz editor URL)
    if (!demoPath) {
      const ref = document.referrer;
      console.log('referrer', ref);
      if (ref) {
        try {
          const refUrl = new URL(ref);
          demoPath = refUrl.searchParams.get('demo');
        } catch {
          // Invalid referrer URL, ignore
        }
      }
    }
    
    if (demoPath) {
      // Decode URL-encoded path (handles %2F -> /)
      let path = decodeURIComponent(demoPath);
      
      // Ensure the path starts with /
      if (!path.startsWith('/')) {
        path = `/${path}`;
      }
      
      // Navigate to the demo path without query parameters
      this.router.navigateByUrl(path, { replaceUrl: true });
    }
  }
}
