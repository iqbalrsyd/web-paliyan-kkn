import React from 'react';

const ProfileSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
                <h3 className="text-xl font-semibold">Name: John Doe</h3>
                <p className="text-gray-700">Email: johndoe@example.com</p>
                <p className="text-gray-700">Bio: A brief description about the user goes here.</p>
            </div>
        </div>
    );
};

export default ProfileSection;