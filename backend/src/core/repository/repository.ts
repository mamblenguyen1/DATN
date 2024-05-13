import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class Repository<S extends object> {
    constructor(
        private readonly model: Model<S>
    ) {
    }

    async create<C>(createDto: C) {
        const item = new this.model(createDto);
        return item.save()
    }

    async findAll(): Promise<S[]> {
        return this.model.find().exec();
    }

    async findOne(id: string): Promise<S> {
        return this.model.findById(id).exec();
    }

    async update<U>(id: string, updateDto: U): Promise<S> {
        return this.model.findByIdAndUpdate(id, updateDto).exec();
    }

    async remove(id: string): Promise<S> {
        return this.model.findByIdAndDelete(id).exec();
    }
}
