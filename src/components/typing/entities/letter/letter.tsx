import { Box } from "@mui/material";

type PropsType = {
    letter: string // 1 symbol
}

export const Letter = ({letter}: PropsType) => {
    return (
        <Box sx={{height: '42px', width: '17px', fontSize: '26px', fontFamily: 'Courier Prime', color: '#4A4A4A'}}>
            {letter}
        </Box>
    );
};