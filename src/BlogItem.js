import { Link } from "react-router-dom"

export default function BlogItem({title, id}) {
    return (
        <div>
            <Link to={'/'+id}>
                {title}
            </Link>
        </div>
    )
}