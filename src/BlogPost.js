import { Form } from "react-router-dom";
export default function BlogPost() {
    return (
        <Form method="POST">
            <div>
                <label>タイトル：
                    <input name="title" type="text" />
                </label>
            </div>
            <div>
                <label>本文：
                    <textarea name="content"></textarea>
                </label>
            </div>
            <div>
                <button type="submit">投稿する</button>
            </div>
        </Form>
    );
}