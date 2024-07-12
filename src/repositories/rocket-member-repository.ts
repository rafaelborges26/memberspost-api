//contrato (metodos, parametros e response q vao existir)

export abstract class RockerMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
