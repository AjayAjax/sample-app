import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user-data';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

export class UserData implements InMemoryDbService{
    createDb(){
        const users: User[]=[
            {id: 1, name: 'Ram', email: 'ram@gmail.com'},
            {id: 2, name: 'Shyam', email: 'sh@gmail.com'},
            {id: 3, name: 'Mohan', email: 'moh@live.in'},
            {id: 4, name: 'Rohan', email: 'rohan@gmail.com'}
            
        ];

    return {users};
    }
    
}