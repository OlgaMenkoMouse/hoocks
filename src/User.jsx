import {
    useEffect,
    useState
} from 'react';

export const User = ({ id, name, addToFavorites, isFavorite }) => {
    const [data, setData] = useState();
    const [isActive, setIsActive] = useState(false);

    const handlerClick = () => {
        addToFavorites(id);
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(userData => {
                    setData(userData)
                }, [isActive, id])
        }
    });
    return (
        <li onClick={handlerClick}>
            {name}

            {isActive && data && (
                <div style={{color: 'red'}}>
                    {data.email}
                </div>
            )}
        </li>
    );
};