import { Stack } from "@mui/material";
import { Word } from "@/components/typing/entities/word";

export const Text = () => {
    const text = 'Hello! my name is s' + 'Sergey'

    const arr = text.split(' ')
    return (
        <Stack>
            {arr.map(word => <Word word={word} />)}
        </Stack>
    );
};