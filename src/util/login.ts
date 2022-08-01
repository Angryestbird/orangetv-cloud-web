import { useLoginStore } from "~/stores/loginStore"

async function requireLogin() {
    var loginStore = useLoginStore()
    var loggedin = await loginStore.queryLogin()
    if (loggedin) {
        return loginStore.userInfo
    }
    var loginPath = '/api/orange/cloud/tv/login'
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    var port = window.location.port;

    var loginEntryPoint = `${protocol}//${hostname}:${port}${loginPath}`
    loginEntryPoint += `?location=${encodeURIComponent(window.location.href)}`
    window.location.href = loginEntryPoint
}
export default requireLogin