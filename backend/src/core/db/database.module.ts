import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ModelDefinition, MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getRepositoryToken } from '../decorators/inject-repository.decorator';
import { Repository } from '../repository/repository';
import { repositoryProvider, repositoryProviders } from './database.providers';


@Module({})
export class DatabaseModule {
    static forFeature(
        modelDef: ModelDefinition
    ): DynamicModule {

        const repoProvider: Provider = repositoryProvider(modelDef);

        return {
            module: DatabaseModule,
            imports: [MongooseModule.forFeature([modelDef])],
            providers: [repoProvider],
            exports: [repoProvider]
        };
    }

    static forFeatures(
        modelDefs: ModelDefinition[]
    ): DynamicModule {
        
        const repoProviders = repositoryProviders(modelDefs)

        return {
            module: DatabaseModule,
            imports: [MongooseModule.forFeature(modelDefs)],
            providers: [...repoProviders],
            exports: [...repoProviders]
        };
    }

}
