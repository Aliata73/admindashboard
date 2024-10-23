export interface Post {
    id: string,
    title: string,
    body: string,
    author: string,
    date: string,
    comments: Postcomments[]
}

export interface Postcomments{
    id: string,
    text: string,
    username: string,
}