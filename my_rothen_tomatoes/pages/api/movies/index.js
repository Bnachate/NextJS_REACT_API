import dbConnect from '../../../utils/dbConnect';
import Movies from '../../../models/Movies';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const movies = await Movies.find({});
                res.status(200).json(movies)
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const movies = await Users.create(req.body);
                res.status(201).json({ success: true, data: movies })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}