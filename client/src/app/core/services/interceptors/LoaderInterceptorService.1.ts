import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { AuthfakeauthenticationService } from '../authfake.service';


@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  constructor(private loaderService: AuthfakeauthenticationService) { }
    private apiUrl: 'http://localhost:8085'
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = this.loaderService.currentUserValue;
    const isLoggedIn = user && user.accessToken;
    const isApiUrl = req.url.startsWith(this.apiUrl);
    if (isLoggedIn && isApiUrl) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${user.accessToken}`
            }
        });
    }

    return next.handle(req);
}
}
