const axios = require('axios')

const baseUrl = "https://graph.microsoft.com/v1.0/me/messages"

const top = 1000

// isRead - Whether the email is read or not
// ReceivedDateTime - Received timestamp of the email
// Filters out the emails which are unread and received in the specified timestamp
const filter = "isRead eq false and ReceivedDateTime ge 2018-01-05 and ReceivedDateTime lt 2019-01-05"

const filterForMail = "(from/emailAddress/address) eq 'appygeek.daily@news-republic.com' and ReceivedDateTime ge 2011-01-01 and ReceivedDateTime lt 2021-10-05"

const order = "ReceivedDateTime asc"

const url = `${baseUrl}?$select=subject,isRead,ReceivedDateTime&$top=${top}&$filter=${filter}&$orderBy=${order}`

const urlForMail = `${baseUrl}?$select=subject,isRead,ReceivedDateTime&$top=${top}&$filter=${filterForMail}`


const token = "" // Paste the token here

const headers = {
	headers: {
		Authorization: 'Bearer ' + token
	}
}

const deleteMessage = async (id) => {
	await axios.delete(baseUrl+"/"+id, headers)
}

const cleanupMailBox = async () => {
	while (true) {
		const response = await axios.get(url, headers)

		if (response.data.value.length === 0) {
			break
		}

		for (const data of response.data.value) {
			await deleteMessage(data.id)
			console.log('delete id', data.subject)
		}
	}
	
}

cleanupMailBox().then(() => console.log('Completed..!'))

// const cleanupMailBoxWithFrom = async (fromEmail) => {
// 	const filterForMail = `(from/emailAddress/address) eq '${fromEmail}' and ReceivedDateTime ge 2011-01-01 and ReceivedDateTime lt 2021-10-05`

// 	const urlForMail = `${baseUrl}?$select=subject,isRead,ReceivedDateTime&$top=${top}&$filter=${filterForMail}`

// 	while (true) {
// 		const response = await axios.get(urlForMail, headers)

// 		if (response.data.value.length === 0) {
// 			break
// 		}

// 		for (const data of response.data.value) {
// 			await deleteMessage(data.id)
// 			console.log('delete id', data.subject)
// 		}
// 	}
	
// }

// const fromEmails = [
    
// ]

// const cleanUp = async () => {
// 	for (let i=0; i<fromEmails.length; i += 1) {
// 		console.log('starting...', fromEmails[i])
// 		await cleanupMailBoxWithFrom(fromEmails[i])
// 		await cleanupMailBoxWithFrom(fromEmails[i])
// 		console.log('completed', fromEmails[i])
// 	}
// }


// cleanUp().then(() => console.log('completed fromEmail..!'))