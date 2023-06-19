const prisma = require("../../../db")

class DeleteRatingUseCase{
  async execute({id}){
    await prisma.rating.delete({
      where: {
        id
      }
    });
  }
}

module.exports = DeleteRatingUseCase;