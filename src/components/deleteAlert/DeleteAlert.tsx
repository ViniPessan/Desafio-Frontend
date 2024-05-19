import { Alert, Button } from "@material-ui/core";

interface DeleteAlertProps {
    onCancel: () => void;
    onConfirm: () => void;
}

export default function DeleteAlert({ onCancel, onConfirm }: DeleteAlertProps) {
    return (
        <Alert
            severity="error"
            action={
                <>
                    <Button onClick={onCancel} color="inherit" size="small">
                        Cancelar
                    </Button>
                    <Button onClick={onConfirm} color="inherit" size="small">
                        Confirmar
                    </Button>
                </>
            }
        >
            Confirma a exclusão do Empreendimento?
        </Alert>
    );
}
