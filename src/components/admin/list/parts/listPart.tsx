import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteOne } from '../../../../features/article-slice';
import { getter } from '../../../../global/connection';
import Button from '../../../common/button/Button';

interface Props {
    title: string;
    date: string;
    id: string;
}

const ListPart = (props: Props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { title, date, id } = props;

    const deleteHandler = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (window.confirm('Na pewno usunąć ?')) {
            dispatch(deleteOne(id));
            const response = await getter(`user/delete/${id}`);
            if (response instanceof Error) {
                navigate(`/error/${response.message}`);
            } else {
                if (response.actionStatus === true) {
                    return;
                } else {
                    navigate(`/error/${response.message}`)
                }
            }
        } else return;

    };

    const editHandler = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        navigate(`/admin/edit/${id}`);
    }

    return (
        <div className="Part">
            <h3>{title}</h3>
            <strong>{date}</strong>
            <Button name='Edytuj' className='Part__edit' func={editHandler} />
            <Button name='Usuń' className='Part__delete' func={deleteHandler} />
        </div>
    );
};

export default ListPart;