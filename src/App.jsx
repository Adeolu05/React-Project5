import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    const user = {
        name: 'DAVID PELUOLA',
        imageUrl: 'src/assets/david.jpg',
        bio: 'A passionate developer with a love for coding and problem-solving.',
        skills: ['JavaScript', 'React', 'HTML', 'CSS'],
    };

    return (
        <div className="App">
            <ProfileCard {...user} />
        </div>
    );
}

export default App;