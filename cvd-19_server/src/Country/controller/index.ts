import { Request, Response} from 'express';
import { v4 as uuidv4 } from 'uuid';
import { CountryInstance } from '../model';

class CountryController {
    async create(req: Request, res: Response) {
        const id = uuidv4();
        try {
            const record = await CountryInstance.create( { ... req.body, id});
            return res.json({record, msg: 'Successfully created a new Country!'});
        }
        catch(e) {
                return res.json({msg: 'Failed to create!', status: 500, route: '/create'});
        }
    }
    
    async readAll(req: Request, res: Response) {
        try {
            const records = await CountryInstance.findAll({where:{}});
            return res.json(records);
        }
        catch(e) {
            return res.json({msg: 'Failed to read all!', status: 500, route: '/read'});
        }
    }

    async readById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await CountryInstance.findOne({where:{id}});
            return res.json(record);
        }
        catch(e) {
            return res.json({msg: 'Failed to read!', status: 500, route: '/read/:id'});
        }
    }

    async readByName(req: Request, res: Response) {
        try {
            const { name } = req.params;
            const record = await CountryInstance.findOne({where:{name}});
            return res.json(record);
        }
        catch(e) {
            return res.json({msg: 'Failed to read!', status: 500, route: '/read/:name'});
        }
    }
    //!!!
    async updateByName(req: Request, res: Response) {
        try {
            const { name } = req.params;
            const record = await CountryInstance.findOne({where:{ name }});

            if(!record) {
                return res.json({msg: 'Cannot find existing Country.'});
            }

            const updatedRecord = await record.update({ ... req.body});

            return res.json( { record: updatedRecord, msg: 'Successfully updated a Country!'});
        }
        catch(e) {
            return res.json({msg: 'Failed to update!', status: 500, route: '/update/:name'});
        }
    }

    async deleteById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await CountryInstance.findOne({where:{id}});

            if(!record) {
                return res.json({msg: 'Cannot find existing Country.'});
            }

            const deletedRecord = await record.destroy();

            return res.json( { record: deletedRecord, msg: 'Successfully deleted a Country!' });
        }
        catch(e) {
            return res.json({msg: 'Failed to delete!', status: 500, route: '/delete/:id'});
        }
    }
}

export default new CountryController();