import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';/* 
import 'semantic-ui-css/semantic.min.css' */

dbConnect();

export default async (req,res) => {
    const {
        query: { id },
        method
    }=req;

    switch(method) {
        case 'GET':
        try {
            const note = await Note.findById(id);

                if(!note) {
                    return res.status(400).json({ success: false });
                }
            res.status(200).json({ success: true, data: note })    
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        case 'PUT':
            try {
                const note = await Note.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidatdators: true
                });

                if(!note) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: note })    
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            case 'DELETE':
                try {
                    const deleteNote = await Note.deleteOne({_id: id});
                    if (!deleteNote) {
                        return res.status(400).json({ success : false})
                    }
                    res.status(200).json({ success: true, data: {} })    
                } catch (error) {
                    res.status(400).json({ success : false})
                }
                break;
                default:
                    res.status(400).json({ success : false});
                    break;
      }
    }