import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthData } from './dto/auth.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  authenticate(data: AuthData): Observable<AxiosResponse> {
    return this.httpService.post('http://172.21.16.1:3000/auth/login', data);
  }
}