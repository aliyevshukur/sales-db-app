import * as React from 'react';
import "./styles.css";

interface Props {
    userData: {
        id: string,
        name: string,
        age: number,
        email: string
    }
}

const List = ({ userData }: Props) => {
    return <div className="list">
        {userData.name}
    </div>
};

export default List;