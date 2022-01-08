import { getSession, getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
    return (
        <div className="h-screen flex items-center justify-around">
            <div className="relative bg-slate-100 border-gray-400 border-[1px] h-[50vh] md:w-1/3 w-[80%] p-6 rounded-lg">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name} className="flex flex-col items-center">
                    <p className="mb-4">Amazon</p>
                        <button className="rounded-lg text-white border-gray-800 border-[1px] p-4 bg-slate-600" onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                        <p className="text-xs absolute bottom-10 text-center">By continuing, you agree to FAKE AMAZON's Conditions of Use and Privacy Notice.</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const providers = await getProviders()
    const { req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }

    return {
        props: { providers },
    }
}