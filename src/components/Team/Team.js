import React from 'react';

const Team = (props) => {
    const {strTeam, idTeam} = props.team;
    return (
        <div>
            <h2>Team Name: {strTeam} </h2>
            <p>Id {idTeam} </p>
        </div>
    );
};

export default Team;