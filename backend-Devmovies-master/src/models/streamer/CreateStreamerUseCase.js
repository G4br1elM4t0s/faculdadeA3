const prisma = require("../../db");

class CreateStreamerUseCase{
  async execute({
    name,
    link
  }){
    console.log(name,link);
    const streamer = await prisma.streamer.create({
      data:{
        name,
        link
      }
    });
    return streamer;
  }
}

module.exports = CreateStreamerUseCase;