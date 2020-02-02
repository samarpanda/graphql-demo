module.exports = {
  Query: {
    pets(_, {input}, {models}) {
      return models.Pet.findMany(input || {})
    },
    pet(_, {id}, {models}) {
      return models.Pet.findOne({id})
    },
    user(_, __, {models}) {
      return models.User.findOne()
    }
  },
  Mutation: {
    addPet(_, {input}, {models, user}) {
      const pet = models.Pet.create({...input, user: user.id})
      return pet
    }
  },
  Pet: {
    owner(pet, _, {models}) {
      return models.User.findOne({id: pet.user})
    },
    img(pet) {
      let pic;
      switch(pet.type){
        case 'DOG':
          pic = 'https://placedog.net/300/300'
          break;
        case 'CAT':
          pic = 'http://placekitten.com/300/300'
          break;
        case 'RABBIT':
          pic = 'http://placerabbit.com/rabbit/300x300.jpg'
          break;
      }
      return pic;
    }
  },
  User: {
    pets(user, _, {models}) {
      return models.Pet.findMany({user: user.id})
    }
  }
}