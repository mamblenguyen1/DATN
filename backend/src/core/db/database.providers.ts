import { Provider } from "@nestjs/common";
import { getRepositoryToken } from "../decorators/inject-repository.decorator";
import { Model } from "mongoose";
import { Repository } from "../repository/repository";
import { ModelDefinition, getModelToken } from "@nestjs/mongoose";

export function repositoryProvider(modelDef: ModelDefinition): Provider {
    return {
        provide: getRepositoryToken(modelDef.name),
        useFactory: (model: Model<Document>) => new Repository<Document>(model),
        inject: [getModelToken(modelDef.name)]
    }
}

export function repositoryProviders(modelDefs?: ModelDefinition[]): Provider[] {
    return modelDefs.reduce((providers, option) => [
        ...providers,
        repositoryProvider(option)
    ], [] as Provider[])
}