import fs from 'fs';
import  express, {Request, Response} from 'express';


const app = express();

app.get(('/data.json'),(req: Request, res: Response) => {
    let data = fs.readFileSync('./data/football.csv', {
        encoding:'utf-8',
      }).split('\n');
    var result = [];
    var headers = data[0].split(",");

    for(var i=1; i<data.length; i++) {
  
        var obj: any = {};
        var currentline=data[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
  
    }
    console.dir(result);
    res.json(result);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
});