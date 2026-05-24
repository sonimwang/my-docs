# Gitee API Quick Start Guide

## Introduction

This guide teaches you how to call your first API using Gitee (Chinese GitHub) as an example.
By the end, you will know how to send a GET request and read the JSON response.

## Prerequisites

- A Gitee account (register at gitee.com if you don't have one)
- Postman installed on your computer

## Step 1: Get Your Access Token

1. Log in to gitee.com
2. Click your avatar (top right) → Settings → Private Tokens
3. Click "Generate New Token"
4. Check the box for `user_info`
5. Click "Submit" and copy the token string
6. Save it somewhere safe — you'll use it in Step 2 
## Step 2: Send Your First GET Request

A GET request asks the server "give me data." You send it, it returns JSON.

1. Open Postman
2. Click the `+` tab to create a new request
3. Set the method to `GET` (the dropdown on the left of the URL bar)
4. Paste this URL into the URL bar:

https://gitee.com/api/v5/user



5. Click the `Params` button below the URL bar
6. In the key-value table, type:

| Key | Value |
|-----|-------|
| access_token | (paste your token from Step 1) |

7. Click the blue `Send` button
8. Look at the bottom panel — this is the **response**

If you see a long block of text with your username, avatar URL, and other info, it worked.
If you see `{"message": "401 Unauthorized"}`, your token is wrong or missing.
## Step 3: Read the JSON Response

The response you see is JSON — a data format that looks like a Python dictionary.

Here is a real example response (shortened):

```json
{
  "id": 12345678,
  "login": "your-username",
  "name": "Your Name",
  "avatar_url": "https://...",
  "email": "your-email@example.com",
  "public_repos": 3,
  "followers": 5,
  "following": 10,
  "created_at": "2026-05-12T10:00:00+08:00"
}
```
What each field means:

Field	Type	Meaning
id	integer	Your unique user ID on Gitee
login	string	Your Gitee username
name	string	Your display name
avatar_url	string	Link to your profile picture
email	string	Your registered email
public_repos	integer	How many public repos you have
followers	integer	How many people follow you
following	integer	How many people you follow
created_at	string	When you registered (ISO 8601 format)
Key things to notice:

The whole thing is wrapped in { } — this is a JSON object, same as a Python dict
Each line is "key": value — a field name and its data
Strings use double quotes "...", numbers don't need quotes
Fields are separated by commas
## Step 4: Common Status Codes

Every API response comes with a status code — a 3-digit number that tells you what happened.

| Code | Meaning | What to do |
|------|---------|------------|
| **200** | OK | The request worked. Look at the returned data. |
| **201** | Created | Your POST request created something new. |
| **401** | Unauthorized | Your token is missing or wrong. Check Step 1. |
| **404** | Not Found | The URL is wrong. Double-check your spelling. |
| **500** | Server Error | Not your fault — the server crashed. Try again later. |

**How to check the status code in Postman:**

Look at the top-right area of the response panel. You'll see a colored badge with a number — e.g., `200 OK` (green) or `401 Unauthorized` (red).

---

## What's Next

Now that you can call one API and read its response, try this:

- Change the URL to `https://gitee.com/api/v5/users/sonimwang/repos`
- Hit Send
- Read the response — it returns a list of your repositories

This is the foundation of reading any API documentation. Every API works the same pattern:
1. Read the docs to find the URL
2. Send a request (GET to read, POST to create)
3. Read the JSON response

You just did all three.