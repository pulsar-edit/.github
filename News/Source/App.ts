
import { insertNews } from './Readme.ts'
import * as Paths from 'Paths'


const 
    { writeTextFile, readTextFile } = Deno ,
    { log } = console ;


log(`🗞 Inserting updated News`);


const readme = await readTextFile(Paths.ReadMe);

const updated = await insertNews(readme);
    
await writeTextFile(Paths.ReadMe,updated);


log(`🗞 Finished news insertion`);