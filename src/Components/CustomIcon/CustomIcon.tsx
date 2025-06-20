interface Props {
    name: string,
    size?: number,
}

const CustomIcon = ({ name, size = 24 }: Props) => {

    switch (name) {
        case "arrow-right":
            return (
                <svg width={size} height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor" />
                </svg>


            )
        case "arrow-left": return (
            <svg width={size} height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor" />
            </svg>

        )
        case "home":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: "white" }} viewBox="0 -960 960 960">
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560zm-80 80v-480l320-240 320 240v480H520v-240h-80v240zm320-350" />
                </svg>
            )
        case "products":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={"white"} viewBox="0 -960 960 960">
                    <path d="M680-80H280q-33 0-56.5-23.5T200-160v-640q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v640q0 33-23.5 56.5T680-80m0-80v-640H280v640zM480-600q33 0 56.5-23.5T560-680t-23.5-56.5T480-760t-56.5 23.5T400-680t23.5 56.5T480-600m0 400q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47m0-80q-33 0-56.5-23.5T400-360t23.5-56.5T480-440t56.5 23.5T560-360t-23.5 56.5T480-280M280-800v640z" />
                </svg>
            )
        case "about":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: "white" }} viewBox="0 -960 960 960">
                    <path d="M480-680q17 0 28.5-11.5T520-720t-11.5-28.5T480-760t-28.5 11.5T440-720t11.5 28.5T480-680m-40 320h80v-240h-80zM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240zm126-240h594v-480H160v525zm-46 0v-480z" />
                </svg>
            )
        case "reciepts":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: "white" }} viewBox="0 -960 960 960">
                    <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84z" />
                </svg>

            )
        default:
            return (
                <div></div>
            )
    }
}

export default CustomIcon;