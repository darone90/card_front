import React from 'react';

import Button from '../../common/button/Button';

import './User.scss';

const User = () => {
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
        </div>
    );
};

export default User;