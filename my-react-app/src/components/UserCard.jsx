import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://img.freepik.com/premium-photo/funny-cute-chubby-cat-white-background_441990-11427.jpg" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            border: '2px solid #c266eaff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#ea66c7ff', margin: '10px 0' }}>
        ศศิธร กิจเจริญ
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        รหัสนักศึกษา 660710773
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;