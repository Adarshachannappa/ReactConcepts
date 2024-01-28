import { useQuery } from "@tanstack/react-query";

async function retrievePosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const json = await response.json();
  return json;
}
const ReactQueryDemo = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: retrievePosts,
  });
  console.log(postsQuery);
  if (postsQuery.isLoading) {
    return <h3>Loading...</h3>;
  }
  if (postsQuery.isError) {
    return <h3>{JSON.stringify(postsQuery.error)}</h3>;
  }

  return (
    <div>
      {postsQuery?.data?.posts?.map((post) => (
        <h3 key={post?.id}>{post?.title}</h3>
      ))}
    </div>
  );
};
export default ReactQueryDemo;
