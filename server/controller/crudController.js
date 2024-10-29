const { default: mongoose } = require("mongoose");
const CrudModel = require(`../model/crudModel`)

const createModel = async (request, response) => {
    const { name, dob, email, contact, password, address } = request.body;
    try {
        let data = await CrudModel.create({ name, dob, email, contact, password, address })
        response.json(data).status(200)
    } catch (error) {
        response.json(error).status(400)
    }
}

const fetchAllModel = async (request, response) => {
    try {
        let data = await CrudModel.find();
        response.json(data).status(200)
    } catch (error) {
        response.json(error).status(400)
    }
}

const fetchId = async (request, response) => {
    const { id } = request.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            let data = await CrudModel.findById(id)
            response.json(data).status(200)
        } catch (error) {
            response.json(error).status(400)
        }
    }
    else {
        response.json({}).status(400)
    }
}

const DeleteById = async (request, response) => {
    const { id } = request.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            let data = await CrudModel.findByIdAndDelete({ _id: id })
            response.json(data).status(200)
        } catch (error) {
            response.json(error).status(400)
        }
    }
    else {
        response.json({}).status(400)
    }
}

const updateAll = async (request, response) => {
    const { id } = request.params;
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            let data = await CrudModel.findByIdAndUpdate(
                { _id: id },
                { ...request.body },
                { new: true }  
            );
            if (!data) {
                return response.status(404).json({ error: "Data not found" });
            }
            response.status(200).json(data);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    } else {
        response.status(400).json({ error: "Invalid ID format" });
    }
};

module.exports={
    createModel,
    DeleteById,
    updateAll,
    fetchAllModel,
    fetchId
}