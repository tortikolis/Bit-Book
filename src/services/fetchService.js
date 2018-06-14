
export const fetchRequest = {
    get(url) {
        return fetch(url,{
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE' 
            }
        })
        .then((response) => response.json())
        .catch(error => console.error('Error:', error))
    },

    post(url, content){
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
                
            },
            body: JSON.stringify(content)
          }) 
          .then((response) => response.json())
          .catch(error => console.error('Error:', error))
    },

    put(url, formData){
        return fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE' 
            },
            body: formData
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
    },

    delete(url, item){
        return fetch(url + '/' + item, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE' 
            }
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
    }

}