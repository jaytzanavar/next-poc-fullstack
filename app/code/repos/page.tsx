import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import Link from 'next/link';



async function fetchReposData() {
    const response = await fetch('https://api.github.com/users/jaytzanavar/repos', {
        next: {
            revalidate: 60
        }
    })
    // await new Promise(resolve => setTimeout(resolve, 5000));
    return await response.json();
}


async function ReposPage() {
    const repos = await fetchReposData();

    return (
        <>
            <div className='flex justify-center'>
                <h2 className='w-full font-bold text-xl'>Repositories</h2>
                <ul className='w-full'>
                    {repos.map((repo: any) => (
                        <li className='flex justify-between gap-2 mb-2 text-black/80 hover:text-green-600 transition-all relative hover:-translate-y-1 hover:scale-100 p-4 bg-white max-w-sm rounded overflow-hidden shadow-lg' key={repo.id}>
                            <Link className='w-full' href={`/code/repos/${repo.name}`}>
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
                                </div>
                            </Link>
                        </li>
                    ))}


                </ul>
            </div>
        </>
    )
}

export default ReposPage