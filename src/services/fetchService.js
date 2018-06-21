const sessionId = localStorage.getItem("sessionId")

export const fetchService = {
    get(url) {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': sessionId || '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        })
            .then((response) => response.json())
            .catch(error => console.error('Error:', error))
    },

    post(url, content) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': sessionId || '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'

            },
            body: JSON.stringify(content)
        })
            .then((response) => response.json())
            .catch((error) => console.error('error', error));
    },

    upload(url, content) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Key': 'bitbookdev',
                'SessionId': sessionId || '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
                
            },
            body: content
        })
            .then((response) => response.json())
            .catch(error => console.error('Error:', error))
    },

    put(url, formData) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': sessionId || '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response)
            .catch(error => console.error('Error:', error))
    },

    delete(url, id) {
        return fetch(url + '/' + id, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': sessionId || '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
    }

}