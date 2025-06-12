class UserService {
  constructor(repo) {
    this.repo = repo;
  }

  async create(data) {
    return await this.repo.save(data);
  }
}

module.exports = UserService;
