import { Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthService {
    constructor(private httpService: HttpService) { }

    authenticateUser(email: string, password: string) {
        const body = { email, password };
        return this.httpService.post('http://auth-microservice:3000/login', body);
    }
}
