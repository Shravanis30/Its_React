import { Client, Account, ID } from "appwrite";
import conf from '../conf.js'

export class AuthServices {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }


    // async await is used here bcoz if this task is not completed it wont go ahead
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call another method
                return this.login({email, password})
            }
            else {
                return userAccount
            }
        } catch (error) {
            return error; // here error can be thorwn automatically
        }
    }


    async login({email, password}) {
        try {
           return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            return error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }


    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);

        }
    }


}


const authServices = new AuthServices();

export default authServices