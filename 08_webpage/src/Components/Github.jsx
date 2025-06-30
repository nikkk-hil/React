import { useLoaderData } from 'react-router-dom';

function Github() {
const githubData = useLoaderData();
return (
    <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                    <img
                        className="w-full h-auto rounded-full shadow-lg"
                        src={githubData.avatar_url}
                        alt="image"
                    />
                </div>
                <div className="md:7/12 lg:w-6/12">
                    <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        {githubData.name}
                    </h1>
                    <p className="mt-6 text-gray-600">
                        Repos : {githubData.public_repos} | Followers : {githubData.followers} | Following : {githubData.following}
                    </p>
                    <p className="mt-4 text-gray-600">
                        Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                        Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Github