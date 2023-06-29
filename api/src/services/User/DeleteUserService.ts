import IUserPersistence from "../../persistence/User/IUserPersistence";

export default class DeleteUserService {
  private pacientePersistence: IUserPersistence;
  constructor(pacientePersistence: IUserPersistence) {
    this.pacientePersistence = pacientePersistence;
  }

  async execute(id: string) {
    const result = this.pacientePersistence.remove(id)
    return result
  }
}