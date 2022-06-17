export function sendResponse(statusCode, responseBody) {
  return {
    statusCode,
    headers: {
      "Content-type": "application/json",
      "x-xss-protection": "1; mode=block",
      "x-frame-options": "DENY",
      "content-security-policy":
        "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'",
      "x-content-type-options": "nosniff",
      "strict-transport-security":
        "max-age=63072000; includeSubdomains; preload",
    },
    body: JSON.stringify(responseBody),
  };
}
