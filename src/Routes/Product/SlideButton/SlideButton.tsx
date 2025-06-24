import CustomIcon from '../../../Components/CustomIcon/CustomIcon';
import './SlideButton.scss';


interface Props {
    type: string
    className?: string,
}

function SlideButton({ type, className }: Props) {

    return <button className={`slideButton ${className}`}>
        {type === "next" ? <CustomIcon name="arrow-right" /> : <CustomIcon name="arrow-left" />}
    </button>
}

export default SlideButton;