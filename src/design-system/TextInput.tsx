interface TextInputProps {
    id: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
}

export function TextInput({
    id,
    type = 'text',
    value,
    onChange,
}: TextInputProps) {
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded border px-3 py-2"
        />
    );
}
