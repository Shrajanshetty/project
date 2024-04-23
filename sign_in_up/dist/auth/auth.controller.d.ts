import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    gethome(): {
        message: string;
    };
    getmutualfund(): {
        info: string;
    };
    getblog(): {
        data: string;
    };
    getapi(): {
        api: string;
    };
}
