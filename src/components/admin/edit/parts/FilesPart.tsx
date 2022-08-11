import React, { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMultipart } from "../../../../global/connection";
import { Fotos } from "../../../../types/article-types";
import { ConnectionType } from "../../../../types/user-types";
import Button from "../../../common/button/Button";
import Foto from "./Foto";

interface Props {
    fotos: Fotos[]
    id: string
}

const FilesPart = (props: Props) => {

    const navigate = useNavigate()

    const { fotos, id } = props;

    const [file, setFile] = useState<File | null>(null);

    const fotoToShow = fotos.map((foto, index) => <Foto id={foto.id} orginalName={foto.orginalName} />);
    const calculation = 6 - fotoToShow.length;

    const fileHandler = (event: ChangeEvent<HTMLInputElement>): void => {

        if (event.target.files) {
            const filesList = event.target.files[0]
            setFile(filesList);
        };
    };

    const addFoto = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (!file) return;
        if (calculation < 1) return;

        if (window.confirm('Dodać zdjęcie?')) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('id', id);

            const response = await sendMultipart(formData, 'user/foto/add', ConnectionType.A);

            if (response instanceof Error) {
                navigate(`/error/${response.message}`);
            } else {
                if (response.actionStatus !== true) {
                    navigate(`/error/${response.message}`);
                } else {
                    setFile(null);
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                }
            }
        } else return;

    }

    const addingFile = <>
        <label htmlFor="foto">Dodaj zdjęcie</label>
        <input type="file" name="foto" onChange={fileHandler} />
        <Button name="Dodaj" className="satndard" func={addFoto} />
    </>

    return (
        <div className="Fileshandler">
            {fotoToShow.length < 1 ? 'Brak zdjęć' : fotoToShow};
            <h3>{calculation < 1 ? 'Nie możesz dodać więcej zdjęć' : `Możesz dodać jeszcze ${calculation} zdjęcia`}</h3>
            {calculation < 1 ? null : addingFile}
        </div>
    );
};

export default FilesPart