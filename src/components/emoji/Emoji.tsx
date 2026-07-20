import Image from "next/image";
import { emojiMap, type EmojiName } from "./emoji-map";

interface EmojiProps {
    name: EmojiName;
    size?: number;
    className?: string;
    alt?: string;
}

export function Emoji({ name, size = 24, className, alt }: EmojiProps) {
    return (
        <Image
            src={emojiMap[name]}
            alt={alt ?? "Emoji"}
            width={size}
            height={size}
            className={className}
        />
    );
}
