import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async loginUser(@Body('email') email: string, @Body('password') password: string) {
        return this.authService.authenticateUser(email, password);
    }
}
