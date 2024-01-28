import useFetchUsers from "../utils/useFetchUsers";

const Users = () => {
  const url = "https://dummyjson.com/users";
  const { isLoading, users, error } = useFetchUsers(url);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h3>Oops!! Something went wrong!!</h3>;
  }

  return (
    <div>
      {users?.map((user) => (
        <h3 key={user?.id}>{user?.firstName}</h3>
      ))}
    </div>
  );
};

export default Users;
