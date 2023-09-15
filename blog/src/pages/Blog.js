
import { useParams } from "react-router";
import BlogDetail from "../components/Blog/BlogDetail/Index";
import BlogList from "../components/Blog/BlogList/Index";
import blogData from '../components/Blog/BlogList/data.json'

const BlogPage = () => {

    let {id} = useParams()

    let blog = null;

    if(id){
        blog = blogData.filter(b => b.id == id)[0]
    }
    

    return blog ? <BlogDetail {...blog} /> : <BlogList/>

    // return <BlogList />
}

export default BlogPage;