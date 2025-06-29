import CustomIcon from '../CustomIcon/CustomIcon';
import './SlideButton.scss';

interface Props {
    type: string
    customClass?: string,
    onClick: any,
    iconSize?: number,
}

function SlideButton({ type, customClass = "", onClick, iconSize = 24 }: any) {
    const style = {
        width: iconSize ? iconSize : "24px",
        height: iconSize ? iconSize : "24px",
    }
    return <div className={`slideButton ${customClass}`} onClick={onClick} style={{ ...style }}>
        {type === "next" ?
            <CustomIcon name="arrow-right" size={iconSize} /> :
            <CustomIcon name="arrow-left" size={iconSize} />
        }
    </div>
}

export default SlideButton;