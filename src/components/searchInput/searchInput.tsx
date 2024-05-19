import { Input, InputAdornment, IconButton } from "@material-ui/core";
import { Box } from "./style";

interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        
        <Input
            fullWidth
            value={value}
            onChange={onChange}
            startAdornment={
                <InputAdornment position="start">
                    <IconButton type="submit" aria-label="search">
                    <Box>
                        <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                        Buscar
                    </Box>
                    </IconButton>
                </InputAdornment>
            }
        />
        
    );
}
