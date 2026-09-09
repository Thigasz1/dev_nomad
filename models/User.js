export class User {
    constructure(uid, displayName, email, password, created, updated, emailVerified, phoneNumber, photoUrl, disabled) {
        this.uid = uid
        this.displayNameame = displayName || ''
        this.email = email
        this.password = password
        this.emailVerified = emailVerified || false
        this.phoneNumber = phoneNumber || ''
        this.photoUrl = photoUrl || ''
        this.disabled = disabled || false
        this.created = created || new Date()
        this.updated = updated || new Date()
    }
}
