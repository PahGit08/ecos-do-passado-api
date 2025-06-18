class UserService {
  constructor(repo) {
    this.repo = repo;
  }

  async create(data) {
    return await this.repo.save(data);
  }

  async getUserByEmailAndPassword(email, password) {
    return await this.repo.findOne({
      where: {
        email, password
      }
    })
  }
}

module.exports = UserService;
