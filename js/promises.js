"use strict"

const gitUserName = username => {
fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": GITHUB_APPID}}).then(res => {
    console.log(res)
    return res.json()
}).then (res => {
    console.log (res[0].created_at);
})
}
gitUserName("consuellamoore123");