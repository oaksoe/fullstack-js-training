export interface Auth {
    username: string;	
    password: string;
}

export class User implements Auth {
    public username: string;	
    public password: string;
    public fullName: string;
    public address: string;
}
 
 