function FindProxyForURL(url, host) {

    if (
           shExpMatch(host, "*.slack.com")
        || shExpMatch(host, "*.slack-msgs.com")
        || shExpMatch(host, "*.slack-files.com")
        || shExpMatch(host, "*.slack-imgs.com")
        || shExpMatch(host, "*.slack-edge.com")
        || shExpMatch(host, "*.slack-core.com")
        || shExpMatch(host, "*.slack-redir.com")        
    ) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 79.110.22.15:1085; DIRECT";
    }

    return "DIRECT";
}
