import WilderService from "../services/wilder.service";

export default class WilderController {

    static async getAll(req,res,next) {
        try {
            const wilders = await WilderService.getAll();
            res.status(200).send(wilders);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async getById(req,res,next) {
        try {
            const wilder = await WilderService.getById(req.params.id);
            res.status(200).send(wilder);
        } catch (err) {
            res.status(500).send(err);
        }
    }


    static async create(req,res,next) {
        try {
            const wilder = await WilderService.create(req.body);
            res.status(200).send(wilder);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async update(req,res,next) {
        try {
            const wilder = await WilderService.update(req.body.id, req.body.wilder);
            res.status(200).send(wilder);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async delete(req,res,next) {
        try {
            const res = await WilderService.delete(req.body.id);
            res.status(200).send(res);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}