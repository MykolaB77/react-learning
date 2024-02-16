import React from "react";

function ProfileCard() {
    const user = {
        src: 'https://img.myloview.com.br/adesivos/icone-de-avatar-masculino-ou-retrato-cara-jovem-bonito-ilustracao-vetorial-700-146000674.jpg',
        name: 'Nick',
        lastName: 'Johnson',
        occupation: 'doctor',
        hairColor: 'brown',
        heigth: '1.95 m',
        hobbys: 'basketball, cooking, swimming'
    }
    return (
        <div className="user-card">
            <img className="avatar-foto" src={user.src} alt="Nick's avatar" />
            <h2>Name: {user.name}</h2>
            <h2>Lastname: {user.lastName}</h2>
            <p>Occupation: {user.occupation}</p>
            <p>Hair color: {user.hairColor}</p>
            <p>Heigth: {user.heigth}</p>
            <p>Hobbys: {user.hobbys}</p>
        </div>
    )
}

export default ProfileCard