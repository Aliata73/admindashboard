import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
  } from "@/components/ui/table"
import Link from "next/link"
import posts from "@/data/posts"
import { Post } from "@/types/posts"

interface PostsTableProps {
    limit?: number,
    title?: string,
}

const PostsTable = ({limit, title}: PostsTableProps) => {

    // Sort posts in dec order based on date
    const sortedPosts : Post[] = [...posts].sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())
    
    // Filter post to limit
    const filteredPosts = limit ? sortedPosts.slice(0, limit)  : sortedPosts
    return (
    <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semibold">{title? title : "پست ها"}</h3>
        <Table>
            <TableCaption>لیست پست ها</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-right">عنوان</TableHead>
                    <TableHead className="hidden md:table-cell text-right">نویسنده</TableHead>
                    <TableHead className="hidden md:table-cell text-right">تاریخ انتشار</TableHead>
                    <TableHead className="text-right">نمایش</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                        <TableCell className="hidden md:table-cell ">{post.date}</TableCell>
                        <TableCell>
                            <Link href={`/posts/edit/${post.id}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white
                                    font-bold py-2 px-4 rounded text-xs
                                ">ویرایش</button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default PostsTable