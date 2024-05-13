import { Repository } from "../repository/repository";

export abstract class CRUDService<T extends object, C extends object> {
    constructor(
        protected baseRepo: Repository<T>
    ) { }

    async create(createDto: C) {
        return this.baseRepo.create(createDto);
    }

    async findAll(): Promise<T[]> {
        return this.baseRepo.findAll();
    }

    async findOne(id: string): Promise<T> {
        return this.baseRepo.findOne(id);
    }

    async update(id: string, updateDto: Partial<C>): Promise<T> {
        return this.baseRepo.update(id, updateDto);
    }

    async remove(id: string): Promise<T> {
        return this.baseRepo.remove(id);
    }
}
