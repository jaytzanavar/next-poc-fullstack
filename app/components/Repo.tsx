import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepo(name: string): Promise<any> {
    const repo = await fetch(`https://api.github.com/repos/jaytzanavar/${name}`)

    return repo.json();
}

const Repo = async ({ name }: { name: string }) => {
    const repo = await fetchRepo(name);

    return (
        <div>
            <h3 className='text-lg font-bold'>{repo.name}</h3>
            <p>{repo.description ? repo.descripiton : 'none'}</p>
            <div className="repo-details w-full flex justify-between text-gray/80">
                <span className='flex gap-2'>
                    <FaStar /> {repo.stargazers_count}
                </span>
                <span className='flex gap-2'>
                    <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className='flex gap-2'>
                    <FaEye /> {repo.watchers_count}
                </span>
            </div></div>
    )
}

export default Repo