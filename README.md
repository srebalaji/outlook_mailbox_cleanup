# Outlook mailbox cleanup
## Deleting older emails in outlook.com using outlook API
---
Deleting older emails in outlook.com in web app has its limitations. You can only delete upto 1025 emails in one go but I had like more than 450k emails in my inbox. And my storage was also running out.

So I was looking for a easy and effective way to cleanup my inbox.

I can't go through each and every email and I was also not sure which emails I have received are also important.

So I thought of writing a small script that deletes the old emails in the given time frame with some additional options.

## What you need
1. Outook Access token
2. Node
3. NPM

## How to run
1. Clone
2. npm i
3. Paste the token in index.js file
4. Review or change the email date range you need to delete
5. Run index.js file

## How to get outlook Access Token
1. Visit https://developer.microsoft.com/en-us/graph/graph-explorer
2. Sign in to Graph explorer
3. Click on 'my mail' under 'Getting started' tab
4. Now Click on Modify Permissions(Preview) tab in the editor
5. You need to give access to 'Mail.read' and 'Mail.ReadWrite'
6. Once you give the consent for both the permissions, go to Access token tab in the editor and copy the access token

<img width="1669" alt="image" src="https://user-images.githubusercontent.com/7547224/152789472-b02b9ce1-2d91-4323-bc81-f6073842a709.png">


## Resources
https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0

https://developer.microsoft.com/en-us/graph/graph-explorer

https://docs.microsoft.com/en-us/graph/search-concept-overview

https://docs.microsoft.com/en-us/graph/api/resources/mail-api-overview?view=graph-rest-1.0

https://docs.microsoft.com/en-us/graph/query-parameters#select-parameter

https://docs.microsoft.com/en-us/graph/api/resources/message?view=graph-rest-1.0
