require('dotenv').config()
const express = require('express')
// import express from express<<
const app = express()
const port = process.env.PORT
const githubData = {
    "login": "Sajid6706",
    "id": 193624985,
    "node_id": "U_kgDOC4p7mQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/193624985?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sajid6706",
    "html_url": "https://github.com/Sajid6706",
    "followers_url": "https://api.github.com/users/Sajid6706/followers",
    "following_url": "https://api.github.com/users/Sajid6706/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sajid6706/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sajid6706/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sajid6706/subscriptions",
    "organizations_url": "https://api.github.com/users/Sajid6706/orgs",
    "repos_url": "https://api.github.com/users/Sajid6706/repos",
    "events_url": "https://api.github.com/users/Sajid6706/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sajid6706/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sajid Ahmad",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2025-01-03T16:31:11Z",
    "updated_at": "2026-04-20T13:00:07Z"
}
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send("hello sajid")
})
app.get('/login', (req, res) => {
    res.send('<h1>login page </h1>')
})
app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Sajid</h2>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
