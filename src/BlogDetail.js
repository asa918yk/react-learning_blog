import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "./BlogContext";

export default function BlogDetail() {
    const {articles, setArticles} = useContext(BlogContext);
    const {id} = useParams();
    const article = articles.find(item => item.id === Number(id));
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}