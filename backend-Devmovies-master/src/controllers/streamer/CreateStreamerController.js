const CreateStreamerUseCase = require("../../models/streamer/CreateStreamerUseCase");

class CreateStreamerController {
  async handle(req,res){
    const {name,link} = req.body;

    const createStreamerUseCase = new CreateStreamerUseCase();

    const result = await createStreamerUseCase.execute({name,link});

    return res.status(201).json(result);
  }
}

module.exports = CreateStreamerController;