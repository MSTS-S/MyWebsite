import React from 'react';

function Copyright() {
    const CopyrightStyle = {
        display: 'flex',         // Flexboxを使用
        justifyContent: 'center', // 水平方向に中央揃え
        alignItems: 'center',    // 垂直方向に中央揃え
        overflow: 'hidden',      // コンテンツがはみ出さないようにする
        margin: '0',             // マージンをリセット
        padding: '0',            // パディングをリセット
    };

    return (
        <div style={CopyrightStyle}>
            © 2024 Masastoshi SERIZAWA. All rights reserved.
        </div>
    );
};

export default Copyright;
