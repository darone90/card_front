import React from 'react';

interface Props {
    name: string;
    size: number;
}

const FileInfo = (props: Props) => {

    const { name, size } = props;

    return (
        <div className="fileinfo">
            <h3>{name}</h3>
            <strong>{(size / 1000000).toFixed(1)} MB</strong>
        </div>
    );
};

export default FileInfo;