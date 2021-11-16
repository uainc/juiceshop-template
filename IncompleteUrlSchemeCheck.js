function sanitizeUrl(url) {
    let u = decodeURI(url).trim().toLowerCase();
    // BAD
    if (u.startsWith("javascript:"))
    
      // GOOD
    // if (u.startsWith("javascript:") || u.startsWith("data:") || u.startsWith("vbscript:"))
        return "about:blank";
    return url;
}
