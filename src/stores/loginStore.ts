import { defineStore } from "pinia";

export interface UserInfo {
    sub: string;
}

export const useLoginStore = defineStore('loginStore', {
    state: () => {
        return {
            loggedIn: false,
            userInfo: <UserInfo>{}
        }
    },
    actions: {
        async queryLogin() {
            try {
                var response = await fetch(
                    '/api/AUTH-SERVER/userinfo', {
                    redirect: 'error'
                })
                this.userInfo = await response.json()
                this.loggedIn = true
            } catch (error) {
                this.loggedIn = false
            }
            return this.loggedIn
        }
    }
})