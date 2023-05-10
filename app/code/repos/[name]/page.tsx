import { Suspense } from 'react';
import Repo from '@/app/components/Repo';
import RepoDirs from '../../../components/RepoDirs';
import Link from 'next/link';

const RepoPage = ({ params }: any) => {
    const { name, details } = params

    return (
        <div className="bg-white text-black/80 max-w-lg rounded overflow-hidden shadow-lg">
            <Link href='/code/repos'> Back to Repositories</Link>

            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading Directoriess...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage