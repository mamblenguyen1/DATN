import { Body, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CRUDService } from "../services/crud.service";

export abstract class CRUDController<T extends object, C extends object> {
    constructor(
        protected crudService: CRUDService<T, C>
    ) { }

    @Post()
    create(@Body() createDto: C) {
        return this.crudService.create(createDto);
    }

    @Get()
    findAll() {
        return this.crudService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.crudService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateDto: Partial<C>,
    ) {
        return this.crudService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.crudService.remove(id);
    }
}