import { FunctionComponent } from "react";
import './Material.scss';

interface MaterialProps {
    name: string
}

const Material: FunctionComponent<MaterialProps> = ({ name }) => {
    return (<span className={`material ${name}`} />
    );
}

export default Material;