import { CustomDecorator, Inject } from '@nestjs/common';

export const getRepositoryToken = (modelName: string) => `Repository<${modelName}>`;

export const InjectRepository = (modelName: string): ParameterDecorator => Inject(getRepositoryToken(modelName));
