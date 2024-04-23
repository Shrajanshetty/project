import { User } from './users.entity';
import { UserService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(user: User): Promise<{
        message: string;
        token?: string;
    }>;
}
