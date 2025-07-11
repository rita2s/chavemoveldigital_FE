import React from 'react';
import {Box, Modal, Typography} from "@mui/material";

const ModalContainer = ({open, handleCloseModal, data}) => {
    const code = data.get("SMScode");

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
        typography: {
            color: 'black'
        }
    };


    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Nunca partilhe este código com ninguém:
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2, mb: 2}}>
                    {code}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2, mb: 2}}>
                    Autenticação em EuVoto
                </Typography>

                <div className={"diflex jcc w100"}>
                    <input
                        type={"button"}
                        value={"Fechar"}
                        onClick={handleCloseModal}
                    />
                </div>

            </Box>
        </Modal>
    );
};

export default ModalContainer;