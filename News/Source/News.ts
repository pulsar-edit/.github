
import { parse } from 'YAML'
import { News } from 'Paths'

const { readTextFile } = Deno;


export async function loadNews (){
    
    const yaml = await readTextFile(News);
    
    return parse(yaml) ?? []
}