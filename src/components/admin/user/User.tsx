import React, { ChangeEvent, useEffect, useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getter, sendData } from '../../../global/connection';
import { RootState } from '../../../store';
import { ConnectionType } from '../../../types/user-types';

import Button from '../../common/button/Button';
import Spinner from '../../common/spinner/Spinner';
import ErrLog from './parts/ErrLog';

import './User.scss';

interface ChangePassword {
    password: string;
    newPassword: string;
    confirm: string;
}

const initialState: ChangePassword = {
    password: '',
    newPassword: '',
    confirm: ''
}

const User = () => {

    const navigate = useNavigate();

    const { error } = useSelector((store: RootState) => store.errorlog)

    const [percent, setpercent] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ChangePassword>(initialState);
    const [info, setInfo] = useState<string>('');

    const update = (e: ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const passChange = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (data.newPassword === data.confirm) {
            setInfo('Potwierdzenie hasła nie zgadza się z hasłem');
            return;
        };

        if (data.password.length < 8 || data.newPassword.length < 8) {
            setInfo('hasło jest za krókie');
            return;
        };

        if (window.confirm("Zmienić hasło?")) {
            setLoading(true);
            const response = await sendData(data, 'login', ConnectionType.U);
            setLoading(false);

            if (response instanceof Error) {
                navigate(`/error/${response.message}`)
            } else {
                if (response.actionStatus === true) {
                    setInfo('hasło zmienione poprawnie')
                } else {
                    setInfo(response.message as string)
                };
            };
        } else return;

    };

    const clearErrorLog = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setLoading(true);
        const response = await getter('login/deleteerror');
        setLoading(false);

        if (response instanceof Error) {
            navigate(`/error/${response.message}`)
        } else {
            if (response.actionStatus === true) {
                setInfo('Error log został wyczyszczony')
            } else {
                setInfo(response.message as string)
            };
        }
    }; 

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await getter('user/freespace');
            setLoading(false);

            if (response instanceof Error) {
                navigate(`/error/${response.message}`)
            } else {
                if (response.actionStatus === true && typeof response.message === 'string') {
                    const dataArray = response.message.split('/');
                    const usedSpace = Number((Number(dataArray[0]) / (Number(dataArray[1]) / 100)).toFixed(0));
                    setpercent(usedSpace);
                } else {
                    navigate(`/error/${response.message}`)
                };
            };
        })();
    }, []);

    const errorsToShow = error.length < 1 ? 'Brak błędów' : error.map((err, index) => <ErrLog error={err} key={index} />);

    if (loading) return <Spinner />;

    return (
        <div className="User">
            <strong>{info}</strong>
            <form>
                <label>
                    hasło <input type="password" name='password' value={data.password} onChange={update} />
                </label>
                <label>
                    nowe hasło <input type="password" name='newPassword' value={data.newPassword} onChange={update} />
                </label>
                <label>
                    powtórz nowe hasło <input type="password" name='confirm' value={data.confirm} onChange={update} />
                </label>
                <Button name='zapisz' className='standard' func={passChange} />
            </form>
            <div className="User__disk">
                Przestrzeń na dysku:<div className="User__disk-all">
                    <div className="User__disk-taken" style={{ width: `${percent}%` }}>{percent}%</div>
                </div>
                <div className="User_disk-error">
                    {errorsToShow}
                </div>
                <Button name='wyczyść' className='standard' func={clearErrorLog} />
            </div>
        </div>
    );
};

export default User;