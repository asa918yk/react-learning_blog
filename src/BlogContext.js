import { createContext, useState } from "react";
export const BlogContext = createContext();
export function BlogProvider(props) {
    const [articles, setArticles] = useState([{
        id: 1,
        title: "ブログタイトル",
        content: "ブログ本文が入ります。"
    }]);
    const value = {articles, setArticles};
    return (
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    );
}