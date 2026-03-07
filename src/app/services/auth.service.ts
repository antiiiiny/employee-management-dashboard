import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';
  private readonly ADMIN_KEY = 'currentAdmin';

  // Mock admin credentials
  private readonly VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentAdminSubject = new BehaviorSubject<string | null>(localStorage.getItem(this.ADMIN_KEY) || null);
  public currentAdmin$ = this.currentAdminSubject.asObservable();

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      // Simulate async login delay
      setTimeout(() => {
        if (username === this.VALID_CREDENTIALS.username && 
            password === this.VALID_CREDENTIALS.password) {
          // Generate a simple token
          const token = 'admin_token_' + Date.now();
          localStorage.setItem(this.TOKEN_KEY, token);
          localStorage.setItem(this.ADMIN_KEY, username);
          
          this.isAuthenticatedSubject.next(true);
          this.currentAdminSubject.next(username);
          
          observer.next(true);
          observer.complete();
        } else {
          observer.next(false);
          observer.complete();
        }
      }, 500);
    });
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ADMIN_KEY);
    this.isAuthenticatedSubject.next(false);
    this.currentAdminSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentAdmin(): string | null {
    return localStorage.getItem(this.ADMIN_KEY);
  }
}
