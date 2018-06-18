export class Profile {
    constructor(userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.aboutShort = aboutShort;
        this.about = about;
        this.avatarUrl = avatarUrl? avatarUrl : "https://varme-center.se/wp-content/uploads/2016/06/omdome.png";
        this.postsCount = postsCount;
        this.commentsCount = commentsCount;
    }
}