class PostModel {
  constructor({ 
    _id,
    user,
    userCover,
    username,
    title,
    cover,
    body,
    description,
    slug,
    keywords,
    views,
    timeShared,
    likes,
    isPublic,
    isDisabled,
    createdAt,
    updatedAt, 
  }) {
    this.id = _id;
    this.user = user;
    this.userCover = userCover;
    this.username = username;
	  this.title = title;
    this.cover = cover;
    this.body = body;
    this.description = description;
    this.slug = slug;
    this.keywords = keywords;
    this.views = views;   
    this.timeShared = timeShared;
    this.likes = likes;
    this.isPublic = isPublic;
    this.isDisabled = isDisabled;    
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;  
  }
}

export default PostModel;
