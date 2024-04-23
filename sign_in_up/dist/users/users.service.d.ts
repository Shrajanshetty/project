import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByEmailAndPassword(email: string, password: string): Promise<User>;
}
