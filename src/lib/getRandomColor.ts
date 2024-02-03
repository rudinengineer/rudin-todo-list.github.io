import { colors } from "../constants/color";

export default function getRandomColor() {
    return colors[(Math.floor(Math.random() * colors.length))]
}