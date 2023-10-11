const { Apideck } = require('@apideck/node')

const apideck = new Apideck({
  apiKey: 'sk_live_6b99d48c-d9d6-46d1-b072-258d4b5d6544-iHknCPhhWqv0ReiuG1pt-bb12f745-fad7-4b6b-b51c-512ba59120f3',
  appId: 'vUxZz8UEamJd5A0G1pt1JGWpGSGjxmNGG1pt',
  consumerId: 'test-consumer'
})

const response = await apideck.crm.contactsAll({
  serviceId: 'salesforce', // optional
  limit: 10
})