class UserModel {
  constructor({
    _id,
    firstName,
    lastName,
    username,
    cover,
    email,
    password,
    type,
    isDisabled,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.cover = cover;
    this.email = email;
    this.password = password;
    this.type = type;
    this.isDisabled = isDisabled;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
