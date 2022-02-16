const Driver = require('../modules/driver');

const create = (req, res, next) => {
    const driveProps = req.body;
    Driver.create(driveProps)
        .then(driver => res.status(201).send(driver))
        .catch(next);
}

const edit = (req, res, next) => {
    console.log('patch');
    const { id } = req.params;
    const drivePropos = req.body;
    Driver.findOneAndUpdate({ _id: id }, drivePropos)
        .then(() => Driver.findById({ _id: id }))
        .then(driver => res.status(200).send(driver))
        .catch(next)
}

const all = (req, res, next) => {
    const limit = parseInt(req.query.limit) || '';
    console.log(limit + " is limit");
    Driver.find({}).limit(limit)
        .then(driver => res.status(200).send(driver))
        .catch(next);
}

const deleteDriver =(req,res,next)=>{
    console.log('delete');
    const {id}=req.params;
    Driver.findByIdAndRemove({_id:id})
    .then(driver=>res.status(204).send(driver))
    .catch(next);

}
module.exports = {
    all,
    create,
    edit,
    deleteDriver
}