import { useContext } from "react";
import { BlogContext } from "./BlogContext";
import BlogItem from "./BlogItem";
export default function BlogTop() {
    const {articles, setArticles} = useContext(BlogContext);
    return (
        <>
            <div>TOPの内容が表示されます。</div>
            {articles.map((article, index) =>
                <BlogItem key={index} {...article}></BlogItem>
            )}
        </>
    );
}