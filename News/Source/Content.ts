
import { loadNews } from './News.ts'
import { chunk } from 'Chunk'


const { log } = console;


const Fill = '-'.repeat(34);

const Mark = `<!${ Fill } 🗞 News ${ Fill }>`;


const Space = ' ';


const indent = ( line ) =>
    `${ Space.repeat(3) }${ line }`

const trim = ( line ) =>
    line.trim();


const link = /(\[[\S\s]+?\])/g


interface News {

    title : News
}


function toPanel ( news : News ){

    const { links } = news;

    const insertLinks = ( line ) =>
        line.replaceAll(link,( text ) => {

            const name = text
                .slice(1,-1);

            const url = links[name] ?? '#';

            return `<a href = '${ url }'>${ name }</a>`
        })


    let { title , lines } = news;

    lines = lines
        .split('\n')
        .map(trim);

    lines.unshift(`<b>${ title }</b>`,'');

    lines = lines
        .map(indent)
        .map(insertLinks)
        .join('<br>');

    return [
        `<kbd align = left>${ Space }<br>` ,
        lines ,
        `<br>${ Space.repeat(80) }</kbd>`
    ].join('')
}


export async function compileNews (){

    const articles = await loadNews();

    log(`🗞 Found ${ articles.length } news articles`)

    const panels = articles
        .map(toPanel);

    const news = chunk(panels,2)
        .map(( pair ) => pair.join(Space.repeat(5)))
        .join('<br><br>');

    const items = [
        Mark ,
        '<pre align = center>' ,
        news ,
        '</pre>' ,
        Mark
    ]

    return items
        .join('\n \n')
}
