export interface IUserContext {
    loginUser: (email: string, password: string) => Promise<any>
}