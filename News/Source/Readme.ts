
import { compileNews } from './Content.ts'


const 
    content = `[\\s\\S]+?` ,
    marker = `<!-{2,} *🗞 News *-{2,}>` ,
    pattern = `${ marker }(${ content })${ marker }` ;


export async function insertNews ( readme : string ) : string {

    const news = await compileNews();

    return readme.replace(
        new RegExp(pattern,'im') ,
        () => news
    )
}