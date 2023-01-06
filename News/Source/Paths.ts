
import { fromFileUrl , dirname , join } from 'Path'


const { url } = import.meta;

const folder =
    dirname(fromFileUrl(url));

const repository =
    join(folder,'..','..');


export const News =
    join(repository,'News','Data','News.yaml');
    
export const ReadMe =
    join(repository,'profile','README.md');
