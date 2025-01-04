import { BlogProps } from '@/types';
import BlogDetails from '../utils/blog-details';
import Wrapper from '../utils/wrapper';

interface Props {
    data: BlogProps;
}

const BlogDetailSection = ({ data: blog }: Props) => {
    return (
        <Wrapper>
            <div className="flex flex-col items-start w-full py-8">
                <BlogDetails blog={blog} />
            </div>
        </Wrapper>
    )
};

export default BlogDetailSection
