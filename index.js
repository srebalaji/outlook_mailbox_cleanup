const axios = require('axios')

const baseUrl = "https://graph.microsoft.com/v1.0/me/messages"

const top = 1000

// isRead - Whether the email is read or not
// ReceivedDateTime - Received timestamp of the email
// Filters out the emails which are unread and received in the specified timestamp
const filter = "isRead eq false and ReceivedDateTime ge 2014-01-05 and ReceivedDateTime lt 2016-01-05"
const order = "ReceivedDateTime asc"

const url = `${baseUrl}?$select=subject,isRead,ReceivedDateTime&$top=${top}&$filter=${filter}&$orderBy=${order}`
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
