
export class Comment {
    constructor(id, dataCreated, body, postId, authorName, authorId){
        this.id = id;
        this.dataCreated = dataCreated;
        this.body = body;
        this.postId = postId;
        this.authorName = authorName;
        this.authorId = authorId;
    }
}