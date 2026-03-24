interface UserPictureProps {
    src: string;
    alt: string;
}

export function UserPicture({ src, alt }: UserPictureProps) {
    return (
        <img
            src={src}
            alt={alt}
            className="mx-auto h-32 w-32 rounded-full shadow-md"
        />
    );
}
