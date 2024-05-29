import UseFetch from "./UseFetch";
const CustomHookData = () => {
    const [data] = UseFetch("https://jsonplaceholder.typicode.com/users");
    return (
        <>
            <h2>Users Data</h2>
            {data && data.map((item) => {
                return <p key={item.id}>{item.phone}{item.website}</p>;
            })}
        </>
    )
};

export default CustomHookData;