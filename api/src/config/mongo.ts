import { connect } from 'mongoose';

(async () => connect('mongodb://food-order-mongo:27017/myapp', {})
.catch(err => console.log(err))
)()