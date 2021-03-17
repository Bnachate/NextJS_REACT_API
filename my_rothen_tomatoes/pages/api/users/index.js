import dbConnect from '../../../utils/dbConnect';
import Users from '../../../models/Users';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const users = await Users.find({});
                res.status(200).json(users)
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                console.log(req.body);
                const users = await Users.create(req.body);
            
                res.status(201).json({ success: true, data: users })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}