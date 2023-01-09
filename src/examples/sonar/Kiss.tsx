import { path } from 'ramda'

const session = {
  data: {
    user: {
      email: 'Ramon',
    },
  },
}

console.log(path(['data', 'user', 'email'], session)) // Ramon
console.log(session.data.user.email) // Ramon
