const DeleteRatingUseCase = require("../../models/rating/useCase/DeleteRatingUseCase");

class DeleteRatingController {
  async handle(req,res){
    const {id} = req.params;

    const service = new DeleteRatingUseCase();

    await service.execute({id});

    return res.status(200)
  }
}

module.exports = DeleteRatingController;
