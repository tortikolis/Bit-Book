export class User {
    constructor(id, name, aboutShort, lastPostDate, avatarUrl){
        this.id = id;
        this.name = name;
        this.aboutShort = aboutShort;
        this.lastPostDate = new Date(lastPostDate);
        this.avatarUrl = avatarUrl;
    }
}