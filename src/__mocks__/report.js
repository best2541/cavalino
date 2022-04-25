import { v4 as uuid } from 'uuid';

export const reports = [

    {
        id:uuid(),
        customer:'Ekaterina Tankova',
        price:530000000,
        edit:1,
        car: '488 GTB',
        date: new Date()
    },
    {
        id:uuid(),
        customer: 'Clarke Gillebert',
        price:420000000,
        edit:2,
        car: '488 GTB',
        date: new Date()
    }

]