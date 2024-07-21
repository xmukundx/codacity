import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers:[
        GithubProvider({
            clientId:'Ov23liuVV2wMVmT4K3iS',
            clientSecret:'efbff700936f64274a6ba5fd98fbaf4dfce78b28'

        })
    ]
}

export default NextAuth(authOptions)