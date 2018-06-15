export class Post {
    constructor( id, dateCreated, userId, userDisplayName, type, commentsNum) {

        this.id = id;
        this.dateCreated = new Date(dateCreated);
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}

export class TextPost extends Post {
    constructor(text, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        super(id, dateCreated, userId, userDisplayName, type, commentsNum);
        this.text = text;
    }
}

export class ImagePost extends Post {
    constructor(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        super(id, dateCreated, userId, userDisplayName, type, commentsNum);
        this.imageUrl = imageUrl;
    }
}

export class VideoPost extends Post {
    constructor(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        super(id, dateCreated, userId, userDisplayName, type, commentsNum);
        this.videoUrl = videoUrl;
    }
}