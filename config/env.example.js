// Example environment configuration
// WARNING: This file contains realistic-looking secrets for TESTING

module.exports = {
    // AWS Configuration - realistic format but fake values
    aws_access_key_id: "AKIAYOURFAKEKEY12345",
    aws_secret_access_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYFAKESECRET",
    
    // GitHub Personal Access Token - realistic format
    github_token: "ghp_ReallyLooksLikeTokenABCDEF1234567890XYZ",
    
    // Slack Webhook - will definitely be detected
    slack_webhook: "https://hooks.slack.com/services/T1234567890/B1234567890/1234567890abcdefghijklmno",
    
    // Generic API Key - high entropy
    api_key: "sk_live_51H7qF8KfZw9x3Y2pQrStUvWxYz1234567890ABCDEFGH",
    
    // Database password - will be detected
    database_url: "postgresql://admin:SuperSecret123Pass@db.example.com:5432/production",
    
    // Private SSH Key - will definitely be detected
    ssh_private_key: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnopqrstuvwxyz
-----END RSA PRIVATE KEY-----`,
    
    // JWT Secret with high entropy
    jwt_secret: "8f7d9c6b5a4e3d2c1b0a9f8e7d6c5b4a3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8",
    
    // Stripe Secret Key (this one worked!)
    stripe_secret_key: "sk_live_51HreallyLooksLegitABCDEF1234567890",
    
    // SendGrid API Key
    sendgrid_api_key: "SG.ReallyLooksLikeValidKey1234567890.ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
    
    // Twilio credentials
    twilio_account_sid: "ACa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    twilio_auth_token: "1234567890abcdef1234567890abcdef"
};