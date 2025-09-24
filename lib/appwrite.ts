import { Client, Account, Avatars} from 'react-native-appwrite'

export const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('c4400167b51910c');

export const account = new Account(client)

export const avatars = new Avatars(client)