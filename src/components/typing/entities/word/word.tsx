import { Stack } from "@mui/material";
import { Letter } from "@/components/typing/entities/letter/letter.tsx";

type PropsType = {
    word: string
}

export const Word = ({word}: PropsType) => {
    const arr = word.split('')

    return (
        <Stack direction={'row'}>
            {arr.map(letter => <Letter letter={letter} />)}
        </Stack>
    );
};