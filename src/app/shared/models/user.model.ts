export interface UserModel {
    id?: number;
    name: string;
    username: string;
    email: string;
    phone?: string;
    website?: string;
    address: {
        street?: string;
        suite?: string;
        city: string;
        zipcode?: string;
        geo: {
            lat?: string;
            lng?: string;
        }
    };
    company: {
        name: string;
        catchPhrase?: string;
        bs?: string;
    }
}

export interface UserTableModel {
    name: string,
    username: string,
    email: string,
    companyName: string,
    city: string,
    todosCount: string,
}

