const getHeaders = () => {
  const sessionId = localStorage.getItem("sessionId");

  const headers = {
    "Content-Type": "application/json",
    Key: "bitbookdev"
  };

  if (sessionId) {
    headers["sessionId"] = sessionId;
  }

  return headers;
};

const getUploadHeaders = () => {
  const sessionId = localStorage.getItem("sessionId");

  const headers = {
    Key: "bitbookdev"
  };

  if (sessionId) {
    headers["sessionId"] = sessionId;
  }

  return headers;
};

export const fetchService = {
  get(url) {
    return fetch(url, {
      headers: getHeaders()
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error));
  },

  post(url, content) {
    return fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(content)
    })
      .then(response => response.json())
      .catch(error => console.error("error", error));
  },

  upload(url, content) {
    return fetch(url, {
      method: "POST",
      headers: getUploadHeaders(),
      body: content
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error));
  },

  put(url, formData) {
    return fetch(url, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(formData)
    })
      .then(response => response)
      .catch(error => console.error("Error:", error));
  },

  delete(url, id) {
    return fetch(url + "/" + id, {
      method: "delete",
      headers: getHeaders()
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error));
  }
};
