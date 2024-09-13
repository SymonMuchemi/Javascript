// Write a JavaScript function to parse an URL.
function parseURL(url) {
    try {
      let parsedURL = new URL(url);
  
      return {
        href: parsedURL.href,          // full URL
        protocol: parsedURL.protocol,  // protocol (http:, https:)
        hostname: parsedURL.hostname,  // domain (example.com)
        port: parsedURL.port,          // port (if any)
        pathname: parsedURL.pathname,  // path (/path/to/page)
        search: parsedURL.search,      // query string (?id=123)
        hash: parsedURL.hash,          // fragment identifier (#section)
        host: parsedURL.host,          // hostname and port (example.com:80)
        origin: parsedURL.origin,      // origin (protocol + host)
        searchParams: parsedURL.searchParams // URLSearchParams object for query string
      };
    } catch (e) {
      console.error('Invalid URL:', e);
      return null;
    }
  }
  
  // Example usage:
  const url = 'https://www.example.com:8080/path/to/page?name=Simon&id=123#section1';
  console.log(parseURL(url));
  