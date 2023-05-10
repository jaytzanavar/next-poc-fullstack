
import Link from 'next/link';

async function fetchRepo(name: string): Promise<any> {
    const repo = await fetch(`https://api.github.com/repos/jaytzanavar/${name}/contents`)
    await new Promise(resolve => setTimeout(resolve, 5000));
    return repo.json();
}

const RepoDirs = async ({ name }: { name: string }) => {
    const contents = await fetchRepo(name);
    const dirs = contents.filter(cnt => cnt.type === 'dir')

    return (
        <>
            <h3>DIrectories</h3>
            <ul>{dirs.map((dir: any) => (
                <li key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                </li>
            ))

            }
            </ul>
        </>

    )
}

export default RepoDirs