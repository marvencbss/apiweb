import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotaoVoltar = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <button onClick={handleGoBack}>
                Voltar
            </button>
        </div>
    );
};

export default BotaoVoltar;