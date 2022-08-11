import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getter } from '../../../global/connection';

import Button from '../../common/button/Button';
import Spinner from '../../common/spinner/Spinner';

import './User.scss';

const User = () => {

    const navigate = useNavigate();

    const [percent, setpercent] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);



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

    if (loading) return <Spinner />;

    return (
        <div className="User">
            <form>
                <label>
                    hasło <input type="password" />
                </label>
                <label>
                    nowe hasło <input type="password" />
                </label>
                <label>
                    powtórz nowe hasło <input type="password" />
                </label>
                <Button name='zapisz' className='standard' />
            </form>
            <div className="User__disk">
                Przestrzen na dysku:<div className="User__disk-all">
                    <div className="User__disk-taken" style={{ width: `${percent}%` }}>{percent}%</div>
                </div>
            </div>
        </div>
    );
};

export default User;