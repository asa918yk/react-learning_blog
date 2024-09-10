import { useContext, useRef } from "react";
import { BlogContext } from "./BlogContext";
import { useNavigate } from "react-router-dom";
export default function BlogPost() {
    const {articles, setArticles} = useContext(BlogContext);
    const navigate = useNavigate();
    const title = useRef(null);
    const content = useRef(null);
    const id = articles[articles.length-1].id + 1;
    function submit() {
        setArticles([...articles, {
            title: title.current.value,
            content: content.current.value,
            id: id
        }]);
        navigate('/');
    }
    return (
        <form>
            <div>
                <label>タイトル：
                    <input name="title" type="text" ref={title} />
                </label>
            </div>
            <div>
                <label>本文：
                    <textarea name="content" ref={content}></textarea>
                </label>
            </div>
            <div>
                <button type="button" onClick={submit}>投稿する</button>
            </div>
            
        </form>
    );
}