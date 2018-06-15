export class Post {
    constructor(videoUrl ,imageUrl ,text ,id, dateCreated, userId, userDisplayName, type, commentsNum){
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
        this.text= text
        this.id = id;
        this.dateCreated = new Date(dateCreated);
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}