import express, { Request, Response } from 'express';
import { RawCharacter } from './ReqJSONInterfaces';
import { getDamageInfo } from './getDamageInfo';

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World from TypeScript!');
});

app.post('/singlecharacter',  (req: Request, res: Response) => {
    //console.log('Body:', req.body);
    const character:RawCharacter = req.body
    const info:InfoInterface[] = getDamageInfo(character)
    res.send(JSON.stringify(info));
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
