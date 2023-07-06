import { connect } from 'mongoose';

(async () => connect('mongodb://food-order-mongo1:27017,food-order-mongo2:27018,food-order-mongo3:27019/myapp?replicaSet=dbrs', {})
.catch(err => console.log(err))
)()